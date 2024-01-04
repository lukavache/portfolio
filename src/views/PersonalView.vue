<template>
    <div class="portfolio">
      <div class="home">
        <h3>{{ $t("home.info") }}</h3>
        <div>
          <p>{{ $t("home.fullname") }}</p>
          <p>{{ $t("home.date") }}: 14.11.1998</p>
          <p>{{ $t("home.address") }}</p>
          <p>{{ $t("home.cell") }}: +995 555 32 46 40</p>
          <p>{{ $t("home.tel") }}: +995 322 77 13 25</p>
          <p>{{ $t("home.mail") }}: lukavacheishvili@gmail.com</p>
          <p>{{ $t("home.linked") }}: <a href="https://ge.linkedin.com/in/luka-vacheishvili-2411712a3">linkedin.com/luka-vacheishvili</a></p>
          <p>{{ $t("home.github") }}: <a href="https://github.com/lukavache">github.com/lukavache</a></p>
        </div>
        <h3>{{ $t("home.education") }}</h3>
        <p>2005-2017: {{ $t("home.school") }}</p>
        <p>2017-2021: {{ $t("home.university") }}</p>

        <div>
          <h3>{{ $t("home.languages") }}</h3>
          <p>{{ $t("home.languagesLevel") }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <style lang="scss">
  @import '../assets/css/style';
  </style>