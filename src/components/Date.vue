<template>
  <div>
    {{day}}
    <event
      v-for="event in getEvents"
      :key="event.id"
      :event="event">
    </event>
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
</style>
