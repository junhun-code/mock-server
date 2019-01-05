var express = require('express');
var router = express.Router();
var Mock = require('mockjs');
var Random = Mock.Random;

router.get('/rank', function (req, res, next) {
  var rows = [
    {
      "content":"大象又高又大，身子像一堵墙，腿像四根柱子。官员们一边看一边议论：“这么大的象，到底有多重呢？”\n曹操问：“谁有办法把这头大象称一称？”有的说：“得造一杆大秤，砍一棵大树做秤杆。”有的说：“有了大秤也不行啊，谁有那么大的力气提得起这杆大秤呢？”曹操听了直摇头。\n",
      "singleRecordId":"ef6dd370-09ba-11e9-b7da-931b31faafe0","char_count":128
    },
    {
      "content":"曹操的儿子曹冲才七岁，他站出来，说：“我有个办法。把大象赶到一艘大船上，看船身下沉多少，就沿着水面，在船舷上画一条线。再把大象赶上岸，往船上装石头，装到船下沉到画线的地方为止。然后称一称船上的石头。石头有多重，大象就有多重。”\n",
      "singleRecordId":"ef6dd371-09ba-11e9-b7da-931b31faafe0","char_count":113,
      "order_id":[4]
    }
  ]

  res.send({
    message: 'ok',
    success: true,
    code: 200,
    data: {
      rows: rows,
      vrLimitTime: 60
    }
  })
});

module.exports = router;
