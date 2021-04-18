<template>
  <div id="home" class="wrapper">
    <div class="static-container">
      <h1 class="title">
        Nathan Louie
      </h1>
      <div class="std">
        <subtitle class="-big">
          I'm a high-school developer making projects I find fun!<br /><br />
        </subtitle>
        <p class="-gray">Selected works</p>
        <ul class="home-list">
          <li>
            <router-link to="/fr/" title="Project 1">
              <img src="@/assets/image1.jpeg" alt="Image" />
              <div class="details">
                <strong>Fischer Random chess website ♛</strong><br />
                <span class="-comment">2021 - Present</span><br />
                Coming soon!
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/ta/" title="Project 2">
              <img src="@/assets/image2.jpeg" alt="Image" />
              <div class="details">
                <strong>Teach Assist mark tracker 🏫</strong><br />
                <span class="-comment">2020 - 2021</span><br />
                Coming soon!
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/cp/" title="Project 3">
              <img src="@/assets/image3.png" alt="Image" />
              <div class="details">
                <strong>Competitive programming 💻</strong><br />
                <span class="-comment">2019 - Present</span><br />
                Coming soon!
              </div>
            </router-link>
          </li>
        </ul>
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
