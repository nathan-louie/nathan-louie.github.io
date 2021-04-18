<template>
  <div id="about" class="wrapper">
    <div class="static-container">
      <h1 class="title">
        Hey I'm<br v-if="viewport.is568" />
        Nathan!
      </h1>
      <div class="std">
        <ul class="about-container">
          <li>
            <a>
              <img src="@/assets/nathanhlouie.png" alt="Me :)" />
              <div class="details">
                <strong
                  >I'm a high-school student currently developing fun
                  projects.</strong
                ><br /><br />
                <span class="-comment">
                  I love using my development tools to tackle complex
                  problems whenever I can. When I'm not working on one of my
                  personal projects, you can find me playing video games,
                  studying master-level chess games, or creating music.
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import "@/styles/About.scss";
export default {
  name: "About",
  props: {
    viewport: Object,
  },
};
</script>
