import { createRouter, createWebHistory } from 'vue-router'

import Apps from '../views/Apps.vue'
import About from '../views/About.vue'
import Contacts from '../views/Contacts.vue'

import Multisig from '../views/Multisig.vue'
import Flush from '../views/Flush.vue'
import Three from '../views/Three.vue'
import XRPSwap from '../views/XRPSwap.vue'
import DAOVote from '../views/DAOVote.vue'

export const routes = [
    {
        path: "/",
        name: "Apps",
        component: Apps,
    },
    // {
    //     path: "/about",
    //     name: "About",
    //     component: About,
    //     meta: { layout: "MainLayout" },
    // },
    // {
    //     path: "/contacts",
    //     name: "Contacts",
    //     component: Contacts,
    //     meta: { layout: "MainLayout" },
    // },
    {
        path: "/flush",
        name: "NFT Flush",
        component: Flush,
        meta: { layout: "MainLayout" },
    },
    {
        path: "/three",
        name: "Three",
        component: Three,
        meta: { layout: "MainLayout" },
    },
    {
        path: "/multisig",
        name: "Multisig",
        component: Multisig,
        meta: { layout: "MainLayout" },
    },
    {
        path: "/xrpswap",
        name: "XRPSwap",
        component: XRPSwap,
        meta: { layout: "MainLayout" },
    },
    {
        path: "/dao-vote",
        name: "DAO Vote",
        component: DAOVote,
        meta: { layout: "MainLayout" },
    }
]

const history = createWebHistory()

const router = createRouter({
    history,
    routes,
});

export default router
