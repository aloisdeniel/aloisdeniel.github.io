<style lang="sass?outputStyle=expanded">

</style>

<template>
<div class="section-accent">
  <section-header icon="trophy" title="SKILLS"></section-header>

  <template v-repeat="skill in major">
    <bubble size="large" name="{{skill.name}}" description="{{skill.type}}"></bubble>
  </template>
  <template v-repeat="skill in medium">
    <bubble size="medium" name="{{skill.name}}" description="{{skill.type}}"></bubble>
  </template>
  <template v-repeat="skill in minor">
    <bubble size="small" name="{{skill.name}}" description="{{skill.type}}"></bubble>
  </template>
</div>
</template>

<script>
module.exports = {
  props: {
    major: {
      type: Array,
      default: () => []
    },
    medium: {
      type: Array,
      default: () => []
    },
    minor: {
      type: Array,
      default: () => []
    }
  }
};
</script>
