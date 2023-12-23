import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Home from "@/components/Home.vue";
import SkillsView from '../views/SkillsView.vue';
import WorkView from "../views/WorkView.vue";
import NotFound from '../views/NotFound.vue';
import i18n, { availablelanguages, defaultLocale } from '@/composables/useLanguages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:lang',
      component: HomeView,
      children: [
        {
          path: '',
          name: 'home',
          component: Home,
        },
        {
          path: 'skills',
          name: 'skills',
          component: SkillsView,
        },
        {
          path: 'work',
          name: 'work',
          component: WorkView,
        },
        {
          path: ':catchAll(.*)*',
          name: 'NotFound',
          component: NotFound
        }
      ]
    },
    {
      path: '',
      redirect: `/${i18n.global.locale.value}`
    }
  ]
});


function nextFactory(context: any, middleware: any, index: any) {
  const subsequentMiddleware = middleware[index];
  if (!subsequentMiddleware) return context.next;
  return (...parameters: any) => {
      context.next(...parameters);
      const nextMiddleware = nextFactory(context, middleware, index + 1);
      subsequentMiddleware({...context, next: nextMiddleware});
  };
}

router.beforeEach((to, from, next) => {
  //console.log(to);
  const locale = to.params.lang;
  
  if (!availablelanguages.includes(locale)) {
    return next(`/${defaultLocale}`);
  }

  if (i18n.global.locale.value !== locale) {
    i18n.global.locale.value = locale;
  }

  next();

  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware) ? to.meta.middleware : [to.meta.middleware];
    const context = {
      from,
      next,
      router,
      to,
    };
    const nextMiddleware = nextFactory(context, middleware, 1);
    return middleware[0]({...context, next: nextMiddleware});
  }
})

export default router