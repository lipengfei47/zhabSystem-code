/** 接下来在这里面维护所有公用方法，比如 数字过度动画 */

/**
 * 防抖函数-目前仅是延迟执行版本
 * @param fn function  要做处理的防抖函数
 * @param delay number 延迟间隔-毫秒级
 */
export function debounce (fn, delay) {
  const delays = delay || 200
  let timer
  return function () {
    const th = this
    const args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(function () {
      timer = null
      fn.apply(th, args)
    }, delays)
  }
}

/**
 * 数字过渡动画-目前版本-默认一秒之内完成过渡动画
 * @param current number 当前值
 * @param target number 目标值
 * @param _this 传递 当前实例指向 this
 * @param property string _this 和 property 是因为要把需要改变的属性传递进去，因为函数传参基础数据类型是值拷贝而不是值引用
 * @param step number 当前版本支持 1 0.1 0.01 分别对应 整数变化、一位小数、两位小数
 */
export function numAnimation (current, target, _this, property, step = 1, totalTime = 1000, duration = 20) {
  let timer
  clearInterval(timer)
  let ternialStep = 0
  if (target >= current) {
    ternialStep = (target - current) / (totalTime / duration)
  } else {
    ternialStep = (current - target) / (totalTime / duration)
  }

  if (ternialStep > 10) {
    ternialStep = parseInt(ternialStep).toString().split('')
    ternialStep[ternialStep.length - 1] = 1
    ternialStep = parseInt(ternialStep.join(''))
  } else {
    ternialStep = Math.ceil(ternialStep) || 1
  }
  if (current < target) {
    timer = setInterval(() => {
      if (step === 0.1) {
        _this[property] = (_this[property] * 1000 + (step + ternialStep) * 1000) / 1000
      } else if (step === 0.01) {
        _this[property] = (_this[property] * 1000 + (step + ternialStep) * 1000) / 1000
      } else {
        _this[property] = _this[property] + ternialStep
      }
      if (_this[property] >= target) {
        _this[property] = target
        clearInterval(timer)
      }
    }, duration)
  } else if (current > target) {
    timer = setInterval(() => {
      if (step === 0.1) {
        _this[property] = (((_this[property] * 1000) - ((step + ternialStep) * 1000))) / 1000
      } else if (step === 0.01) {
        _this[property] = (_this[property] * 1000 - (step + ternialStep) * 1000) / 1000
      } else {
        _this[property] = _this[property] - ternialStep
      }
      if (_this[property] <= target) {
        _this[property] = target
        clearInterval(timer)
      }
    }, duration)
  }
}

// 每三个数字加一个逗号
export function handleNum (n) {
  if (isNaN(n)) {
    return n
  }
  var b = parseInt(n).toString()
  if (isNaN(b)) {
    return b
  }
  var len = b.length
  if (len < 4) {
    return b
  }
  var r = len % 3
  return r > 0 ? b.slice(0, r) + ',' + b.slice(r, len).match(/\d{3}/g).join(',') : b.slice(r, len).match(/\d{3}/g).join(',')
}

/**
 * 校验只要是数字（包含正负整数，0以及正负浮点数）就返回true
 * 不允许输入特殊字符
 **/
export function isNumber (val) {
  var regPos = /^[0-9]+.?[0-9]*/ // 判断是否是数字。
  if (regPos.test(val)) {
    var flag = new RegExp(
      "[`~!@#$^&*()=|{}':;',\\[\\]<>《》/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%]"
    )
    if (flag.test(val)) {
      return false
    } else {
      return true
    }
  } else {
    return false
  }
}

// 深拷贝
export function deepCopy (target) {
  if (typeof target === 'object') {
    const result = Array.isArray(target) ? [] : {}
    for (const key in target) {
      if (typeof target[key] === 'object') {
        result[key] = deepCopy(target[key])
      } else {
        result[key] = target[key]
      }
    }
    return result
  }
  return target
}
// 获取前后几天的时间
export function getNewData (AddDayCount) {
  var dd = new Date()

  dd.setDate(dd.getDate() + AddDayCount)// 获取AddDayCount天后的日期

  var y = dd.getFullYear()

  var m = dd.getMonth() + 1// 获取当前月份的日期

  var d = dd.getDate()

  return y + '-' + m + '-' + d
}
/**
 * @description: 获取页面宽度及高度
 * @param {type}
 * @return {Number} 页面可视窗口宽度及高度
 */
export function getPageWidth () {
  // 页面可视窗口宽度
  // let pageWidth = document.body.clientWidth
  let pageWidth = screen.width
  // 页面可视窗口最小宽度
  pageWidth = pageWidth < 1920 ? 1920 : pageWidth
  console.log('111', pageWidth)
  return pageWidth
}
export function getPageHeight () {
  // 页面可视窗口高度
  let pageHeight = document.documentElement.clientHeight
  // 页面可视窗口最小高度
  pageHeight = pageHeight < 1080 ? 1080 : pageHeight
  return pageHeight
}
