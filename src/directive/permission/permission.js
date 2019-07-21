export default {
  // 指令钩子
  bind: function (el, binding, vnode, oldVnode) {
    console.log('bind钩子')
  },
  inserted: function (el, binding, vnode, oldVnode) {
    console.log('inserted钩子')
    el.focus()
  },
  update: function (el, binding, vnode, oldVnode) {
    console.log('update钩子')
  },
  componentUpdated: function (el, binding, vnode, oldVnode) {
    console.log('componentUpdated钩子')
  },
  unbind: function (el, binding, vnode, oldVnode) {
    console.log('unbind钩子')
  }
}
