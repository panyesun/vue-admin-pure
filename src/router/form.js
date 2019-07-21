import Layout from '@/layout'

export default {
  path: '/form',
  component: Layout,
  children: [
    {
      path: 'index',
      name: 'Form',
      component: () => import('@/views/form/index'),
      meta: { title: 'Form', icon: 'form' }
    }
  ]
}
