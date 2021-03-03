import Vue from 'vue'

/**
 * 在src/components下的组件会自动注册为全局组件
 *
 * require.context()方法
 *   作用：创建当前模块的上下文
 *   用法：require.context(directory, flag, regExp)
 *     directory: 要导入的当前模块的文件夹目录
 *     flag: 是否搜索当前路径的子目录
 *     regExp: 要匹配的文件
 */
const components = require.context('components/', true, /\.vue$/)
components.keys().forEach(filename => {
  const arr = filename.replace(/\.\//, '').replace(/\.vue$/, '').split('/')
  const componentName = arr[arr.length - 2]
  const componentConfig = components(filename).default
  Vue.component(componentName, componentConfig)
})

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg-icon/svg', false, /\.svg$/)
requireAll(req)
