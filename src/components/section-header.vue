<template>
  <i class="icon icons8-{{icon}} wow fadeIn"></i>
  <h1 class="wow fadeIn">{{title}}</h1>
</template>

<script>
module.exports = {
  props: ['icon', 'title']
};
</script>
