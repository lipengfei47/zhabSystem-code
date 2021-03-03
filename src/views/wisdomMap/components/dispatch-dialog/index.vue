<template>
  <div class="dispatch-dialog"
       :style="{left:left,top:top}">
    <div class="title">调度</div>
    <div class="item">
      <span></span>
      <span>调度对象：京城安保-李某某</span>
    </div>
    <div class="item">
      <span></span>
      <span>常用指令：</span>
      <img src="../../../../assets/3.png"
           class="order" />
    </div>
    <div class="item">
      <span></span>
      <span>自定指令：</span>
      <textarea placeholder="多行输入"></textarea>
    </div>
    <div class="item">
      <span></span>
      <span>处理时限：</span>
      <screen-dropdown-menu class="select-box"
                            :menuList="streetList"
                            :defaultSelected="selectStreet.value"
                            @onChooseItem="onChooseStreet"
                            @onVisibleChange="onVisibleChange">
      </screen-dropdown-menu>
    </div>
    <div class="button">调度</div>
  </div>
</template>
<script>
export default {
  name: 'dispatch-dialog',
  data () {
    return {
      selectStreet: {
        label: '5分钟',
        value: '1',
        center: []
      },
      streetList: [
        {
          label: '5分钟',
          select: true,
          value: '1'
        },
        {
          label: '10分钟',
          select: false,
          value: '2'
        },
        {
          label: '30分钟',
          select: false,
          value: '3'
        },
        {
          label: '1个小时',
          select: false,
          value: '4'
        }
      ]
    }
  },
  props: {
    left: {
      type: String,
      default: '0'
    },
    top: {
      type: String,
      default: '-40%'
    }
  },
  methods: {
    onChooseStreet (item) {
      this.selectStreet = {
        label: item.label,
        value: item.value
      }
    },
    onVisibleChange () { }
  }
}
</script>
<style lang="scss" scoped>
.dispatch-dialog {
  z-index: 9999;
  position: absolute;
  // left: 0%;
  // top: -40%;
  box-sizing: border-box;
  width: 297px;
  height: 417px;
  border: 1px solid #066b87;
  z-index: 30;
  color: #fff;
  padding: 21px 30px;
  background: url('../../../../assets/dispatchdialog.png') no-repeat;
  background-size: 100% 100%;
  .title {
    font-size: 20px;
  }
  .item {
    font-size: 16px;
    padding: 5px 0;
    span:nth-child(1) {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #07dbd9;
      margin-right: 5px;
    }
    span:nth-child(2) {
      margin-bottom: 3px;
    }
  }
  .order {
    width: 100%;
    height: 52px;
  }
  textarea {
    outline: none;
    resize: none;
    width: 225px;
    height: 71px;
    background: #213e82;
    border-radius: 2px;
    border: none;
    padding: 5px;
  }
  .select-box {
    position: relative;
    border: 1px solid #213e82;
  }
  .button {
    box-sizing: border-box;
    width: 90px;
    height: 33px;
    line-height: 33px;
    text-align: center;
    background: #00ceff;
    border-radius: 2px;
    color: #fff;
    font-size: 16px;
    margin: auto;
  }
}
</style>
