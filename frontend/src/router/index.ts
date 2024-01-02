import {createRouter, createWebHistory} from "vue-router";

export const router = createRouter({
    history: createWebHistory(),
    scrollBehavior() {
        return { top: 0}

    },
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../views/HomeView.vue")
        }
    ]
})