<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <g-icon class='icon' v-if="icon && !loading" :name='icon'></g-icon> 
    <g-icon class='loading icon' v-if="loading"  name='spin'></g-icon>
    <div class="content">
      <slot/>
    </div>
  </button>
</template>
 
<script>
  import Icon from './icon'
  export default {
    components: {
      'g-icon': Icon
    },
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false,
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
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
  @keyframes spin {
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
  }
     .g-button {
      font-size: var(--font-size);
      height: var(--button-height);
      padding: 0 1em;
      border: 1px solid var(--border-color);
      border-radius: var(--border-radius);
      background: var(--button-bg);
      display: inline-flex;
      justify-content: center;
      align-items: center;
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
      .loading {
        animation: spin 2s infinite linear;
      }
    }
  
 </style>
 
 