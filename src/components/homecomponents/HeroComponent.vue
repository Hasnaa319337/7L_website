<template>
  <div class="hero">
    <v-container>
        <v-row>
            <v-col cols="12" lg="6" sm="12">
                <h2 class="main_head">{{ $t('hero.quality') }}</h2>
                <p >text</p>
                <button class="global_btn" style="background:#000">{{ $t('about.more') }}</button>
            </v-col>
            <v-col cols="12" lg="6" sm="12">
                <div class="image">
                    <img src="../../assets//hero.png" alt="">
                </div>
            </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.hero{}
.hero .main_head{
    font-size: 45px;
}
.hero .image{
    width: 420px;
    height: 220px;
}
.hero .image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>