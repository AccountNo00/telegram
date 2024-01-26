import { createWebHistory, createRouter } from "vue-router";

import store from '@/state/store'
import routes from './routes'
// import $cookies from "vue-cookies";

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Use the HTML5 history API (i.e. normal-looking routes)
  // instead of routes with hashes (e.g. example.com/#/about).
  // This may require some server configuration in production:
  // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
  mode: 'history',
  // Simulate native-like scroll behavior when navigating to a new
  // route and using back/forward buttons.
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})

// Before each route evaluates...
// router.beforeEach((routeTo, routeFrom, next) => {
//   if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
//     // Check if auth is required on this route
//     // (including nested routes).
//     const authRequired = routeTo.matched.some((route) => route.meta.authRequired)

//     // If auth isn't required for the route, just continue.
//     if (!authRequired) return next()

//     // If auth is required and the user is logged in...
//     if (store.getters['auth/loggedIn']) {
//       // Validate the local user token...
//       return store.dispatch('auth/validate').then((validUser) => {
//         // Then continue if the token still represents a valid user,
//         // otherwise redirect to login.
//         validUser ? next() : redirectToLogin()
//       })
//     }

//     // If auth is required and the user is NOT currently logged in,
//     // redirect to login.
//     redirectToLogin()

//     // eslint-disable-next-line no-unused-vars
//     // eslint-disable-next-line no-inner-declarations
//     function redirectToLogin() {
//       // Pass the original route to the login component
//       next({ name: 'login', query: { redirectFrom: routeTo.fullPath } })
//     }
//   } else {
//     const publicPages = ['/login', '/register', '/forgot-password'];
//     const authpage = !publicPages.includes(routeTo.path);
//     const loggeduser = localStorage.getItem('user');

//     if (authpage && !loggeduser) {
//       return next('/login');
//     }

//     next();
//   }
// })
router.beforeEach((to, from, next) => {
const token = store.getters["auth/bearer_token"]
   if (to.matched.some((record) => record.meta.authRequired)) {
        console.log("requiresAuth");
        if (!token) {
            next("/login");
        } else {
            next();
        }
    } else if (to.matched.some((record) => record.meta.requiresVisitor)) {
        console.log("requiresVisitor");
        if (token) {
            next("/");
        } else {
            next();
        }
    } else {
        next();
    }
})
export default router
