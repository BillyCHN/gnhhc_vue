<template>
<div id="app">
    <div id="cover">

    </div>

    <Header></Header>
    <Gnhhc></Gnhhc>
    <Footer></Footer>
</div>
    
</template>

<script> 
import Header from './gnhhc/header.vue'
import Footer from './gnhhc/footer.jsx'
import Gnhhc from './gnhhc/gnhhc.vue'

export default {
    components: {
        Header,
        Footer,
        Gnhhc
    }
}
</script>

<style lang ='stylus' scoped>

#app{
    position absolute
    left 0 
    right 0
    top 0
    bottom 0

}

#cover{
    position absolute
    left 0 
    right 0
    top 0
    bottom 0
    background-color #999
    opacity  0.9
    z-index -1
}
</style>