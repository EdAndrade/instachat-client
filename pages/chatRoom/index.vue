<template>

    <section id="chatRoomMain">

        <div class="header">

        </div>

        <div class="chatSection">

        </div>

        <div class="textBox">
            <input type="text" v-model="userMessage">
            <button @click="sendMessage()">
                send
            </button>
        </div>
    </section>

</template>

<script lang="ts" src="./script.ts"></script>
<style lang="scss" src="./style.scss"></style>