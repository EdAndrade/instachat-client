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

                <div class="chatCodeLink" v-if="isClipboardAvaible">
                    <p class="linkIndication">Clique na secção abaixo para copiar o link do chat</p>
                    <div class="link" @click="copyChatLinkToClipboard()">
                        <input v-model="chatLink" disabled type="text" id="chatLink">
                        <i class="fas fa-clipboard-check"></i>
                    </div>

                    <div class="copiedStatus" v-show="copiedStatus">
                        <div class="square"></div>
                        <p>Copiado</p>
                    </div>

                </div>

                <button class="sendByMessage" v-show="agentIsMobile" @click="openSMSApp()">
                    Enviar link do chat por mensagem
                </button>

                <button class="exit" @click="$router.push('/')">
                    Sair da sala
                </button>
            </div>
            
        </div>
    </section>

</template>

<script lang="ts" src="./script.ts"></script>

<style lang="scss" src="./style.scss" scoped></style>