<template>
  <div class="banner" id="mainApp" :style="bannerStyles" :class="`banner__${position}`">
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
    scope: {
        type: Object
    }
  },
  mounted () {
      console.log('Inner scope ', this.scope);
  },
  data() {
    return {
      bannerStyles: {
        ...defaultStyles,
        ...this.styles,
      },
      testParams: ''
    };
  },
  watch: {
    testParams(newValue, oldValue) {
      if (newValue !== oldValue) {
        console.log('Watch change ', newValue);
      }
    }
  },
  computed: {
    changedParam() {
      return 2
    }
  },
  methods: {
    test() {
      console.log('Method called successfully')
      if (this.changedParam === 2) {
        this.testParams = '2'
      }
      this.$root.$emit('closeTest')
    }
  },
};
</script>
<style lang="scss" scoped>
.banner {
  padding: 12px;
  background-color: #fcf6cd;
  color: #f6a623;
  text-align: left;
  position: fixed;
  z-index: 2;
}
.banner__top {
  top: 0;
}
.banner__bottom {
  bottom: 0;
}
</style>
