import path from 'node:path';
import YAML from 'yaml';
import { publicCopy } from './public-copy.mjs';

export const labels = { en: 'Produced by a general Cowork task on DeTars.xyz', zh: '本文由 DeTars.xyz 的通用 Cowork 任务产出' };
export function parseArticle(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!match) throw new Error('Missing article frontmatter');
  return { metadata: YAML.parse(match[1]), body: text.slice(match[0].length) };
}
export function sanitize(value) {
  if (Array.isArray(value)) return value.map(sanitize);
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value)
    .filter(([key]) => !/^(?:runFolders|sourceArtifacts|originalMarkdown|originalAudit|originalPaths|evidenceLink|sourceListLink|reviewSchema)$/i.test(key))
    .map(([key, val]) => [key, sanitize(val)]));
  if (typeof value === 'string') return value.replace(/(?:file:\/\/)?\/(?:Users|Volumes|home|tmp)\/[^\s"'<>]+/g, '[local evidence retained privately]')
    .replace(/(?:\.\.\/)+(?:[^\s"'<>]+)/g, '[local evidence retained privately]');
  return value;
}
export function plain(markdown) {
  return markdown.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/\[([^\]]+)\]\[[^\]]*\]/g, '$1')
    .replace(/<[^>]*>/g, '').replace(/[*_`]/g, '').replace(/\s+/g, ' ').trim();
}
export function extractFaq(body, allowedHeading) {
  if (!allowedHeading) return [];
  const lines = body.split('\n');
  const start = lines.findIndex(line => line === `## ${allowedHeading}`);
  if (start < 0) throw new Error(`FAQ heading changed: ${allowedHeading}`);
  let end = lines.findIndex((line, index) => index > start && /^## /.test(line));
  if (end < 0) end = lines.length;
  const paragraphs = lines.slice(start + 1, end).join('\n').split(/\n\s*\n/);
  return paragraphs.flatMap(p => {
    const match = p.trim().match(/^\*\*([^\n]+?)\*\*\s*([\s\S]+)$/);
    return match && /[?？][”"’']?$/.test(match[1].trim()) ? [{ q: plain(match[1]), a: plain(match[2]) }] : [];
  });
}
export function sourceSection(sources, locale) {
  return `\n\n## ${locale === 'zh' ? '来源与查阅日期' : 'Sources and access dates'}\n\n` +
    (locale === 'zh' ? '以下为原始调研保留的外部来源；上线导入不代表重新查阅。\n\n' : 'External sources retained from the original research; site import is not a new source refresh.\n\n') +
    sources.map(s => `- [${s.title.replace(/[\[\]\n]/g, '')}](${s.url}) — ${locale === 'zh' ? '查阅日期' : 'Access date'}: ${s.accessDate}`).join('\n') + '\n';
}
export const localLinkPattern = /\[([^\]]+)\]\((?!https?:\/\/|#|mailto:)([^)]+)\)/g;
const barePattern = /(https?:\/\/[^\s<>]+)|(?<![\w/])`?((?:file:\/\/)?\/(?:Volumes|Users|home|tmp)\/[^\s`<>)\]，。；]+|(?:\.\.\/)+(?:[^\s`<>)\]，。；]+))`?/g;
export function transformBody(original, { slug, locale, workbooks = [], sources, faqHeading }) {
  let body = original.replace(/^# [^\n]*\n/m, '').replace(/<!--[\s\S]*?-->/g, '');
  const links = [];
  const unavailable = locale === 'zh' ? '（原始辅助文件未公开；请依据本文内容操作）' : ' (original supporting file is not published; use the information in this guide)';
  body = body.replace(localLinkPattern, (full, label, target, offset, input) => {
    const clean = decodeURIComponent(target.split(/[?#]/)[0]);
    const workbook = /\.xlsx$/i.test(clean) && workbooks.find(w => w.publicUrl && path.basename(w.source) === path.basename(clean));
    if (workbook) {
      links.push({ target, disposition: 'hosted-workbook', publicUrl: workbook.publicUrl });
      return `[${label.replace(/^Local Excel /i, 'Excel ').replace(/^本地 Excel /, 'Excel ')}](${workbook.publicUrl})`;
    }
    const isSources = /(?:sources|verification|audit|evidence|notes)/i.test(clean);
    links.push({ target, disposition: isSources ? 'expanded-sources' : 'rewritten-unavailable' });
    // A long repeated disclaimer in every table cell makes the actual decision data unreadable.
    // Keep a concise status per table link; prose retains the fuller unavailable-file wording.
    const lineStart = input.lastIndexOf('\n', offset);
    const tableLink = input.slice(lineStart + 1, offset).trimStart().startsWith('|');
    return isSources ? `[${label}](#${locale === 'zh' ? '来源与查阅日期' : 'sources-and-access-dates'})` : `${label}${tableLink ? locale === 'zh' ? '（未公开）' : ' (not published)' : unavailable}`;
  });
  body = body.replace(barePattern, (full, externalUrl, target) => {
    if (externalUrl) return full;
    links.push({ target, disposition: 'rewritten-bare-local-path' });
    return locale === 'zh' ? '原始辅助文件（未公开）' : 'original supporting file (not published)';
  });
  // These are package-status notices, not research limitations. Keep every substantive caveat.
  body = body.split('\n').filter(line => !/^(?:\*\*Local draft files:|\*\*本地草稿文件|The linked files and source notes|Linked supporting files and source notes|Supporting files and source notes linked)/.test(line)
    && !/^(?:链接的|链接中的|本文链接的|本页链接的|与本草稿链接的|随本草稿链接的|本草稿链接的).*(?:本地草稿包|本地草稿文件)/.test(line)).join('\n');
  body = body.replace(/The linked files and source notes belong to the local draft package; use them only if you have that package\. Approved hosting is needed before offering public downloads\./g, '')
    .replace(/These files are local, not newly hosted public downloads\. Keep their sibling folders together so the links work\./g, '')
    .replace(/Keep the sibling folders together so these local files open correctly; they are not newly hosted public downloads\./g, '')
    .replace(/If you have the formula-driven XLSX in the local draft package, save your own copy before editing\./g, 'Save your own copy of the formula-driven XLSX before editing.')
    .replace(/The local draft package includes the /g, 'Supporting material includes the ')
    .replace(/\n{3,}/g, '\n\n').trim();
  body = publicCopy(body, locale);
  const faq = extractFaq(body, faqHeading);
  if (workbooks.length) body += `\n\n## ${locale === 'zh' ? '下载工作簿' : 'Downloads'}\n\n` + (locale === 'zh' ? '这是原始示例工作簿的隐私检查发布副本，不是更新后的报价或个人财务记录。编辑前请保存副本，保留正文所述限制。\n\n' : 'Privacy-checked publication copies of the original example workbooks, not refreshed quotes or personal financial records. Save a copy before editing and retain the limitations described above.\n\n') + workbooks.map(w => `- [${path.basename(w.source)}](${w.publicUrl})`).join('\n');
  body += sourceSection(sources, locale);
  // Strip only accidental single trailing spaces, preserving Markdown's two-space hard breaks.
  return { body: body.replace(/(?<=\S) $/gm, '').trimEnd() + '\n', faq, links };
}
