<template>
<div class="section-light">
  <section-header icon="briefcase" :title="title"></section-header>
  <timeline :events='events'></timeline>
</div>
</template>

<script>
module.exports = {
  props: [ "title","events"]
};
</script>
