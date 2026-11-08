import path from 'node:path';
import YAML from 'yaml';
import { publicCopy } from './public-copy.mjs';

// Locales a guide may be published in. Mirrors src/lib/site.ts (scenarioLocales + localeSegment);
// import-scenarios.test.mjs fails if the two drift. English is required for every guide.
export const segments = { en: '', zh: 'zh', 'zh-Hant': 'zh-hant', ja: 'ja', fr: 'fr', es: 'es', id: 'id', 'pt-BR': 'pt-br', vi: 'vi', th: 'th', ko: 'ko', de: 'de' };
export const siteLocales = Object.keys(segments);
export const scenarioPath = (locale, slug) => `${segments[locale] ? `/${segments[locale]}` : ''}/scenarios/${slug}/`;
// Same strings as the package (content_utils.PRODUCER_LABELS); the importer rejects data that disagrees.
export const labels = {
  en: 'Produced by a general Cowork task on DeTars.xyz', zh: '本文由 DeTars.xyz 的通用 Cowork 任务产出',
  ja: 'この記事は DeTars.xyz の汎用 Cowork タスクで作成されました', es: 'Producido por una tarea general de Cowork en DeTars.xyz',
  fr: 'Produit par une tâche Cowork générale sur DeTars.xyz', 'zh-Hant': '本文由 DeTars.xyz 的通用 Cowork 任務產出',
  id: 'Dibuat oleh tugas Cowork umum di DeTars.xyz', 'pt-BR': 'Produzido por uma tarefa geral do Cowork no DeTars.xyz',
  vi: 'Bài viết do một tác vụ Cowork thông dụng trên DeTars.xyz thực hiện', th: 'จัดทำโดยงาน Cowork ทั่วไปบน DeTars.xyz',
  ko: 'DeTars.xyz의 범용 Cowork 작업으로 작성된 글입니다',
  de: 'Erstellt durch eine allgemeine Cowork-Aufgabe auf DeTars.xyz'
};
// Text the importer itself writes into a page. en and zh are the strings that shipped with the section.
export const text = {
  de: { sources: 'Quellen und Zugriffsdatum', sourcesIntro: 'Externe Quellen aus der ursprünglichen Recherche; der Website-Import ist keine erneute Prüfung.', access: 'Zugriffsdatum', downloads: 'Downloads', downloadsIntro: 'Datenschutzgeprüfte Veröffentlichungskopien der ursprünglichen Beispieltabellen. Vor dem Bearbeiten eine Kopie speichern und die genannten Einschränkungen beachten.', unavailable: ' (Originaldatei nicht veröffentlicht; nutzen Sie die Angaben in diesem Leitfaden)', notPublished: ' (nicht veröffentlicht)', bareLocal: 'ursprüngliche Begleitdatei (nicht veröffentlicht)' },
  en: { sources: 'Sources and access dates', sourcesIntro: 'External sources retained from the original research; site import is not a new source refresh.', access: 'Access date', downloads: 'Downloads', downloadsIntro: 'Privacy-checked publication copies of the original example workbooks, not refreshed quotes or personal financial records. Save a copy before editing and retain the limitations described above.', unavailable: ' (original supporting file is not published; use the information in this guide)', notPublished: ' (not published)', bareLocal: 'original supporting file (not published)' },
  zh: { sources: '来源与查阅日期', sourcesIntro: '以下为原始调研保留的外部来源；上线导入不代表重新查阅。', access: '查阅日期', downloads: '下载工作簿', downloadsIntro: '这是原始示例工作簿的隐私检查发布副本，不是更新后的报价或个人财务记录。编辑前请保存副本，保留正文所述限制。', unavailable: '（原始辅助文件未公开；请依据本文内容操作）', notPublished: '（未公开）', bareLocal: '原始辅助文件（未公开）' },
  'zh-Hant': { sources: '來源與查閱日期', sourcesIntro: '以下為原始調研保留的外部來源；上線匯入不代表重新查閱。', access: '查閱日期', downloads: '下載工作簿', downloadsIntro: '這是原始範例工作簿經隱私檢查的發布副本，不是更新後的報價或個人財務紀錄。編輯前請先存一份副本，並保留正文所述的限制。', unavailable: '（原始輔助檔案未公開；請依據本文內容操作）', notPublished: '（未公開）', bareLocal: '原始輔助檔案（未公開）' },
  ja: { sources: '出典と参照日', sourcesIntro: '元の調査で保持した外部の出典です。サイトへの取り込みは、出典の再確認を意味しません。', access: '参照日', downloads: 'ダウンロード', downloadsIntro: '元の例示ワークブックをプライバシー確認のうえ公開用にしたコピーです。更新された見積もりや個人の家計記録ではありません。編集前にコピーを保存し、本文に記した制約を保ってください。', unavailable: '（元の補助ファイルは非公開です。このガイドの情報をご利用ください）', notPublished: '（非公開）', bareLocal: '元の補助ファイル（非公開）' },
  fr: { sources: 'Sources et dates de consultation', sourcesIntro: 'Sources externes conservées de la recherche d’origine ; l’import sur le site n’est pas une nouvelle vérification des sources.', access: 'Date de consultation', downloads: 'Téléchargements', downloadsIntro: 'Copies publiées, contrôlées pour la confidentialité, des classeurs d’exemple d’origine ; ce ne sont ni des devis actualisés ni des données financières personnelles. Enregistrez une copie avant de la modifier et conservez les limites décrites plus haut.', unavailable: ' (le fichier d’appui d’origine n’est pas publié ; appuyez-vous sur les informations de ce guide)', notPublished: ' (non publié)', bareLocal: 'fichier d’appui d’origine (non publié)' },
  es: { sources: 'Fuentes y fechas de consulta', sourcesIntro: 'Fuentes externas conservadas de la investigación original; la importación al sitio no es una nueva revisión de las fuentes.', access: 'Fecha de consulta', downloads: 'Descargas', downloadsIntro: 'Copias publicadas, revisadas por privacidad, de los libros de ejemplo originales; no son cotizaciones actualizadas ni registros financieros personales. Guarda una copia antes de editar y conserva las limitaciones descritas arriba.', unavailable: ' (el archivo de apoyo original no está publicado; usa la información de esta guía)', notPublished: ' (no publicado)', bareLocal: 'archivo de apoyo original (no publicado)' },
  id: { sources: 'Sumber dan tanggal akses', sourcesIntro: 'Sumber eksternal yang dipertahankan dari riset asli; impor ke situs bukan penyegaran sumber baru.', access: 'Tanggal akses', downloads: 'Unduhan', downloadsIntro: 'Salinan publikasi buku kerja contoh asli yang telah diperiksa privasinya, bukan penawaran harga yang diperbarui atau catatan keuangan pribadi. Simpan salinan sebelum mengedit dan pertahankan batasan yang dijelaskan di atas.', unavailable: ' (berkas pendukung asli tidak dipublikasikan; gunakan informasi dalam panduan ini)', notPublished: ' (tidak dipublikasikan)', bareLocal: 'berkas pendukung asli (tidak dipublikasikan)' },
  'pt-BR': { sources: 'Fontes e datas de acesso', sourcesIntro: 'Fontes externas mantidas da pesquisa original; a importação para o site não é uma nova atualização das fontes.', access: 'Data de acesso', downloads: 'Downloads', downloadsIntro: 'Cópias publicadas, com privacidade verificada, das planilhas de exemplo originais; não são cotações atualizadas nem registros financeiros pessoais. Salve uma cópia antes de editar e mantenha as limitações descritas acima.', unavailable: ' (o arquivo de apoio original não está publicado; use as informações deste guia)', notPublished: ' (não publicado)', bareLocal: 'arquivo de apoio original (não publicado)' },
  vi: { sources: 'Nguồn và ngày truy cập', sourcesIntro: 'Các nguồn bên ngoài được giữ lại từ nghiên cứu gốc; việc nhập lên trang web không phải là làm mới nguồn.', access: 'Ngày truy cập', downloads: 'Tải xuống', downloadsIntro: 'Bản xuất bản đã kiểm tra quyền riêng tư của các sổ tính mẫu gốc, không phải báo giá đã cập nhật hay hồ sơ tài chính cá nhân. Hãy lưu một bản sao trước khi chỉnh sửa và giữ nguyên các giới hạn nêu ở trên.', unavailable: ' (tệp hỗ trợ gốc không được công bố; hãy dùng thông tin trong hướng dẫn này)', notPublished: ' (không công bố)', bareLocal: 'tệp hỗ trợ gốc (không công bố)' },
  th: { sources: 'แหล่งที่มาและวันที่เข้าถึง', sourcesIntro: 'แหล่งที่มาภายนอกที่เก็บไว้จากการค้นคว้าต้นฉบับ การนำเข้าสู่เว็บไซต์ไม่ได้หมายถึงการตรวจแหล่งที่มาใหม่', access: 'วันที่เข้าถึง', downloads: 'ดาวน์โหลด', downloadsIntro: 'สำเนาสำหรับเผยแพร่ที่ผ่านการตรวจความเป็นส่วนตัวของสมุดงานตัวอย่างต้นฉบับ ไม่ใช่ใบเสนอราคาที่อัปเดตหรือบันทึกการเงินส่วนบุคคล โปรดบันทึกสำเนาก่อนแก้ไขและคงข้อจำกัดที่อธิบายไว้ข้างต้น', unavailable: ' (ไฟล์สนับสนุนต้นฉบับไม่เผยแพร่ โปรดใช้ข้อมูลในคู่มือนี้)', notPublished: ' (ไม่เผยแพร่)', bareLocal: 'ไฟล์สนับสนุนต้นฉบับ (ไม่เผยแพร่)' },
  ko: { sources: '출처와 열람일', sourcesIntro: '원래 조사에서 보관한 외부 출처입니다. 사이트로 가져온 것은 출처를 새로 확인했다는 뜻이 아닙니다.', access: '열람일', downloads: '다운로드', downloadsIntro: '원래 예시 통합 문서를 개인정보 검토를 거쳐 공개용으로 만든 사본이며, 갱신된 견적이나 개인 재무 기록이 아닙니다. 편집하기 전에 사본을 저장하고 위에서 설명한 한계를 그대로 유지하세요.', unavailable: ' (원본 보조 파일은 공개되지 않습니다. 이 가이드의 정보를 이용하세요)', notPublished: ' (비공개)', bareLocal: '원본 보조 파일(비공개)' }
};
/** GitHub-style heading id, as Astro's markdown renderer generates it (en/zh keep their literal anchors). */
export const headingId = heading => heading.trim().toLowerCase().replace(/[^\p{L}\p{M}\p{N}\p{Pc} -]/gu, '').replace(/ /g, '-');
export const sourcesAnchor = locale => locale === 'en' ? 'sources-and-access-dates' : locale === 'zh' ? '来源与查阅日期' : headingId(text[locale].sources);
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
  const t = text[locale];
  return `\n\n## ${t.sources}\n\n${t.sourcesIntro}\n\n` +
    sources.map(s => `- [${s.title.replace(/[\[\]\n]/g, '')}](${s.url}) — ${t.access}: ${s.accessDate}`).join('\n') + '\n';
}
export const localLinkPattern = /\[([^\]]+)\]\((?!https?:\/\/|#|mailto:)([^)]+)\)/g;
const barePattern = /(https?:\/\/[^\s<>]+)|(?<![\w/])`?((?:file:\/\/)?\/(?:Volumes|Users|home|tmp)\/[^\s`<>)\]，。；]+|(?:\.\.\/)+(?:[^\s`<>)\]，。；]+))`?/g;
export function transformBody(original, { slug, locale, workbooks = [], sources, faqHeading }) {
  let body = original.replace(/^# [^\n]*\n/m, '').replace(/<!--[\s\S]*?-->/g, '');
  const links = [];
  const t = text[locale];
  const unavailable = t.unavailable;
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
    return isSources ? `[${label}](#${sourcesAnchor(locale)})` : `${label}${tableLink ? t.notPublished : unavailable}`;
  });
  body = body.replace(barePattern, (full, externalUrl, target) => {
    if (externalUrl) return full;
    links.push({ target, disposition: 'rewritten-bare-local-path' });
    return t.bareLocal;
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
  if (workbooks.length) body += `\n\n## ${t.downloads}\n\n${t.downloadsIntro}\n\n` + workbooks.map(w => `- [${path.basename(w.source)}](${w.publicUrl})`).join('\n');
  body += sourceSection(sources, locale);
  // Strip only accidental single trailing spaces, preserving Markdown's two-space hard breaks.
  return { body: body.replace(/(?<=\S) $/gm, '').trimEnd() + '\n', faq, links };
}
