<template>
  <div class="wisdom-content">
    <div>
      <wisdom-header></wisdom-header>
    </div>
    <time-dialog></time-dialog>
    <wisdom-map-small></wisdom-map-small>
    <div class="wisdom-content-echarts">
      <wisdom-left></wisdom-left>
      <wisdom-center></wisdom-center>
      <wisdom-right></wisdom-right>
    </div>
    <wisdom-map></wisdom-map>

  </div>
</template>
<script>
import wisdomLeft from './wisdomLeft'
import wisdomRight from './wisdomRight'
import wisdomCenter from './wisdomCenter'
import wisdomMap from './wisdomMap'
import wisdomMapSmall from './wisdomMapSmall'
import wisdomHeader from './wisdomHeader'
import timeDialog from './wisdomMap/components/timedialog'

export default {
  data () {
    return {
      name: 'wisdomContent'
    }
  },
  components: {
    wisdomLeft,
    wisdomRight,
    wisdomCenter,
    wisdomMap,
    wisdomHeader,
    wisdomMapSmall,
    timeDialog
  }
}
</script>
<style lang="scss" scoped>
.wisdom-content{
  box-sizing: border-box;
  width:100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  &-echarts{
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: calc(100% - 66px);
  }
}
</style>
