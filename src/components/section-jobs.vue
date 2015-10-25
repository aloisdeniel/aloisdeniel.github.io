<template>
<div class="section">
  <section-header icon="briefcase" title="JOBS"></section-header>
  <timeline events='{{events}}'></timeline>
</div>
</template>

<script>
module.exports = {
  props: [ "events"]
};
</script>
