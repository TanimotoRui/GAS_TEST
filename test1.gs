function writeData() {
  const sheet = SpreadsheetApp.getActiveSheet();
  let data = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
  ];

  sheet.getRange(1, 1, 4, 3).setValues(data)
  Logger.log(kuma.myFunction())
}
