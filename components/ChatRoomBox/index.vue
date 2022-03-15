<template>

    <div class="chatRoomBox">

        <div class="chatRoomBoxContent">

            <div class="title">
                <p>Create a new chat room</p>
            </div>

            <form @submit.prevent>

                <div class="input-validation">
                    <input placeholder="Nome do chat" v-model="chatName" type="text" :class="{ warnInputs: warnInputs }">

                    <div class="validations">

                        <div class="validation" :class="{ valid: chatNameValidation.fourChar }">

                            <div class="icon">
                                <i class="fas fa-check"></i>
                            </div>

                            <p>Mais de 4 caracteres</p>
                        </div>

                        <div class="validation" :class="{ valid: chatNameValidation.fullfiled }">

                            <div class="icon">
                                <i class="fas fa-check"></i>
                            </div>

                            <p>Preenchido</p>
                        </div>
                    </div>
                </div>

                <div class="input-validation">
                    <input placeholder="Quantidade de usuários" v-model.number="peopleQtd" type="number" :class="{ warnInputs: warnInputs }">
                    
                    <div class="validations">

                        <div class="validation" :class="{ valid: peopleQtdValidation.onlyNumbers }">

                            <div class="icon">
                                <i class="fas fa-check"></i>
                            </div>

                            <p>Apenas números</p>
                        </div>
                    </div>
                </div>

                <div class="button-loading">
                    <div class="loading-animation" v-if="creatingChat"></div>
                    <button type="submit" v-else @click="validate()">
                        Create
                    </button>
                </div>
    
            </form>
        </div>

    </div>

</template>

<script src="./script.ts" lang="ts"></script>
<style scoped lang="scss" src="./style.scss"></style>