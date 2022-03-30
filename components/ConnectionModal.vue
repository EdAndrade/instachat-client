<template>

    <section id="ConnectionModal">

        <div id="content">

            <div id="mainLayer">
            </div>

            <div id="secondLayer">
            </div>

        </div>

        <p>Conectando</p>

    </section>

</template>

<script lang="ts">

    import Vue from 'vue'

    export default Vue.extend({

        data(){

            return {
                
            }
        }
    })

</script>

<style lang="scss" scoped>

    #ConnectionModal{
        width: 100vw;
        height: 100vh;
        position: fixed;
        background-color: rgba($color-dark-1, 0.8);
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        z-index: 9999999999 !important;

       #content{
            width: 70px;
            height: 70px;
            padding: 10px;
            background-color: $color-light-2;
            border-radius: 100%;
            position: relative;

            #mainLayer, #secondLayer{
                width: calc(100% - 20px);
                height: calc(100% - 20px);
                border-radius: 100%;
                border: dashed 8px $color-main-2;
                position: absolute;
            }

            #secondLayer{
                animation: loading infinite 2s linear;
            }
        }

        p{
            margin-top: 10px;
            font-weight: bold;
            color: $color-light-4;
            font-size: 0.8em;
        }
    }
</style>