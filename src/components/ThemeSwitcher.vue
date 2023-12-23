<template>
    <button class="themeBtn" @click="toggleTheme">{{ theme }}</button>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';

const theme = ref('Dark Theme'); // Default theme
document.documentElement.setAttribute('data-theme', theme.value);

const toggleTheme = () => {
  theme.value = theme.value === 'Light Theme' ? 'Dark Theme' : 'Light Theme';
  document.documentElement.setAttribute('data-theme', theme.value);
};
</script>
  
<style lang="scss">
html {
  &[data-theme='Light Theme'] {
    background-color: #F8F8F8;
    color: #333;
  }
  &[data-theme='Dark Theme'] {
    background-color: #111;
    color: #00BFFF;
  }
}

.themeBtn {
  cursor: pointer;
  padding: 0.75em 1em; // Smaller padding
  font-size: 0.8rem; // Smaller font size
  font-family: 'Noto Sans';
  white-space: nowrap;
  border: none;
  background-color: #FF6A00;
  color: white;
  border-radius: 5px;
  margin: 1em;
  transition: background-color 0.3s; // Smooth background color transition
  width: auto; // Ensure the button only takes up the space of its content
  max-width: 100px; // Maximum width of the button
  display: block; // Use block to prevent flex from stretching it
  margin-left: auto; // These two margins set the button
  margin-right: auto; // in the center if needed

  &:hover {
    background-color: darken(#FF6A00, 10%);
  }
}
</style>