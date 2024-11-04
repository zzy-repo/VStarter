import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  // 示例代码
  { path: '/day-1', component: () => import('@/components/day-1.vue') },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
