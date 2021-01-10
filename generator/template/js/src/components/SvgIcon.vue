<template>
  <i :class="['svg-icon', `svg-icon-${name}`]" :style="svgStyle">
    <svg fill="currentColor" aria-hidden="true" :width="width" :height="height">
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
    color: {
      type: String
    },
    size: {
      type: [Number, String]
    },
    width: {
      type: String,
      default: "1em"
    },
    height: {
      type: String,
      default: "1em"
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.name}`;
    },
    svgStyle() {
      const { color, size } = this;
      const style = {};
      color && (style.color = color);

      if (size) {
        if (typeof size === "string") {
          size.includes("rem")
            ? (style.fontSize = size)
            : (style.fontSize = `${size}px`);
        } else {
          style.fontSize = `${size}px`;
        }
      }

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
