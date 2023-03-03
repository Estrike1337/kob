import { createRouter, createWebHistory } from 'vue-router'

import PkIndexView from '../view/pk/PkIndexView'
import RecordIndexView from '../view/record/RecordIndexView'
import RanklistIndexView from '../view/ranklist/RanklistIndexView'
import UserBotIndexView from '../view/user/bot/UserBotIndexView'
import NotFound from '../view/error/NotFound'
const routes = [
    {
        path: "/",
        name: "home",
        redirect: "/pk/",
    },
    {
        path:"/pk/",
        name:"pk_index",
        component:PkIndexView,
    },
    {
        path:"/record/",
        name:"record_index",
        component:RecordIndexView,
        },
    {
        path:"/ranklist/",
        name:"ranklist_index",
        component:RanklistIndexView,
    },
    {
        path:"/user/bot",
        name:"user_bot_index",
        component:UserBotIndexView,
    },
    {
        path:"/404/",
        name:"404",
        component:NotFound,
    },
    // {
    //     path:"/:catchAll(.*)",
    //     name:"home",
    //     redirect:"/404/",
    // },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
