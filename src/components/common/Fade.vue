<template>
    <transition>
        <slot></slot>
    </transition>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>
<style lang="scss" scoped>
.v-enter, .v-leave-to{
    opacity: 0;
}
.v-enter-active, .v-leave-active{
    transition: opacity .5s;
}
</style>
