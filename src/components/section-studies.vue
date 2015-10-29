<template>
<div class="section">
  <section-header icon="diploma-1" :title="title"></section-header>
  <timeline :events='events'></timeline>

</div>
</template>

<script>
module.exports = {
  props: [ 'title', "events"]
};
</script>
