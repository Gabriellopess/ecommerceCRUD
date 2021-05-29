<template>
    <div id="burger" @click.prevent="toggle">
        <slot>
            <button type="button" class="burger-button">
                <span :class="{'burger-bar' : true, 'b' : isPanelOpen, 'w' : !isPanelOpen}"></span>
                <span :class="{'burger-bar' : true, 'b' : isPanelOpen, 'w' : !isPanelOpen}"></span>
                <span :class="{'burger-bar' : true, 'b' : isPanelOpen, 'w' : !isPanelOpen}"></span>
            </button>
        </slot>
    </div>
</template>

<script>
export default {
    computed: {
        isPanelOpen : function () {
            return !this.$store.state.isPanelOpen
        }
    },
    methods: {
        toggle() {
            this.$store.dispatch('swipeMenu')
        }
    }
}
</script>

<style scoped>
    #burger{
        width: fit-content;
    }
    .hidden {
        visibility: hidden;
    }
    .burger-button {
        cursor: pointer;
        height: 25px;
        width: 45px;
        z-index: 1;
        border: 0;
        margin-left: 20px;
        border-radius: 0;
        background-color: transparent;
        pointer-events: all;
        display: grid;
        align-items: center;
    }
    .burger-bar {
        height: 5px;
        width: auto;
        margin: 0;
        padding: 0;
        z-index: 20;
    }
    .b{
        background-color: black;
    }
    .w{
        background-color:black;
    }
</style>