<template>
  <div>
    <date
      v-for="day in getDates"
      :key="day"
      :events="eventsPerDay"
      :day="day">
    </date>
  </div>
</template>

<script>
import events from '@/service/events'
import moment from 'moment'
import Date from '@/components/date'

export default {
  name: 'ListEvents',
  data () {
    return {
      eventsPerDay: []
    }
  },
  mounted () {
    events.getAll().then((response) => {
      let events = response
      let eventsPerDay = []
      events.forEach(event => {
        eventsPerDay.push({
          date: moment(event.date).format('dddd Do MMMM'),
          event
        })
      })
      this.eventsPerDay = eventsPerDay
    })
  },
  computed: {
    getDates () {
      return this.eventsPerDay.map(day => day.date)
        .sort()
        .filter((day, i, days) => {
          return !i || day !== days[i - 1]
        })
    }
  },
  components: {
    Date
  }
}
</script>

<style scoped>

</style>
