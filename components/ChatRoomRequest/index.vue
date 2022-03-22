<template>

    <section id="chatRoomRequestComponent" @click.self="$emit('closeChatRoomRequest')">

        <div class="closeButton" @click="$emit('closeChatRoomRequest')">
            <i class="fas fa-close"></i>
        </div>

        <div id="box">

            <div class="title">
                <p>Entrar em uma sala de chat</p>
            </div>
            
            <form @submit.prevent>

                <div class="input-validation">
                    <label>Nome</label>
                    <input placeholder="Meu nome" v-model="userName" type="text" :class="{ warnInputs: warnInputs }">
                </div>

                <div class="input-validation">
                    <label>Código do chat</label>
                    <input placeholder="Código do chat" v-model="chatCode" type="text" :class="{ warnInputs: warnInputs }">
                </div>

                <div class="button-loading">
                    <div class="loading-animation" v-if="gettingChatRoom"></div>
                    <button type="submit" v-else @click="validate()">
                        Entrar
                    </button>
                </div>
                
            </form>
        </div>
    </section>

</template>

<script lang="ts" src="./script.ts"></script>

<style lang="scss" src="./style.scss"></style>