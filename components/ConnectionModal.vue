<template>

    <section id="ConnectionModal">

        <div id="content">

            <div id="mainLayer">

                <div class="top">
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>

                <div class="bottom">
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>

                <div class="left">
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>

                <div class="right">
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>

            </div>

            <div id="secondLayer">

            </div>
        </div>

    </section>

</template>

<script>

    export default {

    }

</script>

<style lang="scss" scoped>

    #ConnectionModal{
        width: 100vw;
        height: 100vh;
        position: fixed;
        background-color: rgba($color-dark-1, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;

       #content{
           width: 100px;
           height: 100px;
           padding: 15px;
           background-color: $color-light-1;
           border-radius: 100%;

            #mainLayer{
                width: 100%;
                height: 100%;

                .top{
                    
                }
            }
       }
    }
</style>