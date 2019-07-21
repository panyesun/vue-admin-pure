export default {
  // 指令钩子
  bind(el, binding, vnode, oldVnode) {
    console.log('bind钩子')
  },
  inserted(el, binding, vnode, oldVnode) {
    console.log('inserted钩子')
    el.focus()
  },
  update(el, binding, vnode, oldVnode) {
    console.log('update钩子')
  },
  componentUpdated(el, binding, vnode, oldVnode) {
    console.log('componentUpdated钩子')
  },
  unbind(el, binding, vnode, oldVnode) {
    console.log('unbind钩子')
  }
}
