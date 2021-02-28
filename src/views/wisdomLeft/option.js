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

export function chartOptionAnalysis () {
  return {
    grid: [{
      // 左侧的柱状图grid
      left: '21%',
      top: '0',
      right: '10%',
      bottom: '0'
    }],
    xAxis: [{
      // 左侧柱状图的X轴
      gridIndex: 0, // x 轴所在的 grid 的索引
      show: false
    }],
    yAxis: [{
      // 左侧柱状图的Y轴
      gridIndex: 0, // y轴所在的 grid 的索引
      splitLine: 'none',
      axisTick: 'none',
      axisLine: 'none',
      axisLabel: {
        align: 'left',
        padding: [0, 0, 15, 15],
        textStyle: {
          color: '#FFFFFF',
          fontSize: '16'
        },
        margin: 100
      },
      data: ['保安企业数', '保安人数', '党员人数', '持证人数', '行业规模'],
      inverse: true
    },
    {
      // 左侧柱状图的Y轴
      gridIndex: 0, // y轴所在的 grid 的索引
      splitLine: 'none',
      axisTick: 'none',
      axisLine: 'none',
      data: [210, 19465, 1040, 4580, 27481],
      inverse: true,
      axisLabel: {
        show: true,
        // verticalAlign: 'bottom',
        align: 'right',
        margin: 150,
        padding: [0, 120, 0, 0],
        textStyle: {
          color: '#fff',
          fontSize: '16'
        },
        formatter: function (value, index) {
          const obj = {
            0: '家',
            4: '万'
          }
          return `${value}${obj[index] || '人'}`
        },
        rich: {
          y: {
            color: '#befbff',
            fontSize: 16
          },
          x: {
            color: '#f6cf42',
            fontSize: 16
          }
        }
      }
    },
    {
      // 左侧柱状图的Y轴
      gridIndex: 0, // y轴所在的 grid 的索引
      splitLine: 'none',
      axisTick: 'none',
      axisLine: 'none',
      data: []
    }
    ],
    series: [{
      name: '保安企业数',
      type: 'bar',
      xAxisIndex: 0, // 使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
      yAxisIndex: 0, // 使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
      data: [555, 0, 0, 0, 0],
      barWidth: 15,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            'rgba(68, 180, 255, 0.2)', 'rgba(68, 180, 255, 1)'
          ].map((color, offset) => ({
            color,
            offset
          })))
        }
      },
      z: 2
    }, {
      name: '保安人数',
      type: 'bar',
      xAxisIndex: 0, // 使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
      yAxisIndex: 0, // 使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
      data: [0, 666, 0, 0, 0],
      barWidth: 15,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            'rgba(22, 231, 56, 0.2)', 'rgba(22, 231, 56, 1)'
          ].map((color, offset) => ({
            color,
            offset
          })))
        }
      },
      z: 2
    }, {
      name: '党员人数',
      type: 'bar',
      xAxisIndex: 0, // 使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
      yAxisIndex: 0, // 使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
      data: [0, 0, 888, 0, 0],
      barWidth: 15,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            'rgba(255, 57, 57, 0.2)', 'rgba(255, 57, 57, 1)'
          ].map((color, offset) => ({
            color,
            offset
          })))
        }
      },
      z: 2
    },
    {
      name: '持证人数',
      type: 'bar',
      xAxisIndex: 0, // 使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
      yAxisIndex: 0, // 使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
      data: [0, 0, 0, 555, 0],
      barWidth: 15,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            'rgba(253, 191, 25, 0.2)', 'rgba(253, 191, 25, 1)'
          ].map((color, offset) => ({
            color,
            offset
          })))
        }
      },
      z: 2
    },
    {
      name: '行业规模',
      type: 'bar',
      xAxisIndex: 0, // 使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
      yAxisIndex: 0, // 使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
      data: [0, 0, 0, 0, 1554],
      barWidth: 15,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            'rgba(68, 180, 255, 0.2)', 'rgba(68, 180, 255, 1)'
          ].map((color, offset) => ({
            color,
            offset
          })))
        }
      },
      z: 2
    },
    {
      name: '外框',
      type: 'bar',
      xAxisIndex: 0, // 使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
      yAxisIndex: 0, // 使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
      barGap: '-100%',
      data: [1554, 1554, 1554, 1554],
      barWidth: 15,
      itemStyle: {
        normal: {
          color: 'rgba(255, 255, 255, 0.15)',
          barBorderRadius: 6
        }
      },
      z: 0
    }, {
      name: '保安企业数',
      type: 'pictorialBar',
      symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAZlBMVEUAAABe3uVe3+Vf3uVf3+Zf3uVg3+Zg3+Zf3+Vi4OZh4OZg3+Z86/Bh3+Zi4Odj4Odi4OZ86/B76/B86/Bj4ed56+9x5+xn4umB7/N87PB36e+A7/N+7fF/7vJ/7vJ+7fGA7/OB7/PReX+lAAAAIXRSTlMABQkVDREmIhk3MR10LEFFPHh7cUprXE35h2XnqMLAp+mHAG9cAAAB5ElEQVRIx83WjU7CMBQFYIoiKMqU/XUboHv/l/Tce7t2XamDNSacETEmX86tlK2rx4py150o+MstMBLwWRfHKo6JCVxLnvmFGBjFQ58oF1//sUZhGy/ClSTWObgnL4O+bkeN4nY2okfNMbkRt9/vtxz8InoTsWplJSCzFxPmO8+GpSIByX3YQAuGDWtRKhKjCnxDXhF6Z4yxnZ20Wgko7BMRDmxtSGVaI4kdTIgb+zTYoJQlIMlDlmUFgrcDWWC201qSayqlTkiCddWWeV62VU0YlnpRi9VOKaSUsiyq/N0krwq2Ugt7lVpZl5BfHNiytjagMi+XYp0kCR45hMlivVQrE/uU5pXSrCB5bM6d1t2lOZItMqmliT3q5uVxqxzyW/ccfYLNKx7ZTeykMvNyac2yt2Fbc61MHLSC0rwoxbiNdlQ3GBm1NLHQsHUrtEXppR/ljNpW6DbSCoqlFiVoN6YdaFlgsSFVPs1BdT8OaB5QyQzVcaqWDows/zepxR8ObLglTrdtCRVuRNj4Rrxh+//0ke2f8KVL+Kon3GCSbmsJN9OUW3j6g0Ns+LgCij2u0h+Sghc8mlMPBMgdx5DFh59VmOVHrvmDnoNxCz3J7MFWsMuaLyR089xz/xhlfijvwutR8gv3zk6BLUUeCgAAAABJRU5ErkJggg==',
      symbolSize: [70, 70],
      symbolOffset: [30, 0],
      z: 12,
      data: [{
        value: 555,
        symbolPosition: 'end'
      }, {
        value: 0,
        symbolPosition: 'end'
      }, {
        value: 0,
        symbolPosition: 'end'
      }, {
        value: 0,
        symbolPosition: 'end'
      }]
    }, {
      name: '保安人数',
      type: 'pictorialBar',
      symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAZlBMVEUAAABe3uVe3+Vf3uVf3+Zf3uVg3+Zg3+Zf3+Vi4OZh4OZg3+Z86/Bh3+Zi4Odj4Odi4OZ86/B76/B86/Bj4ed56+9x5+xn4umB7/N87PB36e+A7/N+7fF/7vJ/7vJ+7fGA7/OB7/PReX+lAAAAIXRSTlMABQkVDREmIhk3MR10LEFFPHh7cUprXE35h2XnqMLAp+mHAG9cAAAB5ElEQVRIx83WjU7CMBQFYIoiKMqU/XUboHv/l/Tce7t2XamDNSacETEmX86tlK2rx4py150o+MstMBLwWRfHKo6JCVxLnvmFGBjFQ58oF1//sUZhGy/ClSTWObgnL4O+bkeN4nY2okfNMbkRt9/vtxz8InoTsWplJSCzFxPmO8+GpSIByX3YQAuGDWtRKhKjCnxDXhF6Z4yxnZ20Wgko7BMRDmxtSGVaI4kdTIgb+zTYoJQlIMlDlmUFgrcDWWC201qSayqlTkiCddWWeV62VU0YlnpRi9VOKaSUsiyq/N0krwq2Ugt7lVpZl5BfHNiytjagMi+XYp0kCR45hMlivVQrE/uU5pXSrCB5bM6d1t2lOZItMqmliT3q5uVxqxzyW/ccfYLNKx7ZTeykMvNyac2yt2Fbc61MHLSC0rwoxbiNdlQ3GBm1NLHQsHUrtEXppR/ljNpW6DbSCoqlFiVoN6YdaFlgsSFVPs1BdT8OaB5QyQzVcaqWDows/zepxR8ObLglTrdtCRVuRNj4Rrxh+//0ke2f8KVL+Kon3GCSbmsJN9OUW3j6g0Ns+LgCij2u0h+Sghc8mlMPBMgdx5DFh59VmOVHrvmDnoNxCz3J7MFWsMuaLyR089xz/xhlfijvwutR8gv3zk6BLUUeCgAAAABJRU5ErkJggg==',
      symbolSize: [70, 70],
      symbolOffset: [30, 0],
      z: 12,
      data: [{
        value: 0,
        symbolPosition: 'end'
      }, {
        value: 666,
        symbolPosition: 'end'
      }, {
        value: 0,
        symbolPosition: 'end'
      }, {
        value: 0,
        symbolPosition: 'end'
      }]
    }, {
      name: '党员人数',
      type: 'pictorialBar',
      symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAZlBMVEUAAABe3uVe3+Vf3uVf3+Zf3uVg3+Zg3+Zf3+Vi4OZh4OZg3+Z86/Bh3+Zi4Odj4Odi4OZ86/B76/B86/Bj4ed56+9x5+xn4umB7/N87PB36e+A7/N+7fF/7vJ/7vJ+7fGA7/OB7/PReX+lAAAAIXRSTlMABQkVDREmIhk3MR10LEFFPHh7cUprXE35h2XnqMLAp+mHAG9cAAAB5ElEQVRIx83WjU7CMBQFYIoiKMqU/XUboHv/l/Tce7t2XamDNSacETEmX86tlK2rx4py150o+MstMBLwWRfHKo6JCVxLnvmFGBjFQ58oF1//sUZhGy/ClSTWObgnL4O+bkeN4nY2okfNMbkRt9/vtxz8InoTsWplJSCzFxPmO8+GpSIByX3YQAuGDWtRKhKjCnxDXhF6Z4yxnZ20Wgko7BMRDmxtSGVaI4kdTIgb+zTYoJQlIMlDlmUFgrcDWWC201qSayqlTkiCddWWeV62VU0YlnpRi9VOKaSUsiyq/N0krwq2Ugt7lVpZl5BfHNiytjagMi+XYp0kCR45hMlivVQrE/uU5pXSrCB5bM6d1t2lOZItMqmliT3q5uVxqxzyW/ccfYLNKx7ZTeykMvNyac2yt2Fbc61MHLSC0rwoxbiNdlQ3GBm1NLHQsHUrtEXppR/ljNpW6DbSCoqlFiVoN6YdaFlgsSFVPs1BdT8OaB5QyQzVcaqWDows/zepxR8ObLglTrdtCRVuRNj4Rrxh+//0ke2f8KVL+Kon3GCSbmsJN9OUW3j6g0Ns+LgCij2u0h+Sghc8mlMPBMgdx5DFh59VmOVHrvmDnoNxCz3J7MFWsMuaLyR089xz/xhlfijvwutR8gv3zk6BLUUeCgAAAABJRU5ErkJggg==',
      symbolSize: [70, 70],
      symbolOffset: [30, 0],
      z: 12,
      data: [{
        value: 0,
        symbolPosition: 'end'
      }, {
        value: 0,
        symbolPosition: 'end'
      }, {
        value: 888,
        symbolPosition: 'end'
      }, {
        value: 0,
        symbolPosition: 'end'
      }]
    }, {
      name: '持证人数',
      type: 'pictorialBar',
      symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAZlBMVEUAAABe3uVe3+Vf3uVf3+Zf3uVg3+Zg3+Zf3+Vi4OZh4OZg3+Z86/Bh3+Zi4Odj4Odi4OZ86/B76/B86/Bj4ed56+9x5+xn4umB7/N87PB36e+A7/N+7fF/7vJ/7vJ+7fGA7/OB7/PReX+lAAAAIXRSTlMABQkVDREmIhk3MR10LEFFPHh7cUprXE35h2XnqMLAp+mHAG9cAAAB5ElEQVRIx83WjU7CMBQFYIoiKMqU/XUboHv/l/Tce7t2XamDNSacETEmX86tlK2rx4py150o+MstMBLwWRfHKo6JCVxLnvmFGBjFQ58oF1//sUZhGy/ClSTWObgnL4O+bkeN4nY2okfNMbkRt9/vtxz8InoTsWplJSCzFxPmO8+GpSIByX3YQAuGDWtRKhKjCnxDXhF6Z4yxnZ20Wgko7BMRDmxtSGVaI4kdTIgb+zTYoJQlIMlDlmUFgrcDWWC201qSayqlTkiCddWWeV62VU0YlnpRi9VOKaSUsiyq/N0krwq2Ugt7lVpZl5BfHNiytjagMi+XYp0kCR45hMlivVQrE/uU5pXSrCB5bM6d1t2lOZItMqmliT3q5uVxqxzyW/ccfYLNKx7ZTeykMvNyac2yt2Fbc61MHLSC0rwoxbiNdlQ3GBm1NLHQsHUrtEXppR/ljNpW6DbSCoqlFiVoN6YdaFlgsSFVPs1BdT8OaB5QyQzVcaqWDows/zepxR8ObLglTrdtCRVuRNj4Rrxh+//0ke2f8KVL+Kon3GCSbmsJN9OUW3j6g0Ns+LgCij2u0h+Sghc8mlMPBMgdx5DFh59VmOVHrvmDnoNxCz3J7MFWsMuaLyR089xz/xhlfijvwutR8gv3zk6BLUUeCgAAAABJRU5ErkJggg==',
      symbolSize: [70, 70],
      symbolOffset: [30, 0],
      z: 12,
      data: [{
        value: 0,
        symbolPosition: 'end'
      }, {
        value: 0,
        symbolPosition: 'end'
      }, {
        value: 0,
        symbolPosition: 'end'
      }, {
        value: 555,
        symbolPosition: 'end'
      }]
    },
    {
      name: '行业规模',
      type: 'pictorialBar',
      symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAZlBMVEUAAABe3uVe3+Vf3uVf3+Zf3uVg3+Zg3+Zf3+Vi4OZh4OZg3+Z86/Bh3+Zi4Odj4Odi4OZ86/B76/B86/Bj4ed56+9x5+xn4umB7/N87PB36e+A7/N+7fF/7vJ/7vJ+7fGA7/OB7/PReX+lAAAAIXRSTlMABQkVDREmIhk3MR10LEFFPHh7cUprXE35h2XnqMLAp+mHAG9cAAAB5ElEQVRIx83WjU7CMBQFYIoiKMqU/XUboHv/l/Tce7t2XamDNSacETEmX86tlK2rx4py150o+MstMBLwWRfHKo6JCVxLnvmFGBjFQ58oF1//sUZhGy/ClSTWObgnL4O+bkeN4nY2okfNMbkRt9/vtxz8InoTsWplJSCzFxPmO8+GpSIByX3YQAuGDWtRKhKjCnxDXhF6Z4yxnZ20Wgko7BMRDmxtSGVaI4kdTIgb+zTYoJQlIMlDlmUFgrcDWWC201qSayqlTkiCddWWeV62VU0YlnpRi9VOKaSUsiyq/N0krwq2Ugt7lVpZl5BfHNiytjagMi+XYp0kCR45hMlivVQrE/uU5pXSrCB5bM6d1t2lOZItMqmliT3q5uVxqxzyW/ccfYLNKx7ZTeykMvNyac2yt2Fbc61MHLSC0rwoxbiNdlQ3GBm1NLHQsHUrtEXppR/ljNpW6DbSCoqlFiVoN6YdaFlgsSFVPs1BdT8OaB5QyQzVcaqWDows/zepxR8ObLglTrdtCRVuRNj4Rrxh+//0ke2f8KVL+Kon3GCSbmsJN9OUW3j6g0Ns+LgCij2u0h+Sghc8mlMPBMgdx5DFh59VmOVHrvmDnoNxCz3J7MFWsMuaLyR089xz/xhlfijvwutR8gv3zk6BLUUeCgAAAABJRU5ErkJggg==',
      symbolSize: [70, 70],
      symbolOffset: [30, 0],
      z: 12,
      data: [{
        value: 0,
        symbolPosition: 'end'
      }, {
        value: 0,
        symbolPosition: 'end'
      }, {
        value: 0,
        symbolPosition: 'end'
      }, {
        value: 0,
        symbolPosition: 'end'
      }, {
        value: 1554,
        symbolPosition: 'end'
      }]
    }
    ]
  }
}
