<template>

    <section id="chatRoomMain">

        <ConnectionModal v-if="connecting"/>
        <ChatOptions v-if="isChatOptionVisible" v-on:closeChatOptions="changeChatOptionVisibility"/>

        <section id="content">

            <div class="header">

                <div class="left">
                    <p class="chatRoomName">
                        Sala: {{ chatRoom.name }}
                    </p>

                    <p class="chatRoomUsersLimit">
                        Limite de usuários: {{ chatRoom.usersQt }}
                    </p>
                </div>
                
                <div class="right">
                    <p class="chatCode">
                        Código do chat: <span>{{ chatRoom.code }}</span>
                    </p>

                    <div class="copyToClipBoard" @click="changeChatOptionVisibility">
                        <i class="far fa-clipboard"></i>
                    </div>
                </div>
            </div>

            <div class="chatSection">

                <div class="messages">

                    <div 
                        class="message"
                        :class="{ 'flex-end': message.me }"
                        v-for="(message, index) in messages" :key="index"
                    >

                        <div :class="{ 'my-message': message.me, 'other-user-message': !message.me }">
                            <p class="theUser" v-if="message.user">{{ message.user }}</p>
                            <p>{{ message.data }}</p>
                            <i v-if="message.sendedMessage && message.me" class="fas fa-check"></i>
                            <i v-if="(message.sendedMessage == false) && message.me" class="far fa-clock"></i>
                        </div>

                    </div>
                </div>
            </div>

            <div class="textBox">
                <input @keyup.enter="sendMessage()" type="text" placeholder="Escreva a mensagem" v-model="userMessage">
                <button @click="sendMessage()">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>

            <div id="notification"></div>
        </section>
    </section>

</template>

<script lang="ts" src="./script.ts"></script>
<style lang="scss" src="./style.scss"></style>