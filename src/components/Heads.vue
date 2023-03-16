<template>
    <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold"><slot></slot></h1>
            <p class="col-md-8 fs-4">A home for fequently asked questions across xApp's and webservices by Three.</p>
            <small>*availablity of services primarily dependant on ISP provider</small>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Heads",
    }
</script>
