<template>
<div class="section">
  <section-header icon="airport" title="HOBBIES"></section-header>
  <div class="cards">
    <template v-repeat="item in items">
      <card title="{{item.title}}" subtitle="{{item.subtitle}}" description="{{item.description}}"></card>
    </template>
  </div>
</div>
</template>

<script>
module.exports = {
  props: [ 'items']
};
</script>
