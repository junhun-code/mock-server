var express = require('express');
var router = express.Router();
var Mock = require('mockjs');
var Random = Mock.Random;

router.get('/getSingleVoiceResult', function (req, res, next) {
  var data = {
    progress_code: 0,
    obvious_error_count: 0,
    result_desc: "优秀",
    slight_error_count: 0
  }

  res.send({
    message: 'ok',
    success: true,
    code: 200,
    data: data
  })
});

module.exports = router;
