<template>
  <div class="row">
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
    console.log("row created");
  },
  mounted() {
    console.log("row mounted");
    console.log(this.$children);
    //吧gutter传递给孩子
    this.$children.forEach(vm => {
      vm.gutter = this.gutter;
    });
  }
};
</script>

<style scope lang="scss">
.row {
  display: flex;
}
</style>
