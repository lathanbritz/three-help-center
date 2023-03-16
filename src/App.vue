<template>
    <component :is="layout" />
</template>

<script>
    import DefaultLayout from "./layouts/DefaultLayout.vue"
    import MainLayout from "./layouts/MainLayout.vue"

    export default {
        components: {
            DefaultLayout,
            MainLayout,
        },
        data() {
            return {
                layout: null,
            }
        },
        watch: {
            $route(to) {
                this.layout = to.meta.layout !== undefined ? to.meta.layout : "DefaultLayout"
            },
        },
    }
</script>
<style>
.one-fine-dot::before {
  content: "\25cf";
}

.one-fine-red-dot::before {
  content: "\25cf";
  color: #FF1A8B;
}

.one-fine-green-dot::before {
  content: "\25cf";
  color: #00e56a;
}

.one-fine-empty-dot::before {
  content: "\25cb";
}

.lead .one-fine-dot {
  font-size: 1.5em;
}
</style>