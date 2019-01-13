<template>
  <div class="col" :class="colClass" :style="colStyle">
    <div style="border: 1px solid green; height: 100px;">
      <slot></slot>
    </div>
  </div>
</template>

<script>
let validator = (value) => {
  let keys = Object.keys(value);
  let valid = true;
  //判断传递的数据是否合法
  keys.forEach(item => {
    if (!["span", "offset"].includes(item)) {
      valid = false;
    }
  });
  return valid;
};
export default {
  name: "GuLuCol",
  props: {
    span: {
      type: [String, Number]
    },
    offset: {
      type: [String, Number]
    },
    ipad: {
      type: Object,
      validator,
    },
    pc: {
      type: Object,
      validator,
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
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px"
      };
    },
    colClass() {
      let { span, offset, ipad, pc } = this;
      console.log(ipad)
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        ...(ipad ? [`col-ipad-${ipad.span}`] : []),
        ...(pc ? [`col-pc-${pc.span}`] : [])
      ]
    }
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
  @media (min-width: 577px) {
    $class-prefix: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
 
  
  @media (min-width: 993px) {
    $class-prefix: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
}
</style>
