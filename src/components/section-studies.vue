<template>
<div class="section-light">
  <section-header icon="diploma-1" title="STUDIES"></section-header>
  <timeline events='{{events}}'></timeline>

</div>
</template>

<script>
module.exports = {
  props: [ "events"]
};
</script>
