<template>
  <div class="banner-wrapper" id="banner2nd" :style="bannerStyles" :class="`banner__${position}`">
    <slot></slot>
  </div>
</template>
<script>
const defaultStyles = {
  left: 0,
  right: 0,
};
export default {
  props: {
    position: {
      type: String,
      default: 'top',
      validator(position) {
        return ['top', 'bottom'].indexOf(position) > -1;
      },
    },
    styles: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      bannerStyles: {
        ...defaultStyles,
        ...this.styles,
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.banner-wrapper {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    color: orange;
    background-color: peachpuff;
    padding: 5px 10px;
    
}
.banner__top {
  top: 0;
}
.banner__bottom {
  bottom: 0;
}
</style>