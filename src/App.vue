<template>
  <div class="wrapper">
    <Header />
    <Banner />
    <main id="main">
      <section id="about" class="p-y">
        <div class="container">
          <div class="about-wrap">
            <div class="image-about">
              <img src="./assets/images/binh.02.JPG" alt="" />
            </div>
            <div class="flex-1">
              <h2 class="text-title">About Me</h2>
              <p class="fw-600 text-name text-white">Hey, I'm Tran Huu Binh.</p>
              <p class="text-white text-about">
                I'm a highly motivated Frontend Developer with 2+ years of
                experience in UI development and user experience.
                <br />
                I'm passionate about creating beautiful and engaging user
                experiences that are both intuitive and functional.
                <br />
                I'm looking for a challenge opportunities in a dynamic
                environment where I can grow and collaborate with others
                professional for further development.
                <br />
                I graduated from Hue University of Science majoring in
                Information Technology in 2020
                <br />
                <b class="fw-600">
                  When I'm not sitting in front of the computer screen,
                </b>
                Maybe I'm playing sports, football and badminton two of my
                favorite sports.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="experience">
        <div class="bg-exper" />
        <Experience :experienceData="EXPERINCE" />
      </section>
      <section id="project" class="p-y">
        <Project :dataProject="PROJECTS" />
      </section>
      <section id="skills" class="p-y">
        <div class="container">
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
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import Banner from "./components/Banner.vue";
import Footer from "./components/Footer.vue";
import { SKILLS, PROJECTS, EXPERINCE } from "@/constants";
import Project from "./components/Project.vue";
import Experience from "./components/Experience.vue";
</script>

<style scoped lang="scss">
$color-text: #cbd5e1;
#main {
  .about-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10rem;
  }

  #about {
    background-color: #1b1b1b;

    .image-about {
      width: 100%;
      height: 100%;
      max-width: 350px;
      // background-color: $color-text;
      border-radius: 4rem;
      overflow: hidden;
      box-shadow: inset 0 0 10px 20px #ffffff08;
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 32px;
      img {
        width: 100%;
        height: 100%;
        max-height: 400px;
        object-fit: contain;
      }
    }

    .text-name {
      font-size: 3.2rem;
    }

    .text-about {
      text-align: justify;
    }
  }

  #experience {
    position: relative;
    .bg-exper {
      background-image: url("./assets/images/experience-xl.jpg");
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      min-height: 100%;
      width: 100%;
      height: 100%;
      position: absolute;
      opacity: 0.5;
    }

    @media only screen and (max-width: 480px) {
      .bg-exper {
        background-image: url("./assets/images/experience-xs.jpg");
      }
    }

    @media only screen and (max-width: 660px) {
      .bg-exper {
        background-image: url("./assets/images/experience-sm.jpg");
      }
    }
    @media only screen and (max-width: 900px) {
      .bg-exper {
        background-image: url("./assets/images/experience-md.jpg");
      }
    }
    @media only screen and (max-width: 1170px) {
      .bg-exper {
        background-image: url("./assets/images/experience-lg.jpg");
      }
    }
  }

  #project {
    background-color: #0c212e;
    padding-top: 6rem;
    padding-bottom: 6rem;
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
        object-fit: cover;
      }

      .text-skills {
        color: $color-text;
        margin-top: 1.2rem;
      }
    }
  }
}
</style>
