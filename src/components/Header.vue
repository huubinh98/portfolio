<template>
  <header id="header">
    <div class="container">
      <h1 id="logo"><a href="">HB</a></h1>
      <nav id="nav-menu">
        <ul>
          <li
            v-for="item in MENU"
            :key="item.id"
            @click="handleScrollMenu(item.id)"
          >
            <span>{{ item.title }}</span>
          </li>
        </ul>
      </nav>
      <div
        class="btn-menu"
        :class="state.activeBtn && 'clicked'"
        @click="state.activeBtn = !state.activeBtn"
      >
        <span></span>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { MENU } from "@/constants";
const state = reactive({
  activeBtn: false,
  active: false,
});

const handleScrollMenu = (id: string) => {
  const elm = document.getElementById(id) as HTMLElement;
  if (elm) {
    const pos = elm.getBoundingClientRect();
    const scroll = document.getElementById("js-scroll-preview");

    if (scroll) {
      scroll.scrollTo({
        top: scroll.scrollTop + pos.top - 250,
        behavior: "smooth",
      });
    }
  }
};
</script>

<style scoped lang="scss">
$white-cl: #ffffff;
$primary-cl: #f891fc;
#header {
  width: 100%;
  height: 80px;
  position: absolute;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
  #logo {
    color: $white-cl;
    font-size: 3.2rem;
  }
  #nav-menu {
    height: 100%;
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 40px;
      height: 100%;
      li {
        color: $white-cl;
        font-size: 2rem;
        cursor: pointer;
        &:hover {
          color: $primary-cl;
          transition: transform 0.4s;
        }
      }
    }
  }
  .btn-menu {
    width: 30px;
    height: 22px;
    margin-left: 15px;
    cursor: pointer;
    position: relative;
    display: none;
    span {
      width: 100%;
      height: 2px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: $white-cl;
    }
    &::after,
    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      transform: rotate(0deg) translateY(0);
      background-color: $white-cl;
    }
    &::after {
      position: absolute;
      bottom: 0;
    }
    &.clicked {
      &:before {
        transform: rotate(45deg) translate(6px, 8px);
        transition: transform 0.4s;
      }
      span {
        opacity: 0;
        transition: 0.4s;
      }
      &:after {
        transform: rotate(-45deg) translate(6px, -8px);
        transition: transform 0.4s;
      }
    }
    &:hover span,
    &:hover::after,
    &:hover::before {
      background-color: $primary-cl;
    }
  }
}
</style>
