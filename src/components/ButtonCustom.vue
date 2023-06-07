<template>
  <div class="my-button" @mousemove="changeX">
    <i
      :style="{
        background: `linear-gradient(${x}deg, #00ccff, #0e1538, #0e1538, #d400d4)`,
      }"
    ></i>
    <i
      :style="{
        background: `linear-gradient(${x}deg, #00ccff, #0e1538, #0e1538, #d400d4)`,
      }"
    ></i>
    <span>{{ buttonText }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  buttonText: {
    type: String,
    default: "",
  },
});

const x = ref(45);

function changeX(e: any) {
  const rect = e.target.getBoundingClientRect();
  const xVal = e.clientX - rect.left;
  x.value = xVal;
}
</script>

<style scoped lang="scss">
$primary-cl: #f891fc;
.my-button {
  width: 140px;
  height: 40px;
  display: inline-block;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
  transform: scale3d(0);
}

.my-button:active {
  transform: scale3d(2);
}

.my-button i {
  position: absolute;
  inset: -2px;
  display: block;
  border-radius: 8px;
}

.my-button i:nth-child(2) {
  filter: blur(10px);
}

.my-button span {
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  letter-spacing: 2px;
  border: 1px solid #000000;
  border-radius: 5px;
  background: rgba(14, 21, 56, 0.65);
}
</style>
