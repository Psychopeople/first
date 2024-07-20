<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <router-link class="navbar-brand" :to="{name: 'home'}">Mynote</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <router-link :class="route_name == 'home_index' ? 'nav-link active' : 'nav-link'" :to="{name: 'home_index'}">首页</router-link>
            </li>
            <li class="nav-item">
                <router-link :class="route_name == 'newthings_index' ? 'nav-link active' : 'nav-link'" :to="{name: 'newthings_index'}">新鲜事</router-link>
            </li>
            <li class="nav-item">
                <router-link :class="route_name == 'myscript_index' ? 'nav-link active' : 'nav-link'" :to="{name: 'myscript_index'}">脚本</router-link>
            </li>
            <li class="nav-item dropdown">
                <router-link class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" :to="{name: 'notebook_index'}">我的笔记</router-link>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">专业课笔记</a></li>
                <li><a class="dropdown-item" href="#">其他笔记</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">添加笔记</a></li>
            </ul>
            </li>
        </ul>
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
    </div>
</nav>
</template>

<script>

import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default{
    setup() {
        const route = useRoute();
        let route_name = computed(() => route.name)
        return {
            route_name
        }
    }
}
</script>

<style scoped>
</style>
