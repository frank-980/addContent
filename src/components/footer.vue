<template>
    <div>
       {{parm}}
       {{dataname}}
       <button @click="emitEventa">footer</button>
       <div class="slots">
            <slot name="slot1">no slot1</slot>
            <p>something</p>
            <slot name="slot2">no slot2</slot>
        </div>
    </div>
</template>
<script>
export default {
    props:["dataname"],
    data(){
        return {
            parm:" I am footer2"
        }
    },
    methods:{
        emitEventa(){
            this.$emit("eventa","i get it")
        }
    }
}
</script>
<style>
    .slots{
        border:2px solid black
    }
</style>