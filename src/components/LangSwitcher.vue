<template>
    <div class="locale-changer">
      <button
        v-for="(language, index) in langs"
        @click="onLocaleChange(language)"
        :key="'lang' + index"
      >
      <img
        :src="getFlagPath(language)"
        alt="Flag"
        :class="{ active: language === i18n.global.locale.value }"
      />
      </button>
    </div>
</template>
  
<script setup lang="ts">
  import i18n, { availablelanguages } from "../composables/useLanguages";
  import { useRouter, useRoute } from "vue-router";
  import flagEn from "../assets/images/en.svg";
  import flagKa from "../assets/images/ka.svg";
  const langs = availablelanguages;
  const router = useRouter();
  const route = useRoute();

  function getFlagPath(language: string): string {
    // Use a dynamic import based on the language
    switch (language) {
      case 'en':
        return flagEn;
      case 'ka':
        return flagKa;
      // Add more cases if you have additional languages
      default:
        return '';
    }
  }
  
  function onLocaleChange(locale: string) {
    // const newLocale = event_.target.value;
  
    if (locale === i18n.global.locale.value) {
      return;
    }
  
    //console.log(locale, i18n.global.locale, route.name);
  
    i18n.global.locale.value == locale;
  
    const params = Object.assign({}, route.params, { lang: locale });
  
    const newRoute: object = {
      name: route.name,
      params: params,
    };
    //console.log(newRoute);
    router.push(newRoute);
  }
</script>
  
<style lang="scss" scoped>
  .locale-changer button {
    border: none;
    background: transparent;
    cursor: pointer;
    transform: rotate(90deg); /* Rotate the entire button by 90 degrees */

    img {
      width: 22px; /* Adjust the size as needed */
      height: auto;
      margin-right: 5px; /* Add margin between flags */
      opacity: 0.7;
    }
    img.active {
      opacity: 1;
    }
  }
</style>