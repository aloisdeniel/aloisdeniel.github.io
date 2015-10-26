<template>
<div class="contact section-dark">
  <section-header icon="comments" title="CONTACT"></section-header>

  <a v-repeat="item in items" href="{{item.link}}">
    <icon color="#fff" shape="{{item.icon}}" size="20"></icon>
  </a>
</div>
</template>

<script>
module.exports = {
  props: {
    items: {
      type: Array,
      default: function() { return []; }
    }
  }
};
</script>
