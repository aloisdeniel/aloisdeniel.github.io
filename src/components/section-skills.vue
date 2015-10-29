<template>
<div class="section-accent">
  <section-header icon="trophy" title="SKILLS"></section-header>

  <template v-for="skill in major">
    <bubble size="large" :name="skill.name" :description="skill.type"></bubble>
  </template>
  <template v-for="skill in medium">
    <bubble size="medium" :name="skill.name" :description="skill.type"></bubble>
  </template>
  <template v-for="skill in minor">
    <bubble size="small" :name="skill.name" :description="skill.type"></bubble>
  </template>
</div>
</template>

<script>
module.exports = {
  props: {
    major: {
      type: Array,
      default: function() { return []; }
    },
    medium: {
      type: Array,
      default: function() { return []; }
    },
    minor: {
      type: Array,
      default: function() { return []; }
    }
  }
};
</script>
