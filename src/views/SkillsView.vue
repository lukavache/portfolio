<template>
  <div class="portfolio">
    <div class="cv">
      <div class="computer-skills">
        <h2>{{ $t("skills.skills") }}</h2>
        <div>
          <h3>{{ $t("skills.perSkills") }}</h3>
          <ul>
            <li>{{ $t("skills.friendly") }}</li>
            <li>{{ $t("skills.solver") }}</li>
            <li>{{ $t("skills.responsible") }}</li>
          </ul>
        </div>
        <div>
          <h3>{{ $t("skills.cSkills") }}</h3>
          <ul>
            <li>Excel, Word, Power Point, Access, Internet, E-mail;</li>
            <li>HTML, CSS, JavaScript</li>
            <li>{{ $t("skills.frontend") }}</li>
            <li>{{ $t("skills.backend") }}: Node.js, Express, MongoDb, SQl;</li>
            <li>{{ $t("skills.networking") }}</li>
          </ul>
          <div class="images">
            <img :src="pentest1" class="pentest1" />
            <img :src="pentest2" class="pentest2" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import pentest1 from "../assets/images/pentest1.png";
import pentest2 from "../assets/images/pentest2.png";
</script>