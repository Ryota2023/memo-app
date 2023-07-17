// 今日の日付データを変数に格納
var today = new Date(); 
// 年・月・日・曜日を取得
var year = today.getFullYear();
var month = today.getMonth() + 1;
var week = today.getDay();
var day = today.getDate();
var week_ja = ["日", "月", "火", "水", "木", "金", "土"];
// 年・月・日・曜日を書き出す
document.querySelector('.today').innerText = year + "年" + month + "月" + day + "日 " + week_ja[week] + "曜日";

