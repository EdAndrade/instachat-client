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
				<button @click="changeChatRoomRequestVisibility()">Get into a chat room</button>
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
		background-color: #332441;
		padding: 40px;
		overflow: hidden;

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
				color: #fff;
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
					color: #fff;
				}
				
				.desc{
					width: 470px;
					font-family: 'Roboto';
					color: rgba(#fff, 0.6);
					font-size: 0.9em;
					margin-top: 20px;
				}
			}

			#enterAToChatRoom{
				z-index: 9;

				button{
					width: 158px;
					background-color: #5B238C;
					border-radius: 5px;
					padding: 10px;
					color: #fff;
					font-weight: bold;
				}
			}
		}
	}
</style>
