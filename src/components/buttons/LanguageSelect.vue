<template>
  <div>
    <div class="lang_and_currency">
      <div class="lang">
        <!-- <template v-if="this.$i18n.locale == 'ar'">
          <button @click="changeLocale">
            English
          </button>
        </template>
        <template v-if="this.$i18n.locale == 'en'">
          <button @click="changeLocale">
         Arabic
          </button>
        </template> -->
        <select v-model="$i18n.locale">
          <option v-for="(locale, i) in locales" :key="`locale-${i}`" :value="locale"  style="font-size: 22px; font-weight: 500">
            <span v-if="locale === 'ar'">English</span>
            <span v-else>Arabic</span>
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  data() {
    return { locales: ['ar', 'en'] }
  },
  methods: {
    changeLocale() {
      console.log('change lang')
      if (this.$i18n.locale == 'ar') {
        Cookies.set('locale', 'en')
        window.location.reload()
      }
      if (this.$i18n.locale == 'en') {
        Cookies.set('locale', 'ar')
        window.location.reload()
      }
    }
  }
}
</script>

<style scoped>
label,
select {
  width: 100%;
  outline: none;
  border: none;
}
option{
  outline: none;
  border: none;
}

span {
  display: block;
}

button {
  outline: none;
}
</style>
