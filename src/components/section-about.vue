<template>
<div class="section-dark">
  <section-header icon="user-male" title="ABOUT ME"></section-header>
  <p v-repeat="info">{{$value}}</p>
</div>
</template>

<script>
module.exports = {
  props: ['info']
};
</script>
