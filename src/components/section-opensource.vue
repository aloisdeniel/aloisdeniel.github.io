<template>
<div class="section-accent">
  <section-header icon="idea" :title="title"></section-header>
  <div class="cards">
    <template v-for="item in projects">
      <card :title="item.title" :tags="item.tags" :link="item.link" :description="item.description"></card>
    </template>
  </div>
  <a :href="more">See all my projects on GitHub</a>
</template>

<script>
module.exports = {
  props: [ 'more', 'title', 'projects']
};
</script>
