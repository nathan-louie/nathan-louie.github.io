<template>
  <div id="home" class="wrapper">
    <div class="static-container">
      <h1 class="title">
        Nathan Louie
      </h1>
      <div class="std">
        <subtitle class="-big">
          I'm a high-school developer making projects I find fun!
        </subtitle>
        <ul class="home-list">
          <li>
            <h2>My ongoing projects:</h2>
          </li>
          <li>
            - Fischer Random chess website ♛
          </li>
          <li>
            - Teach Assist mark tracker 🏫
          </li>
          <li>
            - Competitive programming 💻
          </li>
        </ul>
        <h2 class="-end">
          Feel free to look around!
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import "@/styles/Home.scss";

export default {
  name: "Home",
  props: {
    viewport: Object,
  },
};
</script>
