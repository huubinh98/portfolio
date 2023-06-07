<template>
  <div class="wrapper">
    <Header />
    <Banner />
    <main id="main" class="container">
      <section class="about-wrap">
        <div class="image-about">
          <img src="./assets/images/avt_kh_nen.png" alt="" />
        </div>
        <div>
          <h2 class="text-title">About Me</h2>
          <p class="text-desc">
            Highly motivated Frontend Developer with 2+ years of experience in
            UI development and user experience. Passionate about creating
            beautiful and engaging user experiences that are both intuitive and
            functional. Seeking a challenging opportunity in a dynamic
            environment where I can grow and collaborate with other
            professionals to thrive even more.
          </p>
        </div>
      </section>
      <section id="work">
        <img src="" alt="" />
        <div>
          <h2 class="text-title">Work</h2>
          <p class="text-desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore aut
            ut sunt molestias sed labore possimus nesciunt optio, consectetur
            cumque amet obcaecati tempore saepe. Porro officiis cumque
            architecto perferendis assumenda.
          </p>
        </div>
      </section>
      <section id="skills">
        <img src="" alt="" />
        <div>
          <h2 class="text-title">Skills</h2>
          <div class="wrap-skills">
            <div v-for="item in SKILLS" :key="item.title" class="skill-item">
              <img :src="item.src" :alt="item.title" class="skill-img" />
              <p class="text-skills">{{ item.title }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer id="footer" class="container">
      <section id="contact">
        <img src="" alt="" />
        <div>
          <h2 class="text-title">Contact</h2>
          <div>
            <div>
              <p>Phone number:</p>
              <p>+84 777114511</p>
            </div>
            <div>
              <p>Email:</p>
              <p>tranhuubinh110@gmail.com</p>
            </div>
            <div>
              <p>Address</p>
              <p>Tan Binh district, Ho Chi Minh city</p>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import Banner from "./components/Banner.vue";
import { SKILLS } from "@/constants";
</script>

<style scoped lang="scss">
$color-text: #cbd5e1;
#main {
  padding-top: 3rem;
  .about-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
  }
  .image-about {
    width: 100%;
    height: 100%;
    max-width: 450px;
    max-height: 400px;
    // background-color: $color-text;
    border-radius: 4rem;
    overflow: hidden;
    box-shadow: inset 0 0 10px 20px #ffffff08;
    border: 1px solid rgba(255, 255, 255, 0.1);
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .wrap-skills {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-auto-rows: 200px;
    gap: 2.4rem;

    .skill-item {
      box-shadow: inset 0 0 0 8px #ffffff08;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 24px;
      background: rgba(255, 255, 255, 0.01);
      padding: 40px 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .skill-img {
        width: 80px;
        height: 80px;
        object-fit: cover;
      }

      .text-skills {
        color: $color-text;
        margin-top: 1.2rem;
      }
    }
  }
}

#footer {
  #contact {
    color: $color-text;
  }
}
</style>
