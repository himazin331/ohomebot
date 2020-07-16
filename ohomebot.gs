
const SHEET_URL = "https://docs.google.com/spreadsheets/d/1PuMeKql3I2V8BsBANM5vMhokKhrhcZa7oVsD7TvbNB4/edit?usp=sharing"

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
  name = text.replace("@ohomebot(開発:G020C1118)","");
  
  return name;
}

// 定型文を取得
function msgget(name, sheets)
{
  // 乱数取得
  var msg_lastRow = sheets.getRange("A2:A81").getLastRow() // 行数取得
  var row = Math.ceil(Math.random() * (msg_lastRow-1)) + 1;
 
  // 定型文取得
  var sheet = sheets.getActiveSheet();
  msg = sheet.getRange(row, 1).getValue();
  
  if (name != ""){
    // 名前置き換え
    msg = msg.replace(/君/g, name)
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
