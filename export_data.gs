export_folder_id = 'hogehoge'

function testDrive() {
  //新規スプレッドシートをマイドライブに作成する
  const ss = SpreadsheetApp.create('テストファイル');

  //作成したスプレッドシートを軽く編集
  const editing_sheet = SpreadsheetApp.openById(ss.getId()).getSheetByName('シート1');
  const range = editing_sheet.getRange(1,1,2,3)
  const addArray = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f']
  ]
  range.setValues(addArray)

  //作成したスプレッドシートをFileオブジェクトとして取得する */
  const file = DriveApp.getFileById(ss.getId());

  //手順1で作成したスプレッドシートを指定フォルダに「追加」する
  const folder = DriveApp.getFolderById(export_folder_id); //フォルダIDを指定
  folder.addFile(file);

  //手順1で作成したスプレッドシートをマイドライブから「削除」する（今回はテストfileは不要のため削除）
  DriveApp.getRootFolder().removeFile(file);
}