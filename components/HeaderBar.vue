<template>
    <header class="header-bar">
        <nav>
        <NuxtLink to="/" class="logo">
            <img src="/images/logo.png" class="logo-shop"/>
            <h3>NoodleBar</h3>
        </NuxtLink>
        <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
        </ul>
        </nav>
    </header>
</template>
  
<script>
export default {
    name: "HeaderBar",
    };
</script>
  
<style scoped lang="scss">
@import "@/assets/styles/variables";
.header-bar {
    background: $primary-color;
    color: $pure-white;
    padding: 8px;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
}

li {
    margin: 0 8px;
}

a {
    color: $pure-white;
    text-decoration: none;
    }

a:hover {
    text-decoration: underline;
    }

.logo {
    display: flex;
    align-items: center;
}

.logo-shop {
    width: 4em;
}
</style>
  