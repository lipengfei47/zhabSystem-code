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
      pageSize: 5,
      tabItemStyle: [
        {
          marginLeft: '0px'
        },
        {
          marginLeft: '16px'
        },
        {
          marginLeft: '16px'
        }
      ],
      tabList: [
        {
          id: 0,
          value: '企业规模'
        },
        {
          id: 1,
          value: '党建'
        },
        {
          id: 2,
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
        this.headerList = ['序号', '企业名', '安保人数', '等级']
        this.dataList = [
          [1, '国庆安保', 3077, 'I'],
          [2, '嘉禾安保', 1290, 'II'],
          [3, '未来安保', 3077, 'III'],
          [4, '北京安保', 3077, 'IV'],
          [5, '仁泰安保', 2094, 'I'],
          [6, '北京安保', 3077, 'IV']
        ]
      } else if (selectId === 1) {
        this.headerList = ['序号', '企业名', '党支部', '党员数', '党建活动']
        this.dataList = [
          [1, '1', 3077, 'I'],
          [2, '嘉禾安保', 1290, 'II'],
          [3, '未来安保', 3077, 'III'],
          [4, '北京安保', 3077, 'IV'],
          [5, '仁泰安保', 2094, 'I'],
          [6, '北京安保', 3077, 'IV']
        ]
      } else if (selectId === 2) {
        this.headerList = ['序号', '企业名', '党支部', '党员数', '党建活动']
        this.dataList = [
          [1, '1', 3077, 'I'],
          [2, '2', 1290, 'II'],
          [3, '未来安保', 3077, 'III'],
          [4, '北京安保', 3077, 'IV'],
          [5, '仁泰安保', 2094, 'I'],
          [6, '北京安保', 3077, 'IV']
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
