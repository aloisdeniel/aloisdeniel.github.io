<template>
<div class="section">
  <section-header icon="airport" :title="title"></section-header>
  <div class="cards">
    <template v-for="item in items">
      <card :title="item.title" :tags="item.tags" :link="item.link" :description="item.description"></card>
    </template>
  </div>
</div>
</template>

<script>
module.exports = {
  props: [ 'title', 'items']
};
</script>
