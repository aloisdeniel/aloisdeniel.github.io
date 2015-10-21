<template>
<div class="bubble-{{size}}">
  <h2>{{name}}</h2>
  <h4>{{description}}</h4>
</div>
</template>

<script>
module.exports = {
  props: ['name', 'description', 'size']
};
</script>
