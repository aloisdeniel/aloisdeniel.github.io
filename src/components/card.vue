<template>
<div class="card wow flipInX">
  <h2>{{title}}</h2>
  <h4>{{description}}</h4>
</div>
</template>

<script>
module.exports = {
  props: ['title', 'description']
};
</script>
