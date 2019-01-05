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



//系统告警
router.get('/systemwarn', function (req, res, next) {
  var data =Mock.mock({
      'list|20':[{
            'id|+1':1,
            'serial_number|1-100':1,
            'warn_number|1-100':1,
            'warn_name|1':['流水线编排服务异常','磁盘占用超过阈值'],
            'warn_level|1':['紧急','重要'],
            'warn_detail':'环境IP:10.114.123.12,服务名称:XX',
            'create_time':Random.datetime(),
            'finish_time':Random.datetime(),
            'contact|4':'abc'
        }] 
      });

  res.send({
    meta : {
      message: 'success'
    },
    status:true,
    data: data.list
  })
})


//服务监控
router.get('/servicewatch', function (req, res, next) {
  var data =Mock.mock({
      'list|6':[{
            'id|+1':1,
            'service_name':'@name',
            'service_ip':'112.22.111.33',
            'response_cost_time|1-100':1,
        }] 
      });

  res.send({
    meta : {
      message: 'success'
    },
    status:true,
    data: {
      ring0:data.list,
      ring1:data.list
    }
  })
});

//生成VM监控页面图表数据
var createVMCharts = function () {
  var data = [];
  var results = [];
  for(var i = 0; i < 3; i++) {
     var data =Mock.mock({
          'legend':Random.ip(),
          'data':[],
          'xAxis':['4-12','4-13','4-14','4-15','4-16','4-17']
      });
      for(var j = 0; j < 6; j++){
        data.data.push(Random.integer(0,100));
      }
      results.push(data);
  }
  return results;
}

//vm监控
router.get('/vmwatch', function (req, res, next) {
  res.send({
    meta : {
      message: 'success'
    },
    status:true,
    data: {
      ring0cpuChart:createVMCharts(),
      ring0discChart:createVMCharts(),
      ring1cpuChart:createVMCharts(),
      ring1discChart:createVMCharts(),
    }
  })
});

module.exports = router;
