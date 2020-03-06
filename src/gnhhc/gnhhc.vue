<template>
    <section class="real-app">
        <input type="text" 
            class="add-input" 
            autofocus="autofocus" 
            placeholder="dosomething" 
            @keyup.enter="addTodo" />

            <item :plan="plan"
                v-for="plan in filteredPlan"
                :key="plan.id"

                @del="deletePlan"
            ></item>
            <Plans :filter="filter"
                    :plans="plans"
                    @toggle="toggleFilter"
                    @clearAllCompleted="clearAllCompleted"
            ></Plans>
    </section>
    

</template>

<script>
import Item from './item.vue'
import Plans from './plans.vue'
let id=0
export default {
    data(){
        //数据声明
        return{
            plans:[],
            filter: 'all'
        }
    }
    ,computed: {
        filteredPlan(){
            if(this.filter === 'all'){
                return this.plans
            }
            const completed = this.filter ==='completed'
            return this.plans.filter(plan=>completed === plan.completed)
        }
    },
    methods: {
        addTodo(e){
            if(e.target.value!=""){
                this.plans.unshift({
                id: id++,
                content: e.target.value.trim(),
                completed: false
            
            })
            e.target.value=''
            }
            
        },
        deletePlan(id){
           // console.log(this.plans.findIndex(plan=>plan.id===id))
            this.plans.splice(this.plans.findIndex(plan=>plan.id===id),1)
        },
        toggleFilter(state){
            this.filter=state;
        },clearAllCompleted(){
            this.plans  = this.plans.filter(plan => !plan.completed)
        }

    },
    components: {
        Item,
        Plans,
    }
}
</script>
<style lang="stylus"scoped>
.real-app{
    width 600px
    margin 0 auto
    box-shadow 0 0 5px #666
}
.add-input{
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
    box-shadow: inset 0 -1px 5px rgba(0,0,0,0)
    box-sizing: border-box;
    font-smoothing: antialased;
    padding: 16px 16px 16px 60px;
    border: none;
    box-shadow: inset 0 -2px 1px rgba(0,0,0,0)
    }

</style>