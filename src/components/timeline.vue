<template>
<ul class="timeline">
	<li v-for="event in events">
		<div class="time wow fadeInLeft">
      <span>{{ event.date }} - {{ event.duration }}</span>
      <span>{{ event.name }}</span>
    </div>
		<div class="icon wow zoomIn"></div>
		<div class="label wow fadeInRight">
			<h2>{{ event.title }}</h2>
  		<h3>{{ event.subtitle }}</h3>
			<p>{{ event.description }}</p>
		</div>
	</li>
</ul>
</template>

<script>
module.exports = {
  props: [ "events"]
};
</script>
