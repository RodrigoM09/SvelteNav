<script>
  import "../app.css";
  import SonixColourLog from "../lib/images/Sonix-colour-logo-02(1).svg";

</script>

<nav id="navBar" class="flex justify-between items-center w-screen">
	
		<img class="w-1/6" src={SonixColourLog} alt="">
	
	<div class="flex w-6/12">
		<ul class="flex items-center gap-20 h-20 text-white">
			<li><a href="/">How it Works</a></li>
			<li><a href="/">Pricing</a></li>
			<li><a href="/">Services</a></li>
		</ul>
		<div class="flex items-center justify-between m-5 gap-5" id="navButtons">
			<button class="bg-white rounded-xl w-20 h-7" id="login">Login</button>
			<button class="rounded-xl w-20 h-7" id="register">Register</button>
		</div>
	</div>
</nav>
<slot />
<style>
	#navBar {
	background-color: var(--primary-color);
	}
	#register{
		background-color: var(--secondary-color);
	}

</style>