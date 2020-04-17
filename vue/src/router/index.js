import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    base: process.env.BASE_URL,
    routes: [
        {
            name: "home",
            path: "/",
            component: () => import("../views/Home"),
        }
    ]
});
