<template>
  <i :class="['svg-icon', `svg-icon-${name}`]" :style="svgStyle">
    <svg fill="currentColor" aria-hidden="true" :width="width" :height="height">
      <use :xlink:href="iconName" />
    </svg>
  </i>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SvgIcon extends Vue {
  @Prop({ type: String, required: true })
  name!: string;

  @Prop(String)
  color!: string;

  @Prop([Number, String])
  size!: number | string;

  @Prop({ type: String, default: '1em' })
  width!: string;

  @Prop({ type: String, default: '1em' })
  height!: string;

  get iconName() {
    return `#icon-${this.name}`;
  }

  get svgStyle() {
    const { color, size } = this;
    const style = {} as CSSStyleDeclaration;
    color && (style.color = color);

    if (size) {
      if (typeof size === 'string') {
        size.includes('rem')
          ? (style.fontSize = size)
          : (style.fontSize = `${size}px`);
      } else {
        style.fontSize = `${size}px`;
      }
    }

    return style;
  }
}
</script>

<style scoped>
.svg-icon {
  vertical-align: -0.125em;
  line-height: 0;
  display: inline-block;
}
</style>
