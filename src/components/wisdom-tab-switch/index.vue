<template>
  <div class="wisdom-tab-switch"
       :style='{width:width,height:height}'>
    <div v-for="(item,index) in tabList"
         :key="index"
         :style="{...tabItemStyle[index]}"
          :class="['tab-item', index==selectId ? 'active' : '']"
          @click="ChangItem(index)">{{item.value}}</div>
  </div>
</template>
<script>
export default {
  name: 'wisdom-tab-switch',
  props: {
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    marginLeft: {
      type: String,
      default: '20px'
    },
    tabList: {
      type: Array,
      default: () => {
        return [
          {
            id: 0,
            value: 'tab1'
          },
          {
            id: 1,
            value: 'tab2'
          },
          {
            id: 2,
            value: 'tab3'
          }
        ]
      }
    },
    tabItemStyle: {
      type: Array,
      default: () => {
        return [
          {
            marginLeft: '0px'
          },
          {
            marginLeft: '16px'
          },
          {
            marginLeft: '16px'
          }
        ]
      }
    },
    // 默认选中高亮的id
    defaultId: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      selectId: 0
    }
  },
  watch: {
    defaultId: {
      immediate: true,
      handler: function (val) {
        this.selectId = val
      }
    }
  },
  methods: {
    ChangItem (index) {
      this.selectId = index
      this.$emit('onChangItem', index)
    }
  }
}
</script>
<style scoped lang='scss'>
.wisdom-tab-switch {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  color: #ffffff;
  font-size: 14px;
  // justify-content: space-around;
  .active {
    color: #05eae4;
    font-size: 16px;
  }
}
</style>
