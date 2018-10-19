import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
new Vue({
  el: '#app',
  data() {
    return {
      loading1: false
    }
  }
})

//单元测试   输入和输出是否是期待的

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  let vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  vm.$mount(div)
  let useElement = vm.$el.querySelector('use')

  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-settings')
  vm.$el.remove()
  vm.$destroy()
}

//测试spin图标
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  let vm = new Constructor({
    propsData: {
      icon: 'settings',
      loading: true
    }
  })
  vm.$mount(div)
  let useElement = vm.$el.querySelector('use')

  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-spin')
  vm.$el.remove()
  vm.$destroy()
}

//测试文字和图标的order
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  let vm = new Constructor({
    propsData: {
      icon: 'settings',
      iconPosition: 'right'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let order = window.getComputedStyle(svg, null).order
  expect(order).to.eq('2')
  vm.$el.remove()
  vm.$destroy()
}

//测试button的click事件   使用chai-spy
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  let button = new Constructor({
    propsData: {
      icon: 'settings',
    }
  })
  button.$mount(div)
  //期望这个函数被调用

  const spy = chai.spy(function() {console.log(1)})
  button.$on('click', spy)
  button.$el.click()
  expect(spy).to.have.been.called()
  button.$el.remove()
  button.$destroy()
}