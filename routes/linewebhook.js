var express = require('express');
var linebot = require('linebot');
var router = express.Router();

var bot = linebot({
  channelId: 1539697310,
  channelSecret: '7f9b88aaeed357b643bf7b898746b3df',
  channelAccessToken: 'Ef73gNq8yQXBibD1Hg5D4MVz9M8VcxAUEzdZo8alm9U0srnRqfO+3m/KDkKBLLJy/fHlEarVXUN55onYjqci86Vx7/0j06NZh6wAgCt/wQF6BEYek+nkj79siRSIiabu4Lws+vUocMhlTBGFz2Y6egdB04t89/1O/w1cDnyilFU='
});

bot.on('message', function (event) {
  event.reply(event.message.text).then(function (data) {
    console.log(data);
      // success 
  }).catch(function (error) {
      // error 
  });
});

var linebotParser = bot.parser();
router.post('/', linebotParser);

module.exports = router;
