// Description:
//   この部分がhubot helpの説明に出るよ
//
// Commands:
//   ping -- return pong


module.exports = function (robot) {
  robot.respond(/ping/i, function (msg) {
    msg.send('PONG');
  });
};
