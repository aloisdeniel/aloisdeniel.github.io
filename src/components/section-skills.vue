<template>
<div class="section-accent">
  <section-header icon="trophy" :title="title"></section-header>

  <div class="cards">
    <template v-for="skill in items">
      <card :small="skill.minor" :title="skill.title" :tags="skill.tags" :link="skill.link" :description="skill.description"></card>
    </template>
  </div>
</div>
</template>

<script>
module.exports = {
  props: [ 'title', "items"]
};
</script>
