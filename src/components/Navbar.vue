<template>
  <nav class="left-navbar">
    <div class="switcher">
      <LangSwitcher />
    </div>
    <ul>
      <li><RouterLink :to="`/${i18n.global.locale.value}`">Home</RouterLink></li>
      <li><RouterLink :to="`/${i18n.global.locale.value}/skills`">Skills</RouterLink></li>
      <li><RouterLink :to="`/${i18n.global.locale.value}/work`">Working Experience</RouterLink></li>
    </ul>
    <ThemeSwitcher class="theme" />
  </nav>
</template>

<script setup lang="ts">

import {useRoute, useRouter} from 'vue-router'
import LangSwitcher from './LangSwitcher.vue';
import i18n from '@/composables/useLanguages';

import ThemeSwitcher from '../components/ThemeSwitcher.vue';

const router = useRouter();
const route = useRoute();

</script>