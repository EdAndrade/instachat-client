<template>

    <div class="chatRoomBox">

        <div class="chatRoomBoxContent">

            <div class="title">
                <p>Create a new chat room</p>
            </div>

            <form @submit.prevent>

                <div class="input-validation">
                    <input placeholder="Nome do chat" type="text">

                    <div class="validations">

                        <div class="validation">

                            <div class="icon">

                            </div>

                            <p>Mais de 4 caracteres</p>
                        </div>

                        <div class="validation">

                            <div class="icon">

                            </div>

                            <p>Preenchido</p>
                        </div>
                    </div>
                </div>

                <div class="input-validation">
                    <input placeholder="Quantidade de usuários" type="text">
                    
                    <div class="validations">

                        <div class="validation">

                            <div class="icon">

                            </div>

                            <p>Apenas números</p>
                        </div>
                    </div>
                </div>

                <button type="submit">
                    Create
                </button>
                
            </form>
        </div>

    </div>

</template>

<script src="./script.ts"></script>
<style scoped lang="scss" src="./style.scss"></style>