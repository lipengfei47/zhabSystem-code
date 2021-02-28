// 党员占比
import echarts from 'echarts'
var data = {
  name: '持证人数',
  value: [39],
  nAmount: 566557.14
}
var color = ['#9FD3FF', '#9FD3FF', '#9FD3FF']
export function chartOptionHaveCard () {
  return {
    title: {
      text: data.value[0] + '%',
      textStyle: {
        color: color[2],
        fontSize: 18
      },
      itemGap: 20,
      left: 'center',
      top: 'center'
    },
    graphic: [{
      type: 'text',
      z: 100,
      left: 'center',
      top: '92%',
      style: {
        fill: '#fff',
        text: data.name,
        font: '10px Microsoft YaHei'
      }
    }],
    tooltip: {
      formatter: function (params) {
        return '<span style="color: #fff;">占比：' + params.value + '%</span>'
      }
    },
    angleAxis: {
      max: 100,
      clockwise: false, // 逆时针
      // 隐藏刻度线
      show: false,
      startAngle: 120
    },
    radiusAxis: {
      type: 'category',
      show: true,
      axisLabel: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    },
    polar: [{
      center: ['50%', '50%'], // 中心点位置
      radius: '80%' // 图形大小
    }],
    series: [{
      name: '小环',
      type: 'gauge',
      splitNumber: 8,
      radius: '100%',
      center: ['50%', '50%'],
      startAngle: 0,
      endAngle: 359.9999,
      axisLine: {
        show: false
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: color[1],
          width: 3,
          type: 'dotted',
          shadowBlur: 1,
          shadowColor: color[1]
        },
        length: 3
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      detail: {
        show: false
      }
    },
    {
      type: 'pie',
      name: '内层细圆环',
      radius: ['61%', '53%'],
      startAngle: 120,
      hoverAnimation: false,
      clockWise: true,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
            offset: 0,
            color: color[0]
          }, {
            offset: 1,
            color: color[1]
          }])
        }
      },
      tooltip: {
        show: false

      },
      label: {
        show: false
      },
      data: [100]
    }
    ]
  }
}
var data1 = {
  name: '无证人数',
  value: [15],
  nAmount: 566557.14
}
var color1 = ['#FFF09F', '#FFF09F', '#FFF09F']

export function chartOptionNoneCard () {
  return {
    title: {
      text: data1.value[0] + '%',
      textStyle: {
        color: color1[2],
        fontSize: 18
      },
      itemGap: 20,
      left: 'center',
      top: 'center'
    },
    graphic: [{
      type: 'text',
      z: 100,
      left: 'center',
      top: '92%',
      style: {
        fill: '#fff',
        text: data1.name,
        font: '10px Microsoft YaHei'
      }
    }],
    tooltip: {
      formatter: function (params) {
        return '<span style="color: #fff;">占比：' + params.value + '%</span>'
      }
    },
    angleAxis: {
      max: 100,
      clockwise: false, // 逆时针
      // 隐藏刻度线
      show: false,
      startAngle: 120
    },
    radiusAxis: {
      type: 'category',
      show: true,
      axisLabel: {
        show: false
      },
      axisLine: {
        show: false

      },
      axisTick: {
        show: false
      }
    },
    polar: [{
      center: ['0%', '0%'], // 中心点位置
      radius: '100%' // 图形大小

    }],
    series: [{
      name: '小环',
      type: 'gauge',
      splitNumber: 8,
      radius: '100%',
      center: ['50%', '50%'],
      startAngle: 0,
      endAngle: 359.9999,
      axisLine: {
        show: false
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: color1[1],
          width: 3,
          type: 'dotted',
          shadowBlur: 1,
          shadowColor: color1[1]
        },
        length: 3
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      detail: {
        show: false
      }
    },
    {
      type: 'pie',
      name: '内层细圆环',
      radius: ['61%', '53%'],
      startAngle: 120,
      hoverAnimation: false,
      clockWise: true,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
            offset: 0,
            color: color1[0]
          }, {
            offset: 1,
            color: color1[1]
          }])
        }
      },
      tooltip: {
        show: false

      },
      label: {
        show: false
      },
      data: [900]
    }
    ]
  }
}
const value = 650
const int = value.toFixed(2).split('.')[0]

// 党员基本情况
export function chartOptionParty () {
  return {
    title: {
      text: '{a|' + int + '}',
      x: 'center',
      y: 'center',
      textStyle: {
        rich: {
          a: {
            fontSize: 18,
            color: '#29EEF3'
          }
        }
      }
    },
    series: [
      {
        name: '小环',
        type: 'gauge',
        splitNumber: 8,
        radius: '100%',
        center: ['50%', '50%'],
        startAngle: 0,
        endAngle: 359.9999,
        axisLine: {
          show: false
        },
        axisTick: {
          show: true,
          lineStyle: {
            color: '#fff',
            width: 3,
            shadowBlur: 1,
            shadowColor: '#fff'
          },
          length: 3
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        detail: {
          show: false
        }
      },
      {
        type: 'gauge',
        radius: '60%',
        clockwise: false,
        startAngle: '90',
        endAngle: '-269.9999',
        splitNumber: 30,
        detail: {
          offsetCenter: [0, 0],
          formatter: ' '
        },
        pointer: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: [
              [0, '#1885FF'],
              [52 / 100, '#1885FF'],
              [1, 'rgba(32,187,252,0.15)']
            ],
            width: 10
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: true,
          length: 32,
          lineStyle: {
            color: 'red',
            width: 0
          }
        },
        axisLabel: {
          show: false
        }
      },
      {
        type: 'pie',
        name: '内层细圆环',
        radius: ['43%', '40%'],
        hoverAnimation: false,
        clockWise: false,
        itemStyle: {
          normal: {
            color: '#1885FF'
          }
        },
        label: {
          show: false
        },
        data: [100]
      }
    ]
  }
}
