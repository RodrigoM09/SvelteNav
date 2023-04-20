<script lang="ts">
  import "../app.css";
  import Icon from '@iconify/svelte';
  import SonixColourLog from "../lib/images/Sonix-colour-logo-02(1).svg";
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

</script>
<Navbar let:hidden let:toggle navClass="!bg-primaryColor" >
  <NavBrand href="/">
    <img
      src="{SonixColourLog}"
      class="mr-3 h-10 sm:w-20"
      alt="Sonix Logo"
    />
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl class="!bg-primaryColor" {hidden}>
    <NavLi href="/" active={true}>Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/services">Services</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>
<slot />





