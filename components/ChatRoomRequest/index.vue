<template>

    <section id="chatRoomRequestComponent" @click.self="$emit('closeChatRoomRequest')">

        <div class="closeButton" @click="$emit('closeChatRoomRequest')">
            <i class="fas fa-close"></i>
        </div>

        <div id="box">
            
            <form @submit.prevent>

                <div class="input-validation">
                    <input placeholder="Seu nome para o chat" v-model="userName" type="text" :class="{ warnInputs: warnInputs }">
                </div>

                <div class="input-validation">
                    <input placeholder="Código do chat" v-model="chatCode" type="text" :class="{ warnInputs: warnInputs }">
                </div>

                <button type="submit" @click="validate()">
                    Entrar
                </button>
                
            </form>
        </div>
    </section>

</template>

<script lang="ts" src="./script.ts"></script>

<style lang="scss" src="./style.scss"></style>