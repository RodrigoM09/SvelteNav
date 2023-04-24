<script>
	import "../app.css"
	import Component from '$lib/components/Component.svelte';
	import {Button} from 'flowbite-svelte';
</script>
<div class="page-wrapper flex flex-col w-screen">
	<div class="hero flex w-full">
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

				<div class="text-center bg-white  rounded-3xl p-3 m-3 sm:w-52 h-30 w-68">
					<h3 class=" md:text-xl lg:text-2xl mb-3 font-bold">Verified <span class="text-buttonColor">Company</span></h3>
					<p>
						Write a few lines about each one.
						A paragraph describing a feature will be enough.
						Keep your user engaged!
					</p>
				</div>
			</div>
		</div>
		<div class="hidden sm:block m-10 w-full">
			<img class="absolute lg:right-36 xl:right-72 rounded-xl z-10" src="https://picsum.photos/350/300" alt="">
			<div class="absolute lg:right-32 lg:top-24 lg:h-32 lg:w-28 xl:mt-44 xl:right-64 xl:h-40 xl:w-36 rounded-xl sm:block !bg-buttonColor"></div>
			<div class="absolute lg:right-80 lg:top-52 lg:h-32 lg:w-28 xl:mr-56 xl:top-80 xl:h-40 xl:w-36 rounded-xl sm:block !bg-buttonColor"></div>
			<div class="absolute lg:right-36 lg:top-56 lg:h-28 lg:w-24 xl:mr-24 xl:top-24 xl:h-32 xl:w-40 rounded-xl sm:block !bg-buttonColor"></div>
		</div>
	</div>
	<div class="relative flex py-5 items-center font-bold">
		<div class="flex-grow border-t border-black"></div>
		<span class="font-bold flex-shrink mx-4 text-black">Why DURRAFORMS?</span>
		<div class="flex-grow border-t border-black"></div>
	</div>
	<div>
		<div class="flex flex-col m-2">
			<div class="mb-4">
				<div class="flex justify-between">
					<h3 class="font-extrabold w-52"><span class="text-primaryColor">Go Green.</span> Reduce The Amount Spent on Office Supplies</h3>
					<img class="rounded-xl mr-5" src="https://picsum.photos/50/50" alt="">
				</div>
				<p class="font-light text-xs">
					No more paper waste, no more filing cabinets. With DURRAFORMS, you will spend less money on paper, printer ink, and ugly filing cabinets.
				</p>
				<a class="underline text-green-600 text-sm" href="/">Click here to view our services</a>
			</div>

			<div class="mb-8">
				<div class="flex justify-between">
					<h3 class="font-extrabold">Customer Data Stays <span>Secure</span></h3>
					<img class="rounded-xl mr-5" src="https://picsum.photos/50/50" alt="">
				</div>
				<p class="text-xs">
					Your customers will feel safer knowing exactly where their sensitive information is being held.
				</p>
				<a class="underline text-green-600 text-sm" href="/">Click here to see how it works</a>
			</div>

			<div class="mb-8">
				<div class="flex justify-between">
					<h3 class="font-extrabold">We're affordable</h3>
					<img class="rounded-xl mr-5" src="https://picsum.photos/50/50" alt="">
				</div>
				<p class="text-xs">
					Choose between a monthly or yearly subscription without worrying about the fine print.
				</p>
				<a class="underline text-green-600 text-sm" href="/">Click here to view our pricing</a>
			</div>
		</div>
		<div class="relative flex py-5 items-center font-bold">
			<div class="flex-grow border-t border-black"></div>
			<span class="font-bold flex-shrink mx-4 text-black">Don't Just Take Our Word For It</span>
			<div class="flex-grow border-t border-black"></div>
		</div>
		<div class="flex flex-col gap-5 items-center text-center mb-20">
			<h3 class="font-bold ">Our Customer's Feedback</h3>
			<p class="text-xs m-1">Here our some of our most recent reviews from our clients who have been using Durraforms!</p>
			<img class="rounded-full" src="https://picsum.photos/250/250" alt="">
			<h2 class="font-semibold">Ink Couture</h2>
			<div class="flex flex-col">
				<h6 class="text-xs">I can honestly say that there is not one company that</h6>
				<h6 class="text-xs">I've ever worked with that has better service than<h6>
				<h6 class="text-xs font-bold">Durraforms!*</h6>
			</div>
		</div>
	</div>
</div>
<style>

</style>