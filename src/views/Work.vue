<template>
  <div id="Work" class="wrapper">
    <div class="static-container">
      <h1 class="title">
        Selected<br v-if="viewport.is568" /> Works
      </h1>
      <div class="std">
        <p class="-gray">Some of my personal projects!</p>
        <ul class="work-list">
          <li>
            <router-link to="/work/" title="Project 1">
              <img
                src="@/assets/image1.jpeg"
                alt="Image"
              />
              <div class="details">
                <strong>Project 1</strong><br />
                <span class="-comment">2021 - 2021</span><br />
                Description here
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/work/" title="Project 2">
              <img
                src="@/assets/image2.jpeg"
                alt="Image"
              />
              <div class="details">
                <strong>Project 2</strong><br />
                <span class="-comment">2021 - 2021</span><br />
                Description here
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/work/" title="Project 3">
              <img
                src="@/assets/image3.jpg"
                alt="Image"
              />
              <div class="details">
                <strong>Project 3</strong><br />
                <span class="-comment">2021 - 2021</span><br />
                Description here
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import "@/styles/Work.scss";

export default {
  name: "Work",
  props: {
    viewport: Object,
  },
};
</script>
