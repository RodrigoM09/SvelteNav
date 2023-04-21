<script lang="ts">
  import "../app.css";
  import Icon from '@iconify/svelte';
  import SonixColourLog from "../lib/images/Sonix-colour-logo-02(1).svg";
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Footer } from 'flowbite-svelte';
</script>
<Navbar let:hidden let:toggle navClass="!bg-primaryColor h-20 flex-col items-center sm:flex sm:items-center">
  <NavBrand href="/">
    <img
      src="{SonixColourLog}"
      class="mr-3 mt-5 h-10 sm:w-40"
      alt="Sonix Logo"
    />
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl class="!bg-primaryColor z-10 sm:mt-5" {hidden}>
    <NavLi href="/">How it Works</NavLi>
    <NavLi href="/about">Services</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <div class="flex justify-center gap-2">
      <Button class="!bg-white h-5 w-24 text-black">login</Button>
      <Button class="!bg-buttonColor h-5 w-24">register</Button>
    </div>
  </NavUl>
</Navbar>
<slot />

<style>
  :global(body){
  font-family: "Shree Devanagari", sans-serif;
  }
</style>