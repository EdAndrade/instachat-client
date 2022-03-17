<template>

	<section id="indexSection">
		<ChatRoomRequest 
			v-if="isChatRoomRequestVisible"
			v-on:closeChatRoomRequest="changeChatRoomRequestVisibility()"
		/>

		<div id="top">

			<div id="introduction">

				<div class="title">
					<p>Salas de chat fáceis e rápidas</p>
				</div>

				<div class="desc">
					<p>Cria salas de chat de maneira simples e rápida para interagir com quem você quiser, de maneira segura
						e secreta sem ninguém necessariamente saber
					</p>
				</div>
			</div>

			<div id="enterAToChatRoom">
				<button @click="changeChatRoomRequestVisibility()">Entrar em uma sala</button>
			</div>
		</div>

		<ChatRoomBox/>

		<div class="bottomImage">
			<img src="~assets/images/wave.png" alt="">
		</div>

		<div class="slogan">
			<a target="_blank" href="https://edmilson.ao">Criado por Edmilson Andrade</a>
		</div>

	</section>

</template>

<script lang="ts">
	import Vue from "vue";
	import ChatRoomBox from '@/components/ChatRoomBox/index.vue'
	import ChatRoomRequest from '@/components/ChatRoomRequest/index.vue'

	export default Vue.extend({

		data(){

			return {
				isChatRoomRequestVisible: false
			}
		},

		components: {
			ChatRoomBox,
			ChatRoomRequest
		},

		methods: {

			changeChatRoomRequestVisibility(){
				this.isChatRoomRequestVisible = !this.isChatRoomRequestVisible
			}
		}
	});
</script>

<style scoped lang="scss">

	#indexSection{
		width: 100%;
		height: 100vh;
		background-color: $color-main-1;
		padding: 40px;
		overflow: hidden;
		position: relative;

		.bottomImage{
			position: absolute;
			bottom: 0px;
			left: 0;
			width: 100%;

			img{
				width: 100%;
			}
		}

		.slogan{
			position: absolute;
			bottom: 20px;
			left: 20px;
			font-size: 0.7em;
			font-family: 'Roboto';

			a{
				color: $color-light-4;
			}
		}

		#top{
			display: flex;
			justify-content: space-between;

			#introduction{
				z-index: 50;
				
				.title{
					width: 540px;
					font-size: 4em;
					font-family: 'Gravitas One';
					color: $color-light-4;
				}
				
				.desc{
					width: 470px;
					font-family: 'Roboto';
					color: rgba($color-light-4, 0.6);
					font-size: 0.9em;
					margin-top: 20px;
				}
			}

			#enterAToChatRoom{
				z-index: 9;

				button{
					width: 158px;
					background-color: $color-main-2;
					border-radius: 10px;
					padding: 10px;
					color: $color-light-4;
					font-weight: bold;
				}
			}
		}
	}

	@media screen and (max-width: 1070px){

		#indexSection{
			display: flex;
			flex-flow: column;
			justify-content: center;
			align-items: center;
			min-height: 100vh;
			height: auto;

			.slogan{
				position: relative;
				bottom: 0;
				left: 0;
				margin-top: 30px;
			}

			#top{
				justify-content: center;
				#introduction{
					display: none;
				}
				#enterAToChatRoom{
					margin-bottom: 20px;
					button { width: 329px; }
				}
			}
		}
	}

</style>
