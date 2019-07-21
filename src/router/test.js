import Layout from '@/layout'

export default {
  path: '/test',
  component: Layout,
  children: [
    {
      path: 'index',
      name: 'Test',
      component: () => import('@/views/test/index'),
      meta: { title: 'Test', icon: 'form' }
    }
  ]
}