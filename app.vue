<template>
  <div id="app">
    <HeaderBar />
    <main>
      <NuxtPage />
    </main>
    <FooterBar />
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
import FooterBar from "@/components/FooterBar.vue";

export default {
  components: {
    HeaderBar,
    FooterBar,
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
  padding: 16px;
}
</style>
