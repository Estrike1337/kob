<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">King Of Bot</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              :class="route_name=='pk_index'?'nav-link active':'nav-link'"
              aria-current="page"
              href="/pk/"
            >对战</a>
          </li>
          <li class="nav-item">
            <a :class="route_name=='record_index'?'nav-link active':'nav-link'" href="/record/">对局列表</a>
          </li>
          <li class="nav-item">
            <a
              :class="route_name=='ranklist_index'?'nav-link active':'nav-link'"
              href="/ranklist/"
            >排行榜</a>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >lmj</a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="/user/bot">我的Bot</a>
              </li>

              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">退出</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
  setup() {
    const route = useRoute();
    let route_name = computed(() => route.name);
    return {
      route_name
    };
  }
};
</script>

<style scoped>
</style>