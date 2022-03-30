<template>

    <section id="ChatOptions" @click.self="$emit('closeChatOptions')">

        <div class="closeButton" @click="$emit('closeChatOptions')">
            <i class="fas fa-close"></i>
        </div>

        <div id="box">

            <div class="title">
                <p>Opções</p>
            </div>
            
            <div class="optionsContent">

                <div class="chatCodeLink">
                    <p class="linkIndication">Clique para copiar o link do chat</p>
                    <div class="link">
                        <input v-model="chatLink" type="text">
                        <i class="fas fa-clipboard-check"></i>
                    </div>
                </div>

                <button class="sendByMessage">
                    Enviar link do chat por mensagem
                </button>

                <button class="exit">
                    Sair da sala
                </button>
            </div>
            
        </div>
    </section>

</template>

<script lang="ts" src="./script.ts"></script>

<style lang="scss" src="./style.scss" scoped></style>