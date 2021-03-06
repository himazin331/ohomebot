
const SHEET_URL = "" // GoogleスプレッドシートURL

// メンションされた
function onMessage(e)
{
  // Googleスプレッドシートアクセス
  var spreadsheet = SpreadsheetApp.openByUrl(SHEET_URL);
  
  name = nameget(e.message.text, spreadsheet); // 名前取得
  msg = msgget(name, spreadsheet); // 定型文取得
  
  return { 'text': msg };
}

// 名前を取得
function nameget(text, sheets)
{
  // "@ohomebot"を除去
  name = text.replace("@ohomebot","");
  
  return name;
}

// 定型文を取得
function msgget(name, sheets)
{
  // 定型文取得
  var sheet = sheets.getActiveSheet();
  
  // 名前未指定時
  if (name == "")
  {
    // 乱数取得
    var msg_numRow = sheets.getRange("A2:A85").getNumRows(); // 行数取得
    var row = Math.ceil(Math.random() * (msg_numRow-1)) + 1;
    
    msg = sheet.getRange(row, 1).getValue(); // 定型文取得
  }
  else // 名前指定時
  {
    // 乱数取得
    var msg_numRow = sheets.getRange("A60:A85").getNumRows(); // 行数取得
    var row = Math.ceil(Math.random() * (msg_numRow-1)) + 1;
    
    msg = sheet.getRange(59+row, 1).getValue(); // 定型文取得
    msg = msg.replace(/君/g, name); // 名前置き換え

  }
  
  return msg;
}

// botを追加
function onAddToSpace(event)
{
  var message = "";

  // DMに追加
  if (event.space.singleUserBotDm) 
  {
    message = "DMしてくれるなんて嬉しいよ！" + event.user.displayName + "さん！";
  } 
  else // グループチャットに追加
  {
    message = (event.space.displayName ? event.space.displayName : "this chat") +
               "に追加ありがとう～`ohomebot`だよ！よろしくね！";
  }

  // メンションにより追加
  if (event.message)
  {
    message = message + "\"" + event.message.text + "\"" + "って呼んでね！";
  }

  return { "text": message };
}
