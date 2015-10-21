<template>
<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style="width:{{size}}px;height:{{size}}px;" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path class="contact-icon" d="{{shape | shape}}" fill="{{color}}" fill-rule="nonzero"/></svg>
</template>

<script>
module.exports = {
  props: [ 'size', 'color', 'shape']
};
</script>
