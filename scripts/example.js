// Description:
//   この部分がhubot helpの説明に出るよ
//
// Commands:
//   hubot ping -- return pong

module.exports = function (robot) {
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
    room = msg.message.room
    // 発言したユーザー
    user = msg.message.user.name

    msg.send('あなたの名前は' + user + 'です');
  });
};
