<template>
  <div class="services">
    <div class="line"></div>
    <v-container>
      <v-row>
        <v-col cols="12" lg="2" md="4" xs="6">
          <div class="service">
            <div class="image">
              <img src="../../assets/customer-care.png" alt="" />
            </div>
            <h5 class="title">{{ $t('services.techSupport') }}</h5>
          </div>
        </v-col>

        <v-col cols="12" lg="2" md="4" xs="6">
          <div class="service">
            <div class="image">
              <img src="../../assets/lock.png" alt="" />
            </div>
            <h5 class="title">{{ $t('services.security') }}</h5>
          </div>
        </v-col>
        <v-col cols="12" lg="2" md="4" xs="6">
          <div class="service">
            <div class="image">
              <img src="../../assets/operation.png " alt="" />
            </div>
            <h5 class="title">{{ $t('services.updates') }}</h5>
          </div>
        </v-col>
        <v-col cols="12" lg="2" md="4" xs="6">
          <div class="service">
            <div class="image">
              <img src="../../assets/encryption.png" alt="" />
            </div>
            <h5 class="title">{{ $t('services.fullSecurity') }}</h5>
          </div>
        </v-col>
        <v-col cols="12" lg="2" md="4" xs="6">
          <div class="service">
            <div class="image">
              <img src="../../assets/office-building.png" alt="" />
            </div>
            <h5 class="title">{{ $t('services.differentProgrames') }}</h5>
          </div>
        </v-col>
        <v-col cols="12" lg="2" md="4" xs="6">
          <div class="service">
            <div class="image">
              <img src="../../assets/office-building.png" alt="" />
            </div>
            <h5 class="title">{{ $t('services.specialProgrammes') }}</h5>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style>
.services {
  margin: 100px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.services .v-container{
  padding-right: 0;
    padding-left: 0;
}
.service {
  border: 1px solid rgba(219, 219, 219, 1);
  border-top-left-radius: 83px;
  margin: auto;
  text-align: center;
  padding: 32px 15px;
  height: 190px;
}
.service .image {
  width: 66px;
  height: 66px;
  margin: auto;
  margin-bottom: 15px;
}
.service .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.service h5 {
  font-size: 16px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
}
.service:hover {
  border-color: rgba(95, 198, 226, 1);
  transition: all ease-in-out .3s;
}
.service:hover h5 {
  color: rgba(95, 198, 226, 1);
  transition: all ease-in-out .3s;
}

.services .line {
  height: 3px;
  border-bottom: 1px solid rgba(219, 219, 219, 1);

  width: 20%;
}
</style>
