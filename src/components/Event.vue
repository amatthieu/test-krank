<template>
  <div class="event">
    <div class="left-panel" :style="{'background-color':color}">
      <div class="hour vertical-center">
        {{event.date | hour}}
      </div>
      <div class="date vertical-center">
        {{event.date | day}}
      </div>
      <div class="favorite vertical-center">
        <icon
          name="star"
          v-if="event.isFavorite">
        </icon>
        <icon
          name="star-o"
          v-else>
        </icon>
      </div>
    </div>
    <div class="right-panel">
      <div class="title" :style="{'color':color}">
        {{event.sport}} - {{event.location}}
      </div>
      <div class="tags">
        <span v-for="(tag, index) in event.tags" :key="index">
          #{{tag}}
        </span>
      </div>
      <div class="event-detail">
        <div class="infos">
          <span class="info">
            {{event.creator.name}}
          </span>
          <span v-if="event.isFull" class="info">
            FULL
          </span>
          <span v-else class="info">
            {{event.price}}€ - {{event.duration | duration}}
          </span>
        </div>
        <div class="profile-pic">
          <img :src="event.creator.profilePic"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

import 'vue-awesome/icons/star'
import 'vue-awesome/icons/star-o'

export default {
  name: 'Event',
  props: [
    'event'
  ],
  computed: {
    color () {
      switch (this.event.sport) {
        case 'Football':
          return 'rgb(55, 183, 106)'
        case 'Running':
          return 'rgb(102, 102, 102)'
        case 'Basket':
          return 'rgb(255, 92, 92)'
        case 'Tennis':
          return 'rgb(255, 188, 73)'
      }
    }
  },
  filters: {
    hour (date) {
      if (moment(date).format('mm') === '00') {
        return moment(date).format('h a')
      }
      return moment(date).format('h.mm a')
    },
    day (date) {
      return moment(date).format('ddd.DD')
    },
    duration (date) {
      let duration = ''
      duration += moment.duration(date, 'h').hours() + 'h'
      if (moment.duration(date, 'h').minutes() !== 0) {
        duration += moment.duration(date, 'h').minutes()
      }
      return duration
    }
  }
}
</script>

<style scoped>
/* Je me base sur des valeurs vh et vw selon la dimension,
mais il faudrait des médias querries pour des écrans plus large que haut */
.event {
  display: flex;
  flex-flow: row;
  align-items: center;
  border-radius: 2vh;
  background-color: rgb(240, 240, 240);
  height: 18vh;
  margin: 0 2vw 2vh 2vw
}

.left-panel {
  flex: 1;
  display: flex;
  flex-flow: column;
  height: 100%;
  border-radius: 2vh;
  color: white;
  font-weight: bold;
}
.hour {
  flex: 1;
  font-size: 6vw;
  margin-top: 2vh;
}
.date {
  flex: 1;
  font-size: 4vw;
}
.favorite {
  flex: 1;
  font-size: 7vw;
  color: rgb(255, 218, 68);
  margin-bottom: 2vh;
}

.right-panel {
  flex: 3;
  margin: 2vh 0 2vh 3vw;
  text-align: left;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
}
.title {
  flex: 1;
  font-size: 6vw;
  font-weight: bold;
  color: rgb(55, 183, 106);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 68vw;
}
.tags {
  flex: 1;
  font-size: 4vw;
  color: rgb(171, 171, 171);
}
.event-detail {
  flex: 2;
  display: flex;
  flex-flow: row;
}
.infos {
  flex: 4;
  display: flex;
  flex-flow: column;
  font-size: 4vw;
}
.info {
  flex: 1;
}
.profile-pic {
  flex: 1;
  margin-right: 8vw;
}
img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 100vw;
}

.vertical-center {
  display: flex;
  justify-content: center;
  flex-flow: column;
}
</style>
