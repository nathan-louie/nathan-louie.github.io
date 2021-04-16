<template>
  <div id="404" class="wrapper">
    <div class="static-container">
      <h1 class="title">404 Not Found</h1>
      <div class="std">
        <p class="-big">Lost?</p>
        <p>The page you requested could not be found.</p>
        <router-link to="/" title="Back home" class="bt">
          <svg class="nav-ico -prev" viewBox="0 0 16 16">
            <path d="M5,1h10v10 M5.5,10.5l0.8-0.8" />
          </svg>
          Back home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import "@/styles/404.scss";

export default {
  name: "404",
};
</script>
