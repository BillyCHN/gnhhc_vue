<template>
    <div class="helper">
       
            <span class="left"> 
                
               {{unFinishPlanLength}} plans left
            </span>

            <span class="plans ">
                <button  type ='button' class="btn btn-light"
                    v-for="state in states"
                  
                    :key="state"
                    :class="[state,filter === state? 'actived' : '']"
                    @click="toggleFilter(state)"
                    
                    >

                    {{state}}
                </button>
                  <!-- 传参数 :key="state"
                        绑定事件：@click="toggleFilter":表示click动作绑定了toggleFilter事件-->
            </span>

            <span class="clear" 
            @click="clearAllCompleted"
            
            >Clear Completed</span>

    </div>
</template>

<script>
export default {
    props: {
        //这里其实相当于传入的参数的定义
        filter: {
            type: String,
            required: true,
        },
         plans: {
        type: Array,
        required: true
    }
            
    },
   
    data(){
        return{
            states: ['all', 'active', 'completed']
        }
    },computed: {
        //自动计算数组长度
        unFinishPlanLength(){
            return this.plans.filter(plan => !plan.completed).length
        }
    },
    methods: {
        toggleFilter(state){
            this.$emit('toggle',state)
        },
        clearAllCompleted(){
            this.$emit('clearAllCompleted')
        }
    }
}
</script>
<style lang="stylus" scoped>

.helper{
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