var express = require('express');
var router = express.Router();
var Mock = require('mockjs');
var Random = Mock.Random;

var createData = function() {
    var data = [];
    data = Mock.mock({
      'list|20':[{
            'id|+1':1,
            'status|1':['手动','自动','定时'],//或相关代号，由后端定
            'version|3-5':'Abc',
            'serviceName':'@name',
            'buildType|1':['门禁构建','版本构建'],//或相关代号，由后端定
            'branch|1-2':'Per',
            'pipelineName|1-2':'Nac',
            'progress|2-4':[{
                'id|+1':1,
                'runstate|1':['Complete','Failure','Running','Waiting'],
                'label|1-3':'lab'
            }],
            'keyInfo|2-4':'Bat',
            'startTime':Random.datetime(),
            'costTime':Random.datetime(),
            'creator':'@name'
        }]
      });
    return data.list
}

//灰度环境信息
router.get('/ringinfo', function (req, res, next) {
  var data =Mock.mock({
      'list|4':[{
            'id|+1':1,
            'ring_name':'@name',
            'ring_desc':'CoreCD Ring0集群,支持CoreALM，CoreCD, CoreLab工具构建和使用',
            'product_info':'Core CD',
            'cluster_info|1':'Dashboard VM IP=100.12.123.13'
        }]
      });

  res.send({
    meta : {
      message: 'success'
    },
    status:true,
    data: data.list
  })
});

//删除指定的灰度环境
router.delete('/ringinfo', function(req, res, next){
  var data =Mock.mock({
        'status|1':['success','failure']
      });

  res.send({
    meta : {
      message: data.status
    },
    status:data.status,
    data: []
  })
});

//新建灰度环境配置信息
router.post('/ringinfo', function(req, res, next){
  var reqbody = req.body;
  var data =Mock.mock({
        'status|1':['success','failure']
      });

  res.send({
    meta : {
      message: data.status
    },
    status:true,
    data:req.body
  })
})

module.exports = router;
