function wrightData() {
  const sheet = SpreadsheetApp.getActiveSheet();
  let data = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  sheet.getRange(1, 1, 3, 3).setValues(data)
}
