<template>
  <div class="contact">
    <v-container>
      <div class="inner_container">
        <h3 class="main_text">{{ $t('contact.getConsult') }}</h3>

        <!-- Start:: contact Form -->
        <v-form>
          <v-row>
            <v-col cols="12" lg="6" sm="12">
              <v-label>{{ $t('contact.name') }}</v-label>
              <input type="text" placeholder="hasnaa" />
            </v-col>
            <v-col cols="12" lg="6" sm="12">
              <v-label>{{ $t('contact.email') }}</v-label>
              <input type="text" placeholder="EX: hasnaa3193378@gmail.com" />
            </v-col>
            <v-col cols="12" lg="12" sm="12">
              <v-label>{{ $t('contact.messageAddress') }}</v-label>
              <input type="text" placeholder="Ex: hasnaa" />
            </v-col>
            <v-col cols="12" lg="12" sm="12">
              <v-label>{{ $t('contact.message') }}</v-label>
              <textarea type="text"></textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="12" class="d-flex" style="justify-content:center"> <button class="global_btn">{{ $t('contact.send') }}</button></v-col>
          </v-row>
        </v-form>
        <!-- End:: contact Form -->
      </div>
    </v-container>
  </div>
</template>

<script>
export default {}
</script>

<style>
.v-container {
  direction: inherit;
}
.v-label {
  opacity: 1 !important;
  margin-bottom: 10px;
}
input,
textarea {
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  height: 45px;
  display: block;
  width: 100%;
  padding: 5px;
  font-size: 16px;
}
textarea {
  height: 150px;
}
input,
textarea:focus {
  border: 1px solid #e4e4e4;
  outline: 0;
}
.inner_container {
  max-width: 800px;
  margin: auto;
}
</style>
