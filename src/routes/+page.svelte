<script>
	import "../app.css"
	import Component from '$lib/components/Component.svelte';
	import {Button} from 'flowbite-svelte';
</script>
<div class="page-wrapper flex-col">
	<div class="hero flex w-fullscreen">
		<!-- left side of desktop view -->
		<div class="grid h-100 gap-y-5 sm:grid sm:grid-rows-1 sm:justify-items-start sm:mt-3 sm:p-5">
				<div id="yourStory" class="[&>img]:place-self-end flex sm:flex w-100 flex-col m-2 sm:gap-5">
					<h1 class=" font-Shree text-4xl text-left">Your Story Starts<br> With <span class="!text-primaryColor">US</span></h1>
					<h3 class="text-md text-left font-extralight mt-1">Simple Digital Record Keeping<br>for customer consent forms</h3>
					<img class="absolute top-32 mr-3 rounded-xl sm:hidden" src="https://picsum.photos/80/80" alt="">
					<Button class="!bg-buttonColor w-11/12 h-10 mt-2 place-self-center sm:place-self-start">Register Today</Button>
				</div>

			<div class="sm:flex">
				<div class="text-center bg-white h-30 w-68 rounded-3xl p-3 m-3 sm:w-52">
					<h3 class="text-2xl mb-3 font-bold">Digital <span class=" text-buttonColor">Records</span></h3>
					<p>
						Divide details about your product or agency work into parts. 
						A paragraph describing a feature will be enough.
					</p>
				</div>
				<div class="text-center bg-white h-30 w-68 rounded-3xl p-3 m-3 sm:w-52">
					<h3 class="text-2xl mb-3 font-bold">Customer <span class="text-buttonColor">Engagement</span></h3>
					<p>
						Keep your user engaged by providing meanigful information.
						Remeber that by this time, the user is curious.
					</p>
				</div>
				<div class="text-center bg-white  rounded-3xl p-3 m-3 sm:w-52 md:h-24 md:w-56 lg:h-30 lg:w-68">
					<h3 class=" md:text-xl lg:text-2xl mb-3 font-bold">Verified <span class="text-buttonColor">Company</span></h3>
					<p>
						Write a few lines about each one.
						A paragraph describing a feature will be enough.
						Keep your user engaged!
					</p>
				</div>
			</div>
		</div>
		<div class="static hidden sm:block m-10 w-screen ">
			<img class="absolute right-72 rounded-xl z-10" src="https://picsum.photos/350/300" alt="">
			<div class=" rounded-xl sm:block !bg-buttonColor h-40 w-36"></div>
			<div class="absolute top-80 right-64 rounded-xl sm:block !bg-buttonColor h-40 w-36"></div>
			<div class="absolute top-24 right-72 rounded-xl sm:block !bg-buttonColor h-40 w-36"></div>
		</div>
	</div>
	<div class="relative flex py-5 items-center font-bold">
		<div class="flex-grow border-t border-black"></div>
		<span class="font-bold flex-shrink mx-4 text-black">Why DURRAFORMS?</span>
		<div class="flex-grow border-t border-black"></div>
	</div>
	<div>

	</div>

</div>
<style>

</style>