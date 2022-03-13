<template>

    <section id="chatRoomRequestComponent" @click.self="$emit('closeChatRoomRequest')">

        <div class="closeButton" @click="$emit('closeChatRoomRequest')">
            <i class="fas fa-close"></i>
        </div>

        <div id="box">
            
            <form @submit.prevent>

                <div class="input-validation">
                    <input placeholder="Seu nome para o chat" type="text">
                </div>

                <div class="input-validation">
                    <input placeholder="Código do chat" type="text">
                </div>

                <button type="submit">
                    Entrar
                </button>
                
            </form>
        </div>
    </section>

</template>

<script lang="ts" src="./script.ts"></script>

<style lang="scss" src="./style.scss"></style>