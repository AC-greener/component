<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
    <svg v-if="icon" class="icon">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
    <div class="content">
      <slot><slot>
    </div>
  </button>
</template>
 
<script>
  export default {
    props: {
      icon: {},
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
          console.log(value)
          if(value !== 'left' && value !== 'right') {
            return false
          } else {
            return true
          }
        }
      }
    }
  }
 </script>
 <style lang='scss'>
     .g-button {
      font-size: var(--font-size);
      height: var(--button-height);
      padding: 0 1em;
      border: 1px solid var(--border-color);
      border-radius: var(--border-radius);
      background: var(--button-bg);
      display: inline-flex;
      //内联元素不对齐解决方法
      vertical-align: middle;
      &:hover {
        border-color: var(--border-color-hover);
      }
      &:active {
        background: var(--button-active-bg)
      }
      &:focus {
        outline: none;
      }
      > .icon {
        order: 1;
        margin-right: .2em;
      }
      > .content {
        order: 2;
      }
      &.icon-right {
        > .icon {order: 2; margin-right: 0; margin-left: .2em} 
        > .content {order: 1;}
      }
    }
  
 </style>
 
 