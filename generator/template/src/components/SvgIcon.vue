<template>
  <i :class="['svg-icon', `svg-icon-${name}`, className]" :style="svgStyle">
    <svg fill="currentColor" aria-hidden="true" width="1em" height="1em">
      <use :xlink:href="iconName" />
    </svg>
  </i>
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    name: {
      type: String,
      required: true
    },
    className: {
      type: String
    },
    color: {
      type: String
    },
    size: {
      type: Number
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.name}`;
    },
    svgClass() {
      if (this.className) {
        return `${this.className}`;
      }
      return "";
    },
    svgStyle() {
      const { color, size } = this;
      const style = {};
      color && (style.color = color);
      size && (style.fontSize = `${size}px`);
      return style;
    }
  }
};
</script>

<style scoped>
.svg-icon {
  vertical-align: -0.125em;
  line-height: 0;
  display: inline-block;
}
</style>
