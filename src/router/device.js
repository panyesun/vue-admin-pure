import Layout from '@/layout'
export default {
  path: '/device',
  component: Layout,
  children: [
    {
      path: 'list',
      name: 'deviceList',
      component: () => import('@/views/device/list/index'),
      meta: { title: 'Device', icon: 'dashboard' }
    }
  ]
}
