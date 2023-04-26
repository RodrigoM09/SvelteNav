<script>
	import "../app.css"
	import Component from '$lib/components/Component.svelte';
	import {Button} from 'flowbite-svelte';
</script>

<div class="hero w-100 flex">
	<div class="grid h-100 gap-y-5 w-99 sm:grid sm:grid-rows-1 sm:justify-items-start sm:mt-3 sm:p-5">
		<div class="sm:flex sm:justify-around w-full">
			<div class="text-center flex w-100 flex-col m-2 sm:gap-5">
				<h1 id="yourStory" class="text-4xl md:text-7xl italic">Your Story Starts<br> With <span class="!text-primaryColor">US</span></h1>
				<h3 class="text-md font-extralight mt-1">Simple Digital Record Keeping<br>for customer consent forms</h3>
				<Button class="!bg-buttonColor w-11/12 h-10 mt-2 place-self-center sm:place-self-start">Register Today</Button>
			</div>
			<div class="invisible sm:visible flex items-center place-self-center md:relative">
				<img class="hidden sm:block relative h-56 w-56 rounded-xl z-10" src="https://picsum.photos/1050/1050" alt="">
				<div class="invisible md:visible absolute -left-5 h-44 w-36 rounded-xl !bg-buttonColor"></div>
				<div class="invisible md:visible absolute left-5 h-40 w-60 rounded-xl !bg-buttonColor"></div>
				<div class="invisible md:visible absolute right-10 h-60 w-36 rounded-xl !bg-buttonColor"></div>
			</div>
		</div>
		<div class="w-100 sm:flex">
			<div class="text-center bg-white h-auto sm:w-2/5 rounded-3xl p-3 m-3">
				<h3 class="text-2xl mb-3 font-bold sm:flex sm:flex-col">Digital <span class=" text-primaryColor italic">Records</span></h3>
				<p>
					Divide details about your product or agency work into parts. 
					A paragraph describing a feature will be enough.
				</p>
			</div>

			<div class="text-center bg-white h-auto sm:w-2/5 rounded-3xl p-3 m-3">
				<h3 class="text-2xl mb-3 font-bold sm:flex sm:flex-col">Customer <span class="text-primaryColor italic">Engagement</span></h3>
				<p>
					Keep your user engaged by providing meanigful information.
					Remeber that by this time, the user is curious.
				</p>
			</div>

			<div class="text-center bg-white h-auto sm:w-2/5 rounded-3xl p-3 m-3">
				<h3 class="text-2xl mb-3 font-bold sm:flex sm:flex-col">Verified <span class="text-primaryColor italic">Company</span></h3>
				<p>
					Write a few lines about each one.
					A paragraph describing a feature will be enough.
					Keep your user engaged!
				</p>
			</div>
		</div>
	</div>
</div>
	<div class="relative flex py-5 items-center font-bold">
		<div class="flex-grow border-t border-black"></div>
		<span class="font-bold flex-shrink mx-4 text-black sm:text-xl">Why DURRAFORMS?</span>
		<div class="flex-grow border-t border-black"></div>
	</div>
	<div class="flex flex-col">
		<div class="flex flex-col m-2 sm:text-center">
			<div class="mb-4">
				<div class="flex justify-between sm:justify-center items-start">
					<h3 class="font-extrabold italic w-52 sm:w-70 md:w-80 sm:mb-3 sm:mr-3 md:text-2xl md:flex md:flex-col"><span class="text-primaryColor">Go Green.</span> Reduce The Amount Spent on Office Supplies</h3>
					<img class="rounded-xl mr-5" src="https://picsum.photos/50/50" alt="">
				</div>
				<p class="font-light text-xs sm:font-semibold sm:text-lg md:text-xl">
					No more paper waste, no more filing cabinets. With DURRAFORMS, you will spend less money on paper, printer ink, and ugly filing cabinets.
				</p>
				<div class="flex justify-end">
					<a class="underline text-green-600 text-sm" href="/">Click here to view our services</a>
				</div>
			</div>

			<div class="mb-8">
				<div class="flex justify-between sm:justify-center">
					<h3 class="font-extrabold italic sm:self-center sm:mb-3 sm:mr-3 md:text-2xl">Customer Data Stays <span class="text-primaryColor">Secure</span></h3>
					<img class="rounded-xl mr-5" src="https://picsum.photos/50/50" alt="">
				</div>
				<p class="text-xs sm:font-semibold sm:text-lg md:text-xl">
					Your customers will feel safer knowing exactly where their sensitive information is being held.
				</p>
				<div class="flex justify-end">
					<a class="underline text-green-600 text-sm" href="/">Click here to see how it works</a>
				</div>
			</div>

			<div class="mb-8">
				<div class="flex justify-between sm:justify-center">
					<h3 class="font-extrabold italic sm:self-center sm:mb-3 sm:mr-3 md:text-2xl">We're <span class="text-primaryColor">affordable</span></h3>
					<img class="rounded-xl mr-5" src="https://picsum.photos/50/50" alt="">
				</div>
				<p class="text-xs sm:font-semibold sm:text-lg md:text-xl">
					Choose between a monthly or yearly subscription without worrying about the fine print.
				</p>
				<div class="flex justify-end">
					<a class="underline text-green-600 text-sm" href="/">Click here to view our pricing</a>
				</div>
			</div>
		</div>
		<div class="relative flex py-5 items-center font-bold">
			<div class="flex-grow border-t border-black"></div>
			<span class="font-bold flex-shrink mx-4 text-black sm:text-xl">Don't Just Take Our Word For It</span>
			<div class="flex-grow border-t border-black"></div>
		</div>
		<div class="flex flex-col gap-5 items-center text-center mb-20">
			<h3 class="font-bold ">Our Customer's Feedback</h3>
			<p class="text-xs m-1 sm:text-base">Here our some of our most recent reviews from our clients who have been using Durraforms!</p>
			<img class="rounded-full" src="https://picsum.photos/250/250" alt="">
			<h2 class="font-semibold sm:text-xl">Ink Couture</h2>
			<div class="flex flex-col">
				<h6 class="text-xs sm:text-base">I can honestly say that there is not one company that</h6>
				<h6 class="text-xs sm:text-base">I've ever worked with that has better service than<h6>
				<h6 class="text-xs font-bold sm:text-base">Durraforms!*</h6>
			</div>
	</div>
</div>
</div>
<style>

</style>