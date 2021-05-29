<template>
    <div id="sidebar" class="sidebar">
        <transition name="slide">
            <div v-if="isPanelOpen" class="sidebar-panel">
                <Burger id="sdbt"></Burger>
                <div id="sdmenu">
                    <ul id="sdnavbar">
                        <a href="#/hub" v-smooth-scroll><li><b @click="toggle">Hub</b></li></a>
                        <a href="#/meusprodutos" v-smooth-scroll><li><b @click="toggle">Meus Produtos</b></li></a>
                    </ul>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import Burger from './Burger.vue'
    export default {
        components: {
            Burger,
        },
        computed: {
            isPanelOpen: function (){
                return this.$store.state.isPanelOpen
            }
        },
        methods: {
            toggle() {
                this.$store.dispatch('swipeMenu')
            }
        },
    }
</script>

<style scoped>
    @media (min-width: 960px) {
        #sidebar{
            display: none;
        }
    }
    #sidebar{
        font-weight: 500;
    }
    #sdnavbar{
        list-style-type: none;
        text-align: left;
        font-size: 23px;
        /* color: white; */
        width: max-content;
        color: black;
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
    }
    #sdnavbar a:link, :active, :hover, :visited{
        text-decoration: none;
        color: black;
    }
    #sdnavbar li{
        padding-bottom: 10px;
        width: max-content;
    }
    #sdnavbar li :hover{
        border-bottom: 4px solid  #9ecdfa;
        
    }
    #sdcompra{
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
        text-align: center;
        font-size: 1rem;
        color: black;
        margin: 0px 0px 0px 40px;
        border: none;
        display: flex;
        align-items: center;
        padding: 0px 23px 0px 52px;
        border-radius: 30px;
        width: 150px;
        height: 50px;
        cursor: pointer;
        background-color:#9ad9f2;
        box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.3);
        transition: color 0s;
    }
    #sdcompra b{
        width: max-content;
    }
    #sdcompra a:link, :active, :hover, :visited{
        color: #9ad9f2;
    }
    #sdcompra:hover{
        box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.3);
    }
    #sdmenu{
        display: flex;
        width: 100%;
        flex-direction: column;
        position: absolute;
        top: 150px;
    }
    #sdmenu a{
        text-decoration: none;
        width: max-content;
    }
    .slide-enter-active,
    .slide-leave-active
    {
        transition: transform 0.2s ease;
    }
    .slide-enter,
    .slide-leave-to {
        transform: translateX(-100%);
        transition: all 150ms ease-in 0s
    }
    .sidebar-panel {
        overflow-y: auto;
        background-color:rgb(156, 33, 156);
        position: fixed;
        box-sizing: border-box;
        left: 0;
        top: 0;
        height: 100vh;
        z-index: 10;
        width: 100%;
    }
    #sdbt{
        margin-top: 30px;
    }
    @media (orientation: landscape){
        #sdmenu{
            top: 80px;
        }
        #sdnavbar{
            font-size: 1.7rem;
        }
    }
</style>