<template>

    <section id="chatRoomMain">

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

                <div class="copyToClipBoard">

                </div>
            </div>
        </div>

        <div class="chatSection">

        </div>

        <div class="textBox">
            <input type="text" v-model="userMessage">
            <button @click="sendMessage()">
                <i class="fas fa-paper-plane"></i>
            </button>
        </div>
    </section>

</template>

<script lang="ts" src="./script.ts"></script>
<style lang="scss" src="./style.scss"></style>