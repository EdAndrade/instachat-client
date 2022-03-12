<template>

	<section id="indexSection">

		<div id="top">

			<div id="introduction">

				<div class="title">
					<p>Eazy and instant chat rooms</p>
				</div>

				<div class="desc">
					<p>Create simple and quickly chat rooms to interct with your you friends, securily and secretly 
						without anybody necessary knows</p>
				</div>
			</div>

			<div id="enterAToChatRoom">
				<button>Get into a chat room</button>
			</div>
		</div>

		<ChatRoomBox/>

		<div class="bottomImage">
			<img src="~assets/images/wave.png" alt="">
		</div>

		<div class="slogan">
			<p>Criado por Edmilson Andrade</p>
		</div>

	</section>

</template>

<script lang="ts">
	import Vue from "vue";
	import ChatRoomBox from '@/components/ChatRoomBox/index.vue'

	export default Vue.extend({

		components: {
			ChatRoomBox
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
			color: rgba(#fff, 0.6);
			font-size: 0.7em;
			font-family: 'Roboto';
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
