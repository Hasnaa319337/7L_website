<template>
  <div class="projects">
    <v-container>
      <h3 class="main_text">{{ $t('projects.ourProjects') }}</h3>

      <div class="cards" style="position: relative">
        <div class="start_carve"></div>
        <v-row>
          <v-col cols="12" lg="4" md="4" sm="12" style="position: absolute; top: 24px; right: 21px">
            <div class="image" style="border-radius: 0 109px 0 0">
              <img src="@/assets/image 5.png" alt="" />
              <img src="@/assets/image 6.png" alt="" />
              <img src="@/assets/image 7.png" alt="" />
            </div>
          </v-col>
          <v-col cols="12" lg="4" md="4" sm="12" style="position: absolute; left: 32%; top: 2px">
            <div class="text_card">
              <div>
                <h6>{{ $t('projects.cardNet') }}</h6>
                <p>
                  هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن
                  التركيز على الشكل الخارجي للنص
                </p>
              </div>
              <button class="global_btn">{{ $t('about.more') }}</button>
            </div>
          </v-col>
          <v-col
            cols="12"
            lg="4"
            md="4"
            sm="12"
            style="
              position: absolute;
              left: 24px;
              width: 100%;
              height: 100%;
              top: 118px;
              z-index: 99999999 !important;
            "
          >
            <div class="image">
              <img
                src="@/assets/screencapture-efatorh-2023-06-20-21_59_00 1.png"
                alt=""
                style="border-radius: 0 0 0 146px"
              />
            </div>
          </v-col>
        </v-row>
        <div
          class="end_carve"
          style="z-index: 22222222; position: absolute; left: 0; bottom: 0px"
        ></div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {}
</script>

<style>
.projects .cards {
  border: 1px solid rgba(219, 219, 219, 1);
  height: 500px;
  border-radius: 0px 147px 0px 164px;
}

.projects .text_card {
  background: rgba(95, 198, 226, 0.9);
  text-align: center;
  color: #fff;
  padding: 8px;
  margin-top: 40px;
  height: 327px;
}
.projects .text_card div {
  border: 1px solid #fff;
  height: 100%;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  flex-direction: column;
}
.projects .text_card h6 {
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 15px;
}
.projects .text_card p {
  font-size: 16px;
  font-weight: 400;
}
.projects .text_card button {
  background: rgba(19, 123, 151, 1);
  font-size: 16px;
  font-weight: 700;
  border-radius: 50px 0px 50px 0px;

  bottom: 22px;
  right: 42%;
  z-index: 1000;
}
.projects .start_carve {
  background: rgba(19, 123, 151, 1);
  /* border-radius: 0px 0px 160px 0px; */
  height: 159.89px;
  width: 159.89px;
}
.projects .end_carve {
  /* border-radius: 0px 0px 160px 0px; */
  background: rgba(104, 191, 254, 1);
  height: 159.89px;
  width: 159.89px;
}
</style>
