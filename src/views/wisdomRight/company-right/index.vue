<template>
  <div class="company-right">
    <wisdom-border v-bind={...style}>
      <div slot='wisdom-border-title'>企业规模</div>
      <div slot='wisdom-border-content' class="industry-manage-content">
        <!-- <screen-custom-table :headerBackgroundColor="'rgba(11, 68, 135, 0.5)'"
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
      </screen-custom-table> -->
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
      }
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
  color: rgb(72, 238, 216);
  color: rgb(43, 202, 197);
}
</style>
