<template>
  <div class="cardWrapper">
    <div
      :class="{ flipped: flip }"
      class="card relative aspect-square transition duration-500 ease-out cursor-pointer shadow-md shadow-black hover:shadow-lg hover:shadow-black rounded-xl"
    >
      <img
        :src="returnIconSrc(content)"
        :alt="content.toString()"
        class="cardFront absolute w-full h-full rounded-lg sm:rounded-xl"
      />
      <span
        class="cardBack bg-orange-600 w-full h-full absolute rounded-lg sm:rounded-xl duration-500 hover:bg-orange-400"
      >
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import returnIconSrc from "@/utils/returnIconSrc";

defineProps<{ content: number; flip: boolean }>();
</script>

<style scoped>
.cardWrapper {
  perspective: 400px;
}
.card {
  transform-style: preserve-3d;
}
.flipped {
  transform: rotateY(180deg);
}
.cardFront {
  transform: rotateY(180deg);
  backface-visibility: hidden;
}
.cardBack {
  backface-visibility: hidden;
}
</style>
