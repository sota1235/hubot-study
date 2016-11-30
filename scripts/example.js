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
};
