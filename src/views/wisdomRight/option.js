// 党员占比
import echarts from 'echarts'

export function chartOptionSatff () {
  return {

    title: [{
      text: '外地人员',
      x: '48%',
      bottom: '5%',
      textStyle: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '100'
      }
    }, {
      text: '75%',
      x: '52%',
      top: '34%',
      textStyle: {
        fontSize: '20',
        color: '#FFFFFF',
        fontFamily: 'DINAlternate-Bold, DINAlternate',
        foontWeight: '600'
      }
    }],
    polar: {
      radius: ['42%', '60%'],
      center: ['65%', '40%']
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
      radius: ['42%', '60%'],
      hoverAnimation: false,
      center: ['65%', '40%'],
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
      radius: ['42%', '60%'],
      hoverAnimation: false,
      center: ['65%', '40%'],
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
      x: '18%',
      bottom: '5%',
      textStyle: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '100'
      }
    }, {
      text: '25%',
      x: '22%',
      top: '34%',
      textStyle: {
        fontSize: '20',
        color: '#FFFFFF',
        fontFamily: 'DINAlternate-Bold, DINAlternate',
        foontWeight: '600'
      }
    }],
    polar: {
      radius: ['42%', '60%'],
      center: ['35%', '40%']
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
      data: [25],
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
      radius: ['42%', '60%'],
      hoverAnimation: false,
      center: ['35%', '40%'],
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
      radius: ['42%', '60%'],
      hoverAnimation: false,
      center: ['35%', '40%'],
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
