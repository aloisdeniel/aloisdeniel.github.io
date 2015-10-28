<template>
<div class="section-accent">
  <section-header icon="idea" title="OPEN-SOURCE"></section-header>
  <div class="cards">
    <template v-repeat="item in projects">
      <card title="{{item.title}}" tags="{{item.tags}}" link="{{item.link}}" description="{{item.description}}"></card>
    </template>
  </div>
</template>

<script>
module.exports = {
  props: [ 'projects']
};
</script>
