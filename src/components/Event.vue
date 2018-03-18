<template>
  <div>
    {{event.date}}<br/>
    {{event.sport}}
  </div>
</template>

<script>
export default {
  name: 'Event',
  props: [
    'event'
  ]
}
</script>

<style scoped>
</style>
