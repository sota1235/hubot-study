// Description:
//   この部分がhubot helpの説明に出るよ
//
// Commands:
//   hubot ping -- return pong

module.exports = function (robot) {
  var SAMPLE = 'SAMPLE';

  /**
   * hubot {command}の実装例
   */
  robot.respond(/ping/i, function (msg) {
    msg.send('PONG');
  });

  /**
   * hearの実装例
   */
  robot.hear(/おはようhubot/i, function (msg) {
    msg.send('おはよう');
  });

  /**
   * msgからいろんな情報を取り出す例
   */
  robot.respond(/whoami/i, function (msg) {
    // 発言された部屋
    var room = msg.message.room
    // 発言したユーザー
    var user = msg.message.user.name

    msg.send('あなたの名前は' + user + 'です');
  });

  /**
   * 正規表現でコマンドを抜き出す
   */
  robot.respond(/owl\s+(.+)/i, function (msg) {
    var query = msg.match[1];

    msg.send('http://owl.style.dev.istyle.local/search?q=' + query);
  });

  /**
   * データを永続化する
   */

  /**
   * データをセット
   */
  robot.respond(/brain set\s(.+)\s(.+)/i, function (msg) {
    var key   = msg.match[1];
    var value = msg.match[2];

    var data = robot.brain.get(SAMPLE) || {};
    data[key] = value;
    robot.brain.set(SAMPLE, data);
    msg.send('Setting data success!');
  });

  /**
   * データを取得
   */
  robot.respond(/brain get\s(.+)/i, function (msg) {
    var key = msg.match[1];

    var data  = robot.brain.get(SAMPLE) || {};
    var value = data[key];
    msg.send('Getting data success! Data is ' + value + '.');
  });

  /**
   * 全データをdump
   */
  robot.respond(/brain dump/i, function (msg) {
    var data = robot.brain.get(SAMPLE) || {};

    msg.send(JSON.stringify(data));
  });
};
