<template>
  <div class="w-full max-w-screen-sm">
    <div class="flex justify-between items-center mb-10">
      <h2 class="text-2xl sm:text-4xl font-bold text-red-700 drop-shadow-md">
        FLIPS: {{ flips }}
      </h2>
      <button
        @click="newGame"
        class="font-bold text-gray-800 bg-red-700 text-2xl sm:text-4xl p-3 sm:p-5 rounded-full shadow-md duration-500 shadow-black hover:shadow-lg hover:shadow-black hover:bg-red-600"
      >
        NEW GAME
      </button>
    </div>
    <div class="grid grid-cols-4 gap-3 sm:gap-5">
      <CardItem
        v-for="(card, index) in cards"
        :key="index"
        :content="card.content"
        :flip="card.flip"
        @click="cardClick(card)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CardItem from "./CardItem.vue";
import type { Card } from "../types";

const cardSymbols = [1, 2, 3, 4, 5, 6, 7, 8];
const cards = ref<Card[]>(createCards());
const selected = ref<Card[]>([]);
const flips = ref(0);

function createCards() {
  const deck: Card[] = [];
  const pairedSymbols = [...cardSymbols, ...cardSymbols];
  pairedSymbols.sort(() => Math.random() - 0.5);
  pairedSymbols.forEach((card) => {
    deck.push({
      content: card,
      flip: false,
      matched: false,
    });
  });
  return deck;
}

function newGame() {
  cards.value.forEach((card) => {
    card.flip = false;
  });
  setTimeout(() => {
    cards.value = createCards();
    selected.value = [];
    flips.value = 0;
  }, 500);
}

function cardClick(card: Card) {
  if (
    selected.value.length < 2 &&
    !card.matched &&
    card !== selected.value[0]
  ) {
    card.flip = true;
    selected.value.push(card);
    checkSelected();
  }
}
function checkSelected() {
  if (selected.value.length < 2) return;
  flips.value += 1;
  const firstCard = selected.value[0];
  const secondCard = selected.value[1];
  if (firstCard.content === secondCard.content) {
    setTimeout(() => {
      firstCard.matched = true;
      secondCard.matched = true;
      selected.value = [];
      checkVictory();
    }, 750);
  } else {
    setTimeout(() => {
      firstCard.flip = false;
      secondCard.flip = false;
      selected.value = [];
    }, 750);
  }
}
function checkVictory() {
  const unmatched = cards.value.filter((card) => !card.matched);
  if (unmatched.length === 0) {
    console.log("victory");
  }
}
</script>
