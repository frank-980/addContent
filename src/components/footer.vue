<template>
    <div>
       {{parm}}
       {{dataname}}
       <button @click="emitEventa">footer</button>
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