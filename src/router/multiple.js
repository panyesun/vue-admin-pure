import Layout from '@/layout'

export default {
  path: '/mutiple',
  component: Layout,
  redirect: 'noRedirect',
  meta: { title: 'Mutiple', icon: 'example' },
  children: [
    {
      path: 'file',
      name: 'File',
      component: () => import('@/views/mutiple/file/index'),
      meta: { title: 'File', icon: 'example' }
    },
    {
      path: 'table',
      name: 'MutiTable',
      component: () => import('@/views/mutiple/table/index'),
      meta: { title: 'Table', icon: 'example' }
    },
    {
      path: 'search',
      name: 'Search',
      component: () => import('@/views/mutiple/search/index'),
      meta: { title: 'Search', icon: 'example' }
    }
  ]
}
