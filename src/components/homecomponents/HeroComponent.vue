<template>
  <div class="hero">
    <v-container>
      <v-row>
        <v-col cols="12" lg="5" sm="12">
          <h2 class="main_head">{{ $t('hero.quality') }}</h2>
          <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ</p>
          <button class="global_btn" style="background: #000">{{ $t('about.more') }}</button>
        </v-col>
        <v-col cols="12" lg="7" sm="12">
          <div class="image">
            <img src="../../assets/hero.png" alt="" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {}
</script>

<style>
.hero {
    margin: 40px 0 60px;
}
.hero .main_head {
  font-size: 40px;
  width: 82%;
}
.hero p {
  font-size: 16px;
  color: rgba(86, 86, 86, 1);
  font-weight: 400;
  margin: 25px 0;
  width: 80%;
}
.hero .image {
  width: 81%;
  height: 300px;
}
.hero .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
