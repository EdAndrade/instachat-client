<template>

	<section id="indexSection">

		<div id="top">

			<div id="introduction">

				<div class="title">
					<p>Eazy and instant chat rooms</p>
				</div>

				<div class="desc">
					fdjsflsjdflkasdjf;ldksfj;sldkfjs;dlkfjs;flkajds;flksjdflksdfj;lksdfj;lksdfj;sdlkfj;sdlkfj;asdlfkjsa;ldfkjsd;lfkja;sdflkj;l
				</div>
			</div>

			<div id="enterAToChatRoom">
				<button>Get into a chat room</button>
			</div>
		</div>

	</section>

</template>

<script lang="ts">
	import Vue from "vue";

	export default Vue.extend({});
</script>

<style scoped lang="scss">

	#indexSection{
		width: 100%;
		height: 100vh;
		background-color: #332441;
		padding: 40px;

		#top{
			display: flex;
			justify-content: space-between;

			#introduction{
				
				.title{
					width: 540px;
					font-size: 4em;
					font-family: 'Gravitas One';
					color: #fff;
				}
			}

			#enterAToChatRoom{

				button{
					width: 158px;
					background-color: #5B238C;
					border-radius: 5px;
					padding: 10px;
					color: #fff;
				}
			}
		}
	}
</style>
