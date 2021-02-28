// 党员占比
import echarts from 'echarts'

export function chartOptionSatff () {
  return {

    title: [{
      text: '外地人员',
      x: 'center',
      bottom: '5%',
      textStyle: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '100'
      }
    }, {
      text: '75%',
      x: 'center',
      top: '43%',
      textStyle: {
        fontSize: '20',
        color: '#FFFFFF',
        fontFamily: 'DINAlternate-Bold, DINAlternate',
        foontWeight: '600'
      }
    }],
    polar: {
      radius: ['42%', '52%'],
      center: ['50%', '50%']
    },
    angleAxis: {
      max: 100,
      show: false
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
    series: [{
      name: '',
      type: 'bar',
      roundCap: true,
      barWidth: 90,
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(66, 66, 66, .3)'
      },
      data: [75],
      coordinateSystem: 'polar',

      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 0,
            color: '#16CEB9'
          },
          {
            offset: 1,
            color: '#6648FF'
          }
          ])
        }
      }
    },
    {
      name: '',
      type: 'pie',
      startAngle: 80,
      radius: ['56%'],
      hoverAnimation: false,
      center: ['50%', '50%'],
      itemStyle: {
        color: 'rgba(66, 66, 66, .1)',
        borderWidth: 1,
        borderColor: '#5269EE'
      },
      data: [100]
    },
    {
      name: '',
      type: 'pie',
      startAngle: 80,
      radius: ['38%'],
      hoverAnimation: false,
      center: ['50%', '50%'],
      itemStyle: {
        color: 'rgba(66, 66, 66, .1)',
        borderWidth: 1,
        borderColor: '#5269EE'
      },
      data: [100]
    }
    ]

  }
}
export function chartOptionLocal () {
  return {

    title: [{
      text: '本地人员',
      x: 'center',
      bottom: '5%',
      textStyle: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '100'
      }
    }, {
      text: '25%',
      x: 'center',
      top: '43%',
      textStyle: {
        fontSize: '20',
        color: '#FFFFFF',
        fontFamily: 'DINAlternate-Bold, DINAlternate',
        foontWeight: '600'
      }
    }],
    polar: {
      radius: ['42%', '52%'],
      center: ['50%', '50%']
    },
    angleAxis: {
      max: 100,
      show: false,
      clockwise: false
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
    series: [{
      name: '',
      type: 'bar',
      roundCap: true,
      barWidth: 90,
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(66, 66, 66, .3)'
      },
      data: [20],
      coordinateSystem: 'polar',

      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 0,
            color: '#16CEB9'
          },
          {
            offset: 1,
            color: '#6648FF'
          }
          ])
        }
      }
    },
    {
      name: '',
      type: 'pie',
      startAngle: 80,
      radius: ['56%'],
      hoverAnimation: false,
      center: ['50%', '50%'],
      itemStyle: {
        color: 'rgba(66, 66, 66, .1)',
        borderWidth: 1,
        borderColor: '#5269EE'
      },
      data: [100]
    },
    {
      name: '',
      type: 'pie',
      startAngle: 80,
      radius: ['38%'],
      hoverAnimation: false,
      center: ['50%', '50%'],
      itemStyle: {
        color: 'rgba(66, 66, 66, .1)',
        borderWidth: 1,
        borderColor: '#5269EE'
      },
      data: [100]
    }
    ]

  }
}
