const SPREADSHEET_ID = '1Mbd1C4oyb_gGQZuW3mncHhGPa7eIiEMv8a7KMC_RxVw';
const SHEET_NAME = 'Sheet1';

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle("Ricky's Productivity");
}

function saveTask(taskName, completedAt) {
  if (!taskName) {
    throw new Error('Task name is required');
  }
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
  if (!sheet) {
    throw new Error(`Sheet ${SHEET_NAME} not found`);
  }
  sheet.appendRow([taskName, completedAt || new Date()]);
  return true;
}
