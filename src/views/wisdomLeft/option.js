// 行业经营
import echarts from 'echarts'

export function chartOptionManageBar () {
  return {
    title: {
      x: 'center',
      y: '4%',
      textStyle: {
        color: '#fff',
        fontSize: '22'
      },
      subtextStyle: {
        color: '#90979c',
        fontSize: '16'

      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      top: '15%',
      right: '3%',
      left: '10%',
      bottom: '12%'
    },
    xAxis: [{
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月'],
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,0.12)'
        }
      },
      axisLabel: {
        margin: 10,
        color: '#e2e9ff',
        textStyle: {
          fontSize: 14
        }
      }
    }],
    yAxis: [{
      name: '万元',
      axisLabel: {
        formatter: '{value}',
        color: '#e2e9ff'
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: 'rgba(255,255,255,1)'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,0.12)'
        }
      }
    }],
    series: [{
      type: 'bar',
      data: [30, 80, 110, 85, 40, 20],
      barWidth: '15px',
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0.1,
            color: 'rgba(43, 202, 197)' // 0% 处的颜色
          }, {
            offset: 1,
            color: 'rgba(72, 238, 216)' // 100% 处的颜色
          }], false),
          barBorderRadius: [30, 30, 30, 30],
          shadowColor: 'rgba(0,160,221,1)',
          shadowBlur: 4
        }
      }
    }]
  }
}
var project = ['党员人数', '持证人数', '无证人数', '超龄人数']
export function chartOptionSatff () {
  return {
    series: [
      {
        name: '整体分类',
        type: 'pie',
        radius: [0, '50%'],
        label: {
          position: 'inner'
        },
        selectedMode: 'single',
        data: [
          { value: 35, name: '', itemStyle: { color: '#4BB5F9' } },
          { value: 235, name: '', itemStyle: { color: '#01D59E' } },
          { value: 310, name: '', itemStyle: { color: '#FFA10D' } },
          { value: 100, name: '', itemStyle: { color: '#C23D3D' } }
        ]
      },
      {
        name: '招标方式',
        type: 'pie',
        radius: ['60%', '80%'],
        label: {
          normal: {
            color: '#fff',
            formatter: function (params) {
              if (params.value !== 0) { return params.data.type + ':' + params.value + '个' } else { return '' }
            }
          }
        },
        data: [
          {
            value: 310,
            name: '党员人数',
            type: project[0],
            itemStyle: { color: '#FFA10D' }
          },
          {
            value: 234,
            name: '持证人数',
            type: project[1],
            itemStyle: { color: '#01D59E' }
          },
          {
            value: 35,
            name: '无证人数',
            type: project[2],
            itemStyle: { color: '#4BB5F9' }
          },
          {
            value: 100,
            name: '超龄人数',
            type: project[3],
            itemStyle: { color: '#C23D3D' }
          }

        ]
      }
    ]
  }
}
