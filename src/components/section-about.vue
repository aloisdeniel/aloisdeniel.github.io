<template>
<div class="section-dark">
  <section-header icon="user-male" :title="title"></section-header>
  <p v-for="line in info">{{line}}</p>
</div>
</template>

<script>
module.exports = {
  props: ['title','info']
};
</script>
