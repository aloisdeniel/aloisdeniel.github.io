<template>
<ul class="timeline">
	<li v-repeat="events">
		<div class="time wow fadeInLeft">
      <span>{{ date }} - {{ duration }}</span>
      <span>{{ name }}</span>
    </div>
		<div class="icon wow zoomIn"></div>
		<div class="label wow fadeInRight">
			<h2>{{ title }}</h2>
  		<h3>{{ subtitle }}</h3>
			<p>{{ description }}</p>
		</div>
	</li>
</ul>
</template>

<script>
module.exports = {
  props: [ "events"]
};
</script>
