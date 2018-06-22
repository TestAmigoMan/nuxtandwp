<template>
    <header>
        <div class="navbar-fixed">
            <nav class="teal">
                <div class="nav-wrapper">
                    <div class="container">
                        <nuxt-link to="/" class="brand-logo">Logo</nuxt-link>
                        <ul class="right hide-on-med-and-down">
                            <li>
                                <nuxt-link :to="{ path: '/about' }">About</nuxt-link>
                            </li>
                        </ul>
                        <a href="#" data-target="slide-out" class="left show-on-med-and-down sidenav-trigger">
                            <i class="fa fa-bars"></i>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
        <ul id="slide-out" class="sidenav">
            <li>
                <nuxt-link to="/" class="sidenav-close">
                    <i class="fa fa-home"></i>Home Page
                </nuxt-link>
            </li>
            <li>
                <nuxt-link :to="{ path: '/about' }" class="sidenav-close">
                    About
                </nuxt-link>
            </li>
        </ul>
    </header>
</template>

<script>
    export default {

    }
</script>

<style>

</style>