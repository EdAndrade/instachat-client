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

            </div>
            
        </div>
    </section>

</template>

<script lang="ts" src="./script.ts"></script>

<style lang="scss" src="./style.scss" scoped></style>