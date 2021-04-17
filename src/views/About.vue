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
              <img src="@/assets/image0 copy.jpeg" alt="Me :)" />
              <div class="details">
                <strong>I'm a high-school student currently developing fun projects.</strong><br /><br />
                <span class="-comment">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  molestie nisi vel tincidunt pulvinar. Ut eget augue nec massa
                  commodo posuere. Vivamus condimentum eros vel arcu auctor,
                  eget sodales dolor semper. Ut tristique vehicula ullamcorper.
                  Maecenas sodales purus sed magna consequat, non mattis lorem
                  cursus.
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
