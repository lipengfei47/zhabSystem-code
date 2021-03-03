<template>
  <div class="company-right">
    <wisdom-border v-bind={...style}>
      <div slot='wisdom-border-title'>
        <wisdom-tab-switch :width='"100%"'
                           :height='"60px"'
                           :tabItemStyle='tabItemStyle'
                           :tabList='tabList'
                           :defaultId='selectId'
                           @onChangItem='onChangItem'></wisdom-tab-switch>
      </div>
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
      headerList: ['序号', '姓名', '年龄', '党员', '状态'],
      dataList: [
        [1, '张某某', 30, '是', '在岗'],
        [2, '韩某某', 29, '是', '在岗'],
        [3, '隋某某', 30, '是', '在岗'],
        [4, '赵某某', 30, '否', '在岗'],
        [5, '李某某', 20, '否', '休息'],
        [6, '余某某', 25, '否', '休息'],
        [7, '李某某', 44, '否', '休息'],
        [8, '李某某', 20, '否', '休息'],
        [9, '李某某', 35, '否', '休息'],
        [10, '李某某', 38, '否', '休息']
      ],
      noData: false,
      pageSize: 5,
      tabItemStyle: [
        {
          marginLeft: '0px'
        },
        {
          marginLeft: '23px'
        }
      ],
      tabList: [
        {
          id: 0,
          value: '保安人员'
        },
        {
          id: 1,
          value: '装备'
        }
      ],
      selectId: 0
    }
  },
  components: {
  },
  methods: {
    onChangItem (selectId) {
      this.selectId = selectId
      if (selectId === 0) {
        this.headerList = ['序号', '姓名', '年龄', '党员', '状态']
        this.dataList = [
          [1, '张某某', 30, '是', '在岗'],
          [2, '韩某某', 29, '是', '在岗'],
          [3, '隋某某', 30, '是', '在岗'],
          [4, '赵某某', 30, '否', '在岗'],
          [5, '李某某', 20, '否', '休息'],
          [6, '余某某', 25, '否', '休息'],
          [7, '李某某', 44, '否', '休息'],
          [8, '李某某', 20, '否', '休息'],
          [9, '李某某', 35, '否', '休息'],
          [10, '李某某', 38, '否', '休息']
        ]
      } else if (selectId === 1) {
        this.headerList = ['序号', '装备', '状态', '领用人', '时长']
        this.dataList = [
          [1, '防护工具A', '使用', '张某某', '2.5h'],
          [2, '防护工具B', '使用', '李某某', '2h'],
          [3, '防护工具C', '使用', '王某某', '1h'],
          [4, '防护工具D', '空闲', '——', '——'],
          [5, '防护工具E', '空闲', '——', '——'],
          [6, '保安车辆A', '使用', '赵某某', '2.5h'],
          [7, '保安车辆C', '使用', '韩某某', '2h'],
          [8, '保安车辆D', '使用', '孙某某', '1h'],
          [9, '保安车辆E', '空闲', '——', '——'],
          [10, '保安车辆H', '空闲', '——', '——']
        ]
      }
    }
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
