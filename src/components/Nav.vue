<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light mb-4 border-bottom">
            <h1 v-if="$route.name !== 'Apps'">{{ $route.name }} support page</h1>
            <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item text-uppercase" v-for="route in routes" :key="route.path">
                        <router-link :to="route.path" class="nav-link" :title="route.name" :class="{ active: isActive(route.path) }">
                            <i class="bi bi-house-fill" v-if="route.path === '/'"></i>
                            {{ route.path !== "/" ? route.name : "" }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    import { computed } from "vue"
    import { useRouter } from "vue-router"
    import { routes as rts } from "../router"

    export default {
        setup() {
            const routes = rts

            const router = useRouter()
            const activeRoute = computed(() => router.currentRoute.value.path)
            const isActive = (path) => path === activeRoute.value
            return { isActive, routes }
        },
        onUpdated() {
            console.log('updated')
        }
    }
</script>

<style lang="scss" scoped>
    $blc: #000;
    $lblc: rgba($blc, 0.65);

    a {
        text-decoration: none;
        color: $lblc;
        transition: all 0.25s;
    }

    ul {
        list-style: none;
    }
</style>
