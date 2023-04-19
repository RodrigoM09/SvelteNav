<nav id="navBar" class="flex justify-between items-center w-screen">
	<div class="m-5" id="logo">
		<img src="https://picsum.photos/100/50" alt="">
	</div>
	<div class="flex w-6/12">
		<ul class="flex items-center justify-between w-full h-20 text-white">
			<li><a href="/">How it works</a></li>
			<li><a href="/">Pricing</a></li>
			<li><a href="/">Services</a></li>
		</ul>
		<div class="flex items-center justify-between m-5 gap-1" id="navButtons">
			<button class="bg-white rounded-lg w-20 h-7" id="login">Login</button>
			<button class="rounded-lg w-20 h-7" id="register">Register</button>
		</div>
	</div>
</nav>
<style>
	#navBar {
	background-color: var(--primary-color);
	}
	#register{
		background-color: var(--secondary-color);
	}

</style>