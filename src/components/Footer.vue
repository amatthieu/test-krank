<template>
  <div class="footer">
    <div class="central-button">
      <icon name="plus"></icon>
    </div>
    <div class="menu">
      <div class="profile"
        :style="{color: profileColor}"
        @click="goProfile()">
        <icon
          name="user-circle-o"
          class="footer-icon">
        </icon>
        Profile
      </div>
      <div class="matches"
        :style="{color: matchesColor}"
        @click="goMatches()">
        <icon
          name="calendar"
          class="footer-icon">
        </icon>
        Matches
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-awesome/icons/plus'
import 'vue-awesome/icons/user-circle-o'
import 'vue-awesome/icons/calendar'

export default {
  name: 'Footer',
  computed: {
    profileColor () {
      if (this.$route.path === '/profile') {
        return 'rgb(20, 148, 205)'
      }
      return 'rgb(168, 168, 168)'
    },
    matchesColor () {
      if (this.$route.path === '/') {
        return 'rgb(20, 148, 205)'
      }
      return 'rgb(168, 168, 168)'
    }
  },
  methods: {
    goProfile () {
      this.$router.push('/profile')
    },
    goMatches () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: white;
}
.central-button {
  position: fixed;
  font-size: 7vw;
  width: 6vh;
  height: 6vh;
  margin-top: -2.5vh;
  left: calc(50% - 2.5vh);
  color: white;
  background-color: rgb(20, 148, 205);
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.menu {
  height: 9vh;
  display: flex;
  flex-flow: row;
  border-top: 0.2vh solid rgb(20, 148, 205);
}
svg {
  z-index: 1;
}

.profile {
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: center;
  font-size: 3.5vw;
}
.matches {
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: center;
  font-size: 3.5vw;
}
.footer-icon {
  font-size: 8vw;
}
</style>
