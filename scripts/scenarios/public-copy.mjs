// Only publication-status copy and unavailable-file directions change here.
// Research, prices, measured outcomes and consequential limitations are untouched.
export function publicCopy(body, locale) {
  const replacements = locale !== 'en' && locale !== 'zh' ? [] : locale === 'en' ? [
    [/The local draft package’s HTML and XLSX comparison of five laptops is described in the /g, 'The five-laptop comparison is described in the '],
    [/The local draft package contains the /g, 'Supporting material includes the '],
    [/In the local draft package, use the /g, 'Use the '],
    [/The pricing workbook and supporting evidence files belong to the local draft package, not a public download\. They need approved hosting before public download links can be offered; the workbook instructions below apply if you have the package\./g, 'The pricing-workbook instructions below describe the original model. Only the workbooks listed under Downloads are public; original supporting evidence remains private.'],
    [/The workbook and supporting evidence files belong to the local draft package, not a public download; they need approved hosting before public download links can be offered\. If you have the package, use the workbook/g, 'Use the workbook listed under Downloads'],
    [/Want to see how the figures fit together\? The guide, sources and assumptions, area price notes and buy-plan.xlsx belong to the local draft package, not a public download\. The workbook and evidence files need approved hosting before they can be offered publicly\. If you have the package, update/g, 'The original supporting notes remain private; the approved workbook is listed under Downloads. Update'],
    [/The four saved, building-specific DLD result PDFs linked below are supporting files in the local draft package\. Use them if you have the package; they are not public downloads\./g, 'The four saved, building-specific DLD result PDFs are retained evidence, not public downloads.'],
    [/(?:Keep (?:the |their )?(?:accompanying |sibling )folders together so (?:these |the )local (?:links|downloads) (?:work|open)|Keep the sibling folders together so the links work);?\s*(?:they are not (?:newly )?hosted (?:download pages|files)|they are not newly hosted public downloads)?\./g, ''],
    [/(?:They|These) are local files, not newly hosted public downloads; keep (?:their |the )sibling folders together(?: so the links work)?\./g, ''],
    [/The measured outputs and replay materials are local draft-package evidence, not promised public downloads or a ready-made installer\./g, 'The measured outputs and replay materials remain private evidence, not public downloads or a ready-made installer.'],
    [/\b(?:Open|open|Download|download|Follow|follow|Read|read) ([^\n.\[\]]{0,160}?) \(original supporting file is not published; use the information in this guide\)/g, '$1 (original supporting file is not published; use the information in this guide)'],
  ] : [
    [/本地草稿资料包的五款电脑 HTML 和 XLSX 比较文件，见/g, '五款电脑的比较，见'],
    [/本地草稿资料包(?:中)?(?:的|包含)/g, '配套资料'],
    [/文件在本地，不是新上线的公开下载；同级文件夹别挪散，链接才找得到。/g, ''],
    [/请保持同级文件夹位置，免得本地文件打不开；这些不是新上线的公开下载。/g, ''],
    [/请把随附文件夹放在一起，才能正常打开这些本地链接；它们不是在线托管的下载页。/g, ''],
    [/这些是本地文件，不是新上线的公开下载；同级文件夹(?:别挪散，链接才能正常使用|请放在一起)。/g, ''],
    [/请保留同级文件夹的位置，链接才方便打开；这些是本地文件，不是新上线的下载。/g, ''],
    [/保留附带文件夹结构，链接才能正常打开。/g, ''],
    [/定价工作簿和佐证文件属于本地草稿资料包，不是公开下载文件。须先获准托管，才能提供公开下载链接；下面的表格操作说明适用于已经拿到资料包的读者。/g, '下文描述原始定价模型的操作。仅“下载工作簿”列出的工作簿公开提供；原始佐证文件不公开。'],
    [/工作簿和佐证文件属于本地草稿资料包，不是公开下载文件；须先获准托管，才能提供公开下载链接。拿到资料包后，使用工作簿时，/g, '使用“下载工作簿”列出的工作簿时，'],
    [/想看清这些钱是怎么算的？购房指南、来源与假设、地区房价说明和 buy-plan.xlsx 都属于本地草稿资料包，不是公开下载文件。工作簿和佐证文件须先获准托管，才能向公众提供下载。拿到资料包后，请先/g, '原始购房说明和佐证文件不公开；获准发布的工作簿列在“下载工作簿”。请先'],
    [/下面链接的四份已保存 DLD 楼宇查询结果 PDF，是本地草稿包中的配套资料；拿到配套文件后才能使用，不是公开下载。/g, '四份已保存 DLD 楼宇查询结果 PDF 为保留佐证，不公开下载。'],
    [/若你已持有本地草稿资料包中的公式版 XLSX，编辑前请先保存副本。/g, '编辑公式版 XLSX 前，请先保存副本。'],
    [/实测输出和复现材料属于本地草稿资料包，不是承诺公开下载，也不是现成安装器。/g, '实测输出和复现材料为保留佐证，不公开下载，也不是现成安装器。'],
    [/(?:打开|下载)([^\n。\[\]]{0,100}?)（原始辅助文件未公开；请依据本文内容操作）/g, '$1（原始辅助文件未公开；请依据本文内容操作）'],
  ];
  for (const [pattern, replacement] of replacements) body = body.replace(pattern, replacement);
  return body;
}
