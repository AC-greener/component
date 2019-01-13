<template>
  <div class="row" :style="{marginLeft: -gutter/2+'px', marginRight: -gutter/2+'px'}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GuLuRow",
  props: {
    gutter: {
      type: [String, Number]
    }
  },
  created() {
    console.log('gutter:', this.gutter)
  },
  mounted() {
    console.log(this.$children);
    //吧gutter传递给每个孩子
    this.$children.forEach(vm => {
      vm.gutter = this.gutter;
    });
  }
};

var div = document.createElement('div')   //created
var childDiv = document.createElement('div')  //child created
div.appendChild(childDiv)  //child mounted
document.body.appendChild(childDiv)  //mounted

</script>

<style scope lang="scss">
.row {
  display: flex;
  //默认为nowrap
  flex-wrap: nowrap;  
  // margin: 0 -10px;   //抵消col产生的padding
}
</style>
