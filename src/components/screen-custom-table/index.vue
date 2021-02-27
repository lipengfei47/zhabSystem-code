<template>
  <div class="screen-custom-table"
       @mouseenter="tableMouseEnter"
       @mouseleave="tableMouseLeave"
       :style="{'--pageSize': pageSize}">
    <ul>
      <li class="table-header"
          :style="{backgroundColor:headerBackgroundColor,height:headerHeight}">
        <div class="table-td"
             @click="sortTable(item, index)"
             v-for="(item, index) in headerList"
             :style="{width: Object.prototype.toString.call(item) == '[object Object]' ? item.width : '100%',
             color: columnIndex === index ? columnHoverColor : Object.prototype.toString.call(item) == '[object Object]' ? item.color ? item.color : headerColor : headerColor,
             fontSize: headerFontSize,
             cursor:  Object.prototype.toString.call(item) == '[object Object]' ? item.sort ? 'pointer' : 'default' : 'default'}"
             :key="index">{{Object.prototype.toString.call(item) == '[object Object]' ? item.title : item}}
          <svg-icon icon-class="paixu"
                    v-if="item.sort"
                    :fill="columnIndex === index ? columnHoverColor : 'rgb(42, 112, 225)'">
          </svg-icon>
        </div>
      </li>
      <div class="loading-box"
           v-if="dataList.length === 0 && !noData">
        <screen-loading>加载中, 请稍后...</screen-loading>
      </div>
      <li class="table-body"
          v-else-if="dataList.length > 0">
        <div class="scroll-view"
             id="scroll-view"
             :style="{top: top, transition: transition}">
          <div class="table-tr"
               :style="{backgroundColor: (isChangeColor && index % 2 !== 0)?rowColor:'',
                 '--isChangeColor': isChangeColor}"
               v-for="(item, index) in dataList"
               :key="index">
            <div class="table-td"
                 :style="{
                    width: Object.prototype.toString.call(headerList[order]) == '[object Object]' ? headerList[order].width : '100%',
                    color:bodyTdColor,fontSize:bodyTdFontSize
                  }"
                 v-for="(td, order) in item"
                 :key="order"
                 v-html="td"></div>
          </div>
        </div>
      </li>
      <div v-else
           class="no-data">暂无数据~</div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'screen-custom-table',
  data () {
    return {
      top: 0,
      scrollTime: 0,
      transition: 'top 1s linear',
      timer: '',
      sort: 'asc',
      columnIndex: '',
      columnHoverColor: '#29cdff'
    }
  },
  props: {
    headerList: {
      type: Array,
      required: true,
      default: () => []
    },
    dataList: {
      type: Array,
      required: true,
      default: () => []
    },
    pageSize: {
      type: Number,
      default: 5
    },
    noData: {
      type: Boolean,
      default: false
    },
    // 表头背景色
    headerBackgroundColor: {
      type: String,
      default: '15px'
    },
    // 表头高度
    headerHeight: {
      type: String,
      default: '35px'
    },
    // 表头字体颜色
    headerColor: {
      type: String,
      default: '#2a70e1'
    },
    // 表头字体大小
    headerFontSize: {
      type: String,
      default: '#2a70e1'
    },
    // 表单字体颜色
    bodyTdColor: {
      type: String,
      default: '#fff'
    },
    // 表单字体大小
    bodyTdFontSize: {
      type: String,
      default: '14px'
    },
    // 是否隔行换色
    isChangeColor: {
      type: Boolean,
      default: false
    },
    // 隔行换色更换的颜色
    rowColor: {
      type: String,
      default: ''
    },
    // 是否调用动画
    animationShow: {
      type: Boolean,
      default: true // true 调用  false 不调用
    }
  },
  watch: {
    dataList: {
      immediate: true,
      handler: function (newvalue) {
        if (newvalue.length > 0) {
          if (!this.animationShow) return
          this.scrollView()
        } else {
          clearInterval(this.timer)
        }
      }
    }
  },
  methods: {
    scrollView () {
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        if (this.dataList.length % this.pageSize === 0) {
          if (this.scrollTime < this.dataList.length / this.pageSize - 1) {
            this.transition = 'top 1s linear'
            this.scrollTime += 1
            this.top = `-${100 * this.scrollTime}%`
          } else {
            this.transition = 'top 1s ease-in-out'
            this.top = '0px'
            this.scrollTime = 0
          }
        } else {
          if (
            this.scrollTime < Math.floor(this.dataList.length / this.pageSize)
          ) {
            this.transition = 'top 1s linear'
            this.scrollTime += 1
            this.top = `-${100 * this.scrollTime}%`
          } else {
            this.transition = 'top 1s ease-in-out'
            this.top = '0px'
            this.scrollTime = 0
          }
        }
      }, 5000)
    },
    tableMouseEnter () {
      clearInterval(this.timer)
    },
    tableMouseLeave () {
      this.scrollView()
    },
    sortTable (item, index) {
      clearInterval(this.timer)
      this.top = '0px'
      this.scrollTime = 0
      this.sort = this.sort === 'asc' ? 'desc' : 'asc'
      if (Object.prototype.hasOwnProperty.call(item, 'sort') && item.sort) {
        if (this.sort === 'asc') {
          this.dataList.sort((a, b) => {
            return this.splitInnerHtml(b[index]) - this.splitInnerHtml(a[index])
          })
        } else if (this.sort === 'desc') {
          this.dataList.sort((a, b) => this.splitInnerHtml(a[index]) - this.splitInnerHtml(b[index]))
        }
        this.$emit('sortTable', this.dataList)
        this.columnIndex = index
      }
    },
    splitInnerHtml (str) {
      if (str.toString().indexOf('>') > -1 && str.toString().lastIndexOf('<') > -1 && str.toString().indexOf('>') <= str.toString().lastIndexOf('<')) {
        return str.toString().substring(str.toString().indexOf('>') + 1, str.toString().lastIndexOf('<'))
      } else {
        return str
      }
    }
  }
}
</script>

<style lang="scss" scoped>
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}
.screen-custom-table {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  ul {
    width: 100%;
    height: 100%;
    .table-header {
      height: 35px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      color: #2a70e1;
      font-size: 15px;
      .table-td {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .table-body {
      width: 100%;
      height: calc(100% - 35px);
      overflow: hidden;
      position: relative;
      .scroll-view {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0px;
        top: 0px;
        .table-tr {
          width: 100%;
          box-sizing: border-box;
          height: calc(100% / var(--pageSize));
          display: flex;
          align-items: center;
          justify-content: space-around;
          .table-td {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-size: 14px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          & + .table-tr {
            border-top: 1px solid #47556f9b;
          }
          &:hover {
            background: rgba(255, 255, 255, 0.1);
          }
        }
      }
    }
    .loading-box {
      width: 100%;
      height: calc(100% - 35px);
    }
    .no-data {
      width: 100%;
      height: calc(100% - 35px);
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgba(255, 255, 255, 0.8);
      font-size: 18px;
    }
  }
}
</style>
