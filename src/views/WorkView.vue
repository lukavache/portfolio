<template>
  <div class="portfolio">
    <div class="cv">
      <div class="work-experience">
        <h2>{{ $t("work.work") }}</h2>
        <div class="section">
          <h3>{{ $t("work.practice") }}</h3>
          <img :src="delta" class="delta" />
        </div>
        <p>{{ $t("work.description") }}</p>
        <div class="section">
          <h3>{{ $t("work.tBank") }}</h3>
          <img :src="tera" class="tera" />
        </div>
        <p>{{ $t("work.tSkills") }}</p>
        <div class="section">
          <h3>{{ $t("work.pa") }}</h3>
          <img :src="pa" class="pa" />
        </div>
        <p>{{ $t("work.pSkills") }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import delta from "../assets/images/delta.png";
import tera from "../assets/images/tera.png";
import pa from "../assets/images/pa.png";
</script>