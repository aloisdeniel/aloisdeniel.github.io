<template>
<div class="card wow flipInX">
  <h2>{{title}}</h2>
  <div class="tags"><span class="tag" v-for="tag in tags">{{tag}}</span></div>
  <p>{{description}}</p>
  <a v-if="link" :href="link">More details</a>
</div>
</template>

<script>
module.exports = {
  props: ['title', 'tags', 'link', 'description']
};
</script>
