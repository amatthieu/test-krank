<template>
  <div>
    <div class="date">
      {{day}}
    </div>
    <div class="list">
      <event
        v-for="event in getEvents"
        :key="event.id"
        :event="event">
      </event>
    </div>
  </div>
</template>

<script>
import Event from '@/components/Event'

export default {
  name: 'Date',
  props: [
    'day',
    'events'
  ],
  computed: {
    getEvents () {
      return this.events.filter((event) => {
        return event.date === this.day
      }).map(({event}) => {
        return event
      })
    }
  },
  components: {
    Event
  }
}
</script>

<style scoped>
.date {
  background-color: rgb(240, 240, 240);
  text-align: left;
  padding-left: 4vw;
  margin-bottom: 2vh;
  font-size: 4vw;
  color: rgb(90, 90, 90);
}
</style>
