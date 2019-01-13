<template>
  <div
    class="col"
    :class="colClass"
    :style="colStyle"
  >
    <div style="border: 1px solid green; height: 100px;">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuLuCol",
  props: {
    span: {
      type: [String, Number]
    },
    offset: {
      type: [String, Number]
    }
  },
  data() {
    return {
      gutter: 0
    };
  },
  computed: {
    //data里面的属性只会在created的时候读一次 后面不会再读了
    //一个属性根据另外一个属性变的时候用computed
    colStyle() {
      return {
        paddingLeft: this.gutter/2+'px', 
        paddingRight: this.gutter/2+'px'
      }
    },
    colClass() {
      return 
        [this.span && `col-${this.span}`, this.offset && `offset-${this.offset}`]
      
    },
  }
};
</script>

<style lang="scss" scoped>
.col {
  height: 100px;
  // background: grey;
  width: 50%;
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>
