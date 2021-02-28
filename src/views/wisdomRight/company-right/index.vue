<template>
  <div class="company-right">
    <wisdom-border v-bind={...style}>
      <div slot='wisdom-border-title'>企业规模</div>
      <div slot='wisdom-border-content'
           class="industry-manage-content">
        <wisdom-custom-table :headerBackgroundColor="'rgba(23, 170, 246, 0.1)'"
                             :headerColor="'#C5D0D4'"
                             :headerHeight="'46px'"
                             :headerFontSize="'18px'"
                             :bodyTdColor="'#fff'"
                             :bodyTdFontSize="'18px'"
                             :dataList="dataList"
                             :isChangeColor="true"
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
export default {
  name: 'company-right',
  data () {
    return {
      style: {
        width: '454px',
        height: '412px',
        url: require('../../../assets/industry-analysis-border.png')
      },
      headerList: ['序号', '企业名', '安保人数', '等级'],
      dataList: [
        [1, '国庆安保', 3077, 'I'],
        [2, '嘉禾安保', 1290, 'II'],
        [3, '未来安保', 3077, 'III'],
        [4, '北京安保', 3077, 'IV'],
        [5, '仁泰安保', 2094, 'I'],
        [6, '北京安保', 3077, 'IV']
      ],
      noData: false,
      pageSize: 5
    }
  },
  components: {
  }
}
</script>
<style scoped lang='scss'>
.industry-manage-content {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 20px;
  color: rgb(23, 170, 246);
}
</style>
