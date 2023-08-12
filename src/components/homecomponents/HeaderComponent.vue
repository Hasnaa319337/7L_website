<template>
  <div>
    <header>
      <!-- hidden navbar -->
      <transition>
        <div class="overlay" @close="hideSideNav" v-if="sideNavIsVisable">
          <div class="close" @click="hideSideNav"></div>
          <div class="list">
            <ul class="list hidden_list">
              <li>
                <router-link to="/" @click="hideSideNav">{{ $t('navs.home') }}</router-link>
              </li>
              <li>
                <router-link to="/about" @click="hideSideNav">
                  {{ $t('navs.aboutUs') }}</router-link
                >
              </li>
              <li>
                <router-link to="/services" @click="hideSideNav">{{
                  $t('navs.ourServices')
                }}</router-link>
              </li>

              <li>
                <router-link to="/courses" @click="hideSideNav">{{
                  $t('navs.ourProjects')
                }}</router-link>
              </li>

              <li>
                <router-link to="/contact-us" @click="hideSideNav">
                  {{ $t('navs.contactUs') }}</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </transition>

      <!-- shown navbar -->
      <v-container style="padding: 0; position: relative">
        <div class="contain">
          <div class="logo">
            <router-link
              to="/"
              style="
                display: flex;
                justify-content: center;
                align-items: center;
                justify-items: center;
              "
            >
              <img src="@/assets/Group 2222222 1.png" :alt="logo" />
              <img src="@/assets/Group 2222222 2.png" :alt="logo" />
            </router-link>
          </div>

          <nav>
            <ul class="list" style="margin-bottom: 0 !important">
              <li>
                <div
                  class="line"
                  style="
                    position: absolute;
                    top: 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                  "
                >
                  <div class="colored_line"></div>
                  <div class="colored_circle"></div>
                </div>
                <router-link to="/">{{ $t('navs.home') }}</router-link>
              </li>
              <li>
                <router-link to="/about"> {{ $t('navs.aboutUs') }}</router-link>
              </li>
              <li>
                <router-link to="/services">{{ $t('navs.ourServices') }}</router-link>
              </li>

              <li>
                <router-link to="/courses">{{ $t('navs.ourProjects') }}</router-link>
              </li>

              <li>
                <router-link to="/contact-us"> {{ $t('navs.contactUs') }}</router-link>
              </li>
            </ul>
          </nav>

          <LanguageSelect />
          <a class="bars" @click="showSideNav"
            ><img src="../assets/images/menu_FILL0_wght400_GRAD0_opsz48.png"
          /></a>
        </div>
      </v-container>
    </header>
  </div>
</template>

<script>
import LanguageSelect from '@/components/buttons/LanguageSelect.vue'

export default {
  props: ['notRegister'],
  components: { LanguageSelect },
  data() {
    return {
      sideNavIsVisable: false,
      searchIsVisable: false,
      checkClick: false,

      visibleRight: false
    }
  },
  computed: {
    position() {
      if (this.$i18n.locale == 'ar') {
        return 'left'
        // console.log('left');
      } else {
        return 'right'
        // console.log('right');
      }
    }
  },

  methods: {
    showSideNav() {
      this.sideNavIsVisable = true
    },
    hideSideNav() {
      this.sideNavIsVisable = false
    },
    showSearch() {
      this.searchIsVisable = true
    },
    hideSearch() {
      this.searchIsVisable = false
    }
  }
}
</script>
<style lang="scss" scoped>
header {
  position: relative;
  margin-bottom: 60px;
}
.display_none {
  display: none;
}
.contain {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0;
  height: 100px;
}
.logo {
  cursor: pointer;
}
.logo img {
  object-fit: cover;
  width: 66px;
}
router-link {
  text-transform: uppercase;
  transition: all 0.3s linear;
  cursor: pointer;
}

.list {
  a,
  .dropdown-toggle {
    position: relative;
    font-size: 19px;
    font-weight: 400;
    text-decoration: none;
    color: rgba(0, 0, 0, 1);

    &:hover {
      color: rgba(95, 198, 226, 1);
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -13px;
      left: 0%;
      display: block;
      height: 2px;
      width: 0%;
      background-color: none;
      border-radius: 8px;
      transition: all 0.4s ease-in-out;
      z-index: -20;
    }
    &:hover::before,
    &:active::before {
      transition: all 0.4s ease-in-out;
      background-color: #f08412;
      width: 100%;
    }
  }
  .router-link-active {
    color: rgba(95, 198, 226, 1) !important;
    &::before {
      left: 0;
      transition: all 0.4s ease-in-out;
      background-color: #f08412;
      width: 100%;
    }
  }
}
.list {
  display: flex;
  column-gap: 20px;
}

.list li {
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
}
.buttons {
  display: flex;
  align-items: center;
  column-gap: 15px;
  justify-items: center;
}
.search_icon {
  text-decoration: none;
  color: rgb(85, 85, 85);
}
.auth_button {
  text-decoration: none;
  position: relative;
  display: inline-block;
  width: 150px;
  text-align: center;
  margin-top: 30px;
  padding: 5px 20px;
  font-size: 20px;

  background-image: linear-gradient(90deg, transparent 50%, var(--main_theme_clr) 0);
  background-position: 100%;
  background-size: 400%;

  border-radius: 35px;
  transition: all 0.6s ease-in-out;
  margin: 0;
  font-size: 14px;

  width: max-content;
  color: #313131;
  background-image: linear-gradient(90deg, transparent 50%, #fbf9f4 0);
  border: 1px solid #fbf9f4;

  &:hover {
    background-position: 0;
    background-color: white;
  }
}

.search-form {
  position: relative;
  margin-right: 10px;
}

.headerSearch {
  transform: scaleX(1.03);
  height: 50px;
  transition: 0.3s all ease-in-out;
}

.bars {
  cursor: pointer;
  display: none;
}

.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #000000bf;
  z-index: 100;
  display: none;
}

.close {
  z-index: 1;
  position: relative;
  width: 22px;
  height: 28px;
  margin: 20px 20px 0 auto;
  text-align: right;
  font-style: initial;
  letter-spacing: initial;
  font-weight: initial;
  display: block;
  cursor: pointer;
  color: #fff;
}
.close::before {
  content: '\2715';
  font-size: 28px !important;
}
.close:hover {
  animation: closeAnimation ease-in-out 0.8s;
  color: var(--vt-c-volite);
  transition: 0.3s all ease-in-out;
}

.v-enter-from {
  transform: translatex(-50px);
}
.v-enter-active {
  transition: 0.3s ease-out;
}
.v-enter-to {
  transform: translatex(0);
}
.v-leave-from {
  transform: translatex(0);
}

.v-leave-active {
  transition: 0.3s ease-in;
}
.v-leave-to {
  transform: translatex(-50px);
}

@media (max-width: 1200px) {
  .overlay {
    display: block;
    backdrop-filter: blur(5px);
  }
  .buttons {
    display: none;
  }
  .contain {
    justify-content: flex-start !important;
    text-align: center;
  }
  .bars {
    display: block;
  }
  .list {
    text-align: center;
    margin: auto;
    margin-top: 1.5rem;
  }
  ul {
    list-style: none;
  }
  li {
    font-size: 1.3rem;
    padding: 15px 0;
    display: block;
    width: 100%;
  }
  a {
    text-decoration: none;
    color: white;
  }
  a:hover {
    cursor: pointer;
    color: #a1a1a1;
  }
  .contain nav .list {
    display: none;
  }
}
.buttons {
  button {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;

    line-height: 1.5;

    position: relative;
    display: inline-block;

    span {
      position: absolute;
      // bottom: -35px;
      left: 0;
      right: 0;

      width: max-content;
      padding: 0 8px;
      font-size: 14px;

      background-color: #f7f5ef;
      color: #313131;
      box-shadow: 0 0 10px 2px hsl(0deg 0% 88% / 30%);
      border-radius: 8px;
      z-index: 10;
      transition: all 0.3s ease-in-out;
      transform-origin: top;
      transform: scale(0);
      display: none;
    }
    &:hover > span {
      transform: scale(1);
      display: block;
      // opacity: 1;
      right: -9px;
      top: 40px;
      transition: all 0.3s ease-in-out;
    }
  }
}

@media (max-width: 760px) {
  .bars img {
    width: 35px;
    // margin-left: 25px;
    height: 45px;
  }
}
@media (max-width: 1200px) {
  a {
    margin-left: 0 !important;
  }
  nav {
    display: none;
  }
  .contain {
    display: flex;

    justify-content: center !important;
    align-items: center;
    justify-items: center;
    text-align: center;
    margin: 0 13px;
    .logo {
      margin: auto;
    }
    div {
      margin: auto;
    }
    .bars {
      margin: auto;
    }
  }
}

// search block

.search_content {
  position: absolute;
  inset: 0;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  // display: none;
  transition: 0.3s all ease-in-out;

  .justify_content {
    justify-content: center !important;

    width: 100% !important;
  }

  .close_btn {
    position: absolute;
    top: 35px;
    left: 40px;
    color: #fff;
    transition: all 0.4s ease-in-out;
    font-size: 20px;

    &:focus {
      .search_content {
        display: block;
      }
    }

    &:hover {
      transform: rotate(180deg);
      transform-origin: center;
      color: #fa4248;
    }
  }
  .package_form {
    width: 55%;
    .input_div {
      margin-block: 25px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 2px solid #f3f3f3;
      background-color: transparent;
      input {
        text-align: center;
        width: 90%;
        font-size: 30px;
        color: #fff;
        text-align: center;
        &::placeholder {
          text-align: center;
        }
      }
      button {
        font-size: 35px;

        padding: 0;
        margin: 0;
        color: #f3f3f3;
        font-size: 30px;
      }
    }
  }
}
li {
  font-size: 1.3rem;
  padding: 15px 5px;
  font-size: 15px;
}
.hidden_list {
  flex-direction: column;
  width: 100%;
}

nav {
  display: flex;
}

.dropdown-toggle {
  position: relative;

  &:hover {
    color: #313131;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -13px;
    left: 0%;
    display: block;
    height: 2px;
    width: 0%;
    background-color: none;
    border-radius: 8px;
    transition: all 0.4s ease-in-out;
    z-index: -20;
  }
  &:hover::after,
  &:active::after {
    transition: all 0.4s ease-in-out;
    background-color: #f08412;
    width: 100%;
  }
}

.dropdown_list {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  margin: 0 16px;

  ul {
    margin: 6px 0px !important;
    a {
      color: #000 !important;
    }
  }
  .dropdown-toggle {
    color: #b6b6b6;
  }
}
.colored_line {
  background: rgba(95, 198, 226, 1);
  border: 1px solid rgba(95, 198, 226, 1);
  height: 24px;
  width: 3px;
}
.colored_circle {
  background: rgba(95, 198, 226, 1);
  border: 2px solid rgba(95, 198, 226, 1);
  height: 7px;
  width: 7px;

  border-radius: 50% 50%;
}
</style>
