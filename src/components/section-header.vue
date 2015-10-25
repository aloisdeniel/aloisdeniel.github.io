<template>
  <i class="icon icons8-{{icon}}"></i>
  <h1>{{title}}</h1>
</template>

<script>
module.exports = {
  props: ['icon', 'title']
};
</script>
