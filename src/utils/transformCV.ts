function transformSheetData(sheetName: string, rows: any[]) {
  const result: Record<string, any> = {};

  rows.forEach((row) => {
    if (!result[row.LanguageCode]) {
      result[row.LanguageCode] = {};
    }

    result[row.LanguageCode][sheetName] = {
      titlePart1: row.TitlePart1 || "",
      titlePart2: row.TitlePart2 || "",
      paragraphs: Object.keys(row)
        .filter((key) => key.startsWith("P") && row[key])
        .map((key) => row[key]),
    };
  });

  return result;
}

export function transformAllSheets(sheetData: Record<string, any[]>) {
  const cvData: Record<string, any> = {};

  Object.keys(sheetData).forEach((sheetName) => {
    const transformed = transformSheetData(sheetName.toLowerCase(), sheetData[sheetName]);

    // Merge into cvData by language
    Object.keys(transformed).forEach((lang) => {
      if (!cvData[lang]) cvData[lang] = {};
      cvData[lang][sheetName.toLowerCase()] = transformed[lang][sheetName.toLowerCase()];
    });
  });

  return cvData;
}
