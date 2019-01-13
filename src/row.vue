<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GuLuRow",
  props: {
    gutter: {
      type: [String, Number]
    },
    align: {
      type: String,
      validator(value) {
        return ['left', 'center', 'right'].includes(value)
      }
    }
  },
  computed: {
    rowStyle() {
      return {
        marginLeft: -this.gutter / 2 + "px",
        marginRight: -this.gutter / 2 + "px"
      };
    },
    rowClass() {
      return [this.align && `align-${this.align}`]
    }
  },
  created() {
    console.log("gutter:", this.gutter);
  },
  mounted() {
    console.log(this.$children);
    //吧gutter传递给每个孩子
    this.$children.forEach(vm => {
      vm.gutter = this.gutter;
    });
  }
};

var div = document.createElement("div"); //created
var childDiv = document.createElement("div"); //child created
div.appendChild(childDiv); //child mounted
document.body.appendChild(childDiv); //mounted
</script>

<style scope lang="scss">
.row {
  display: flex;
  //默认为nowrap
  flex-wrap: nowrap;
  // margin: 0 -10px;   //抵消col产生的padding
    &.align-left {
      justify-content: flex-start;
    }
    &.align-right {
      justify-content: flex-end;
    }
    &.align-center {
      justify-content: center;
    }
}
</style>
