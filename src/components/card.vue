<template>
<div class="card wow flipInX">
  <h2>{{title}}</h2>
  <h4>{{subtitle}}</h4>
  <p>{{description}}</p>
</div>
</template>

<script>
module.exports = {
  props: ['title', 'subtitle', 'description']
};
</script>
