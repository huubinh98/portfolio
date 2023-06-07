<template>
  <div class="banner">
    <section class="text-banner container">
      <p class="text-hi">Hi, There!</p>
      <div class="text-dynamic">
        <h2 class="text-static">I'm</h2>
        <AutoTyperVue componentTag="h2" :text="state.text" />
      </div>
      <p class="text-desc">
        High level experience in web development knowledge, producing quality
        work.
      </p>

      <ButtonCustom buttonText="Contact me" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { AutoTyperVue } from "auto-typer-vue3";
import ButtonCustom from "./ButtonCustom.vue";

const state = reactive({
  text: ["Trần Hữu Bình", "Front end Developer"],
});
</script>

<style scoped lang="scss">
$white-cl: #ffffff;
$primary-cl: #f891fc;
.banner {
  background: url("../assets/images/banner.jpg") center center / cover no-repeat;
  width: 100%;
  height: 100vh;

  .text-banner {
    padding-top: 25%;
    .text-hi {
      color: $white-cl;
      margin-bottom: 3.2rem;
    }
  }

  .text-dynamic {
    font-size: 6rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    .text-static {
      color: $white-cl;
      margin-right: 2rem;
    }
    .auto-typer-vue {
      color: $primary-cl;
    }

    .dynamic-text {
      margin-left: 1.6rem;
      li {
        color: $primary-cl;
        position: relative;

        &::after {
          content: "";
          position: absolute;
          left: 0;
          height: 100%;
          width: 100%;
          border-left: 2px solid $primary-cl;
          animation: typing 5s steps(20) infinite;
        }

        @keyframes typing {
          40%,
          60% {
            left: calc(100% + 30px);
          }
          100% {
            left: 0;
          }
        }
      }
    }
  }

  .text-desc {
    max-width: 50%;
    width: 100%;
    color: $white-cl;
    line-height: 2rem;
    margin-top: 1.6rem;
    margin-bottom: 3.2rem;
  }
}
</style>
