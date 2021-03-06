// 定义全局方法
const map = {
  'Dashboard': '仪表板',
  'Example': '示例',
  'Table': '表格',
  'Tree': '树结构',
  'Form': '表单',
  'Nested': '嵌套',
  'Menu1': '菜单1',
  'menu2': '菜单2',
  'Menu1-1': '菜单1-1',
  'Menu1-2': '菜单1-2',
  'Menu1-3': '菜单1-3',
  'Menu1-2-1': '菜单1-2-1',
  'Menu1-2-2': '菜单1-2-2',
  'Mutiple': '综合',
  'Test': '测试页',
  'File': '文件',
  'Search': '搜索框',
  'External Link': '外链'
}

const t = (msg) => {
  return map[msg] || msg
}

const install = (Vue, options) => {
  Vue.prototype.t = t
}

export default {
  install
}
