<template>
  <div class="container p-y">
    <h2 class="text-title">Experience</h2>
    <div class="experience-list">
      <div
        v-for="item in experienceData"
        :key="item.id"
        class="experience-item"
      >
        <div class="exper-content box-shadow-inset">
          <h2 class="exper-title">{{ item.title }}</h2>
          <h3 class="exper-sub-title">{{ item.subTitle }}</h3>
          <div v-html="item.descriptionDetail" />
        </div>
        <div class="exper-icon"></div>
        <span class="date">{{ item.date }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { experienceObject } from "@/models";
defineProps({
  experienceData: {
    type: Array as () => experienceObject[],
    default: () => [],
  },
});
</script>

<style lang="scss">
.experience-list {
  position: relative;
  min-height: 700px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: calc(50% - 1px);
    height: 100%;
    width: 2px;
    background: #00b7c7;
  }
  .experience-item {
    position: relative;
    color: white;
    margin-bottom: 2rem;

    &::after {
      content: "";
      display: table;
      clear: both;
    }

    &:nth-child(odd) {
      .exper-content {
        float: left;
      }
    }
    &:nth-child(odd) .exper-content:before {
      top: 24px;
      left: 100%;
      border-color: transparent;
      border-left-color: #f9f6f6;
    }

    &:nth-child(even) {
      .date {
        text-align: right;
        left: auto;
        right: 55%;
      }
    }
    .exper-content {
      float: right;
      position: relative;
      background: #1b1b1b;
      margin-left: 0;
      padding: 1.5em;
      width: 40%;
      opacity: 0.85;
      transition: all 0.3s ease;
      &::before {
        content: "";
        position: absolute;
        top: 24px;
        right: 100%;
        height: 0;
        width: 0;
        border: 15px solid transparent;
        border-color: transparent;
        border-right-color: #f9f6f6;
      }
      &:hover {
        opacity: 1;
      }

      &:hover + .exper-icon {
        background: #00b7c7;
      }

      .exper-title {
        font-size: 1.8rem;
        text-transform: uppercase;
        margin-bottom: 1rem;
        font-weight: 600;
      }
      .exper-sub-title {
        color: #f891fc;
        margin-bottom: 1rem;
      }

      .exper-desc {
        line-height: 1.5;
        font-size: 1.6rem;
      }
    }
    .exper-icon {
      position: absolute;
      width: 50px;
      height: 50px;
      top: 15px;
      left: 50%;
      border-radius: 50%;
      background: #212121;
      transform: translateZ(0) translateX(-50%);
      backface-visibility: hidden;
      transition: all 0.3s ease;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .date {
      font-size: 1em;
      font-weight: 500;
      display: inline-block;
      color: #f2f2f2;
      font-family: Gotham, Helvetica, Arial, sans-serif;
      text-transform: uppercase;
      position: absolute;
      width: fit-content;
      left: 55%;
      top: 30px;
    }
  }
}
</style>
