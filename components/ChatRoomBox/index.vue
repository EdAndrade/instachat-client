<template>

    <div class="chatRoomBox">

        <div class="chatRoomBoxContent">

            <div class="title">
                <p>Create a new chat room</p>
            </div>

            <form @submit.prevent>

                <div class="input-validation">
                    <input type="text">

                    <div class="validations">
                        
                    </div>
                </div>

                <div class="input-validation">
                    <input type="text">
                    
                    <div class="validations">

                    </div>
                </div>

                <button type="submit">
                    Create
                </button>
                
            </form>
        </div>

    </div>

</template>

<script src="./script.ts"></script>
<style scoped lang="scss" src="./style.scss"></style>