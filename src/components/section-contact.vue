<style lang="sass?outputStyle=expanded">



</style>

<template>
<div class="contact section-dark">
  <section-header icon="comments" title="CONTACT"></section-header>

  <a v-repeat="item in items" href="{{item.link}}">{{item.title}}</a>
</div>
</template>

<script>
module.exports = {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }

};
</script>
