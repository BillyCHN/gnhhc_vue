<template>
    <div :class="['plan-item',plan.completed ? 'completed': '']">
        <input 
        class="toggle"
        type="checkbox"
        v-model="plan.completed"/>
        <label>{{plan.content}}</label>
        <button type= "button" class="destroy  close"
                @click="deletePlan"
        >
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        plan: Object,
        required: true,

    },
    methods:{
        deletePlan(){
            this.$emit('del',this.plan.id)
        }
    }
}
</script>

<style lang="stylus" scoped>

.plan-item{
    position relative;
    width 100%;
    font-size  24px;
    font-family  inherit;
    font-weight   inherit;
    line-height : 1.4em;
    border: 0;
    outline : none;
    color: inherit;
    padding : 6px;
    border: 1px solid #999;
    box-shadow: inset 0 -1px 5px #666
    box-sizing: border-box;
    font-smoothing: antialased;
    padding: 16px 16px 16px 60px;
    border: none;
 
   background-color: #FFFFFF
    
    }
</style>