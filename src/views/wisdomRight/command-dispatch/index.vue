<template>
  <div class="command-dispatch">
    <wisdom-border v-bind={...style}>
      <div slot='wisdom-border-title'>指挥调度</div>
      <div slot='wisdom-border-content'
           class="command-dispatch-content">
        <wisdom-custom-table :headerBackgroundColor="'rgba(11, 68, 135, 0.5)'"
                             :headerColor="'#8ec6d8'"
                             :headerHeight="'46px'"
                             :headerFontSize="'18px'"
                             :bodyTdColor="'#3eeef0'"
                             :bodyTdFontSize="'18px'"
                             :dataList="dataList"
                             :isChangeColor=true
                             :rowColor="'rgba(11,68,135,0.16)'"
                             :noData="noData"
                             :pageSize="pageSize"
                             :headerList="headerList">
        </wisdom-custom-table>
      </div>
    </wisdom-border>
  </div>
</template>
<script>
const rank1Url = require('assets/first.png')
const rank2Url = require('assets/two.png')
const rank3Url = require('assets/three.png')
const styleIcon = 'width:18px;height:24px;line-height: 19px; text-align:center;color:#000000;'

export default {
  name: 'command-dispatch',
  data () {
    return {
      style: {
        width: '454px',
        height: '338px',
        url: require('../../../assets/industry-manage-border.png')
      },
      headerList: ['序号', '企业名', '次数', '占比'],
      dataList: [
        [`<span style="${styleIcon}background: url(${rank1Url}) no-repeat"><span>`, '国庆安保', 3077, '90%'],
        [`<span style="${styleIcon}background: url(${rank2Url}) no-repeat"><span>`, '嘉禾安保', 1290, '10%'],
        [`<span style="${styleIcon}background: url(${rank3Url}) no-repeat"><span>`, '未来安保', 3077, '29%'],
        [4, '北京安保', 3077, '30%'],
        [5, '仁泰安保', 2094, '25%'],
        [6, '北京安保', 3077, '78%']
      ],
      noData: false,
      pageSize: 5
    }
  },
  components: {
  },
  mounted () {

  },
  methods: {
  }
}
</script>
<style scoped lang='scss'>
.command-dispatch-content {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 20px;
  color: rgb(72, 238, 216);
}
</style>
