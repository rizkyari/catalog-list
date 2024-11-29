<template>
    <footer class="footer-bar">
        <p>&copy; 2024 NoodleShop. All rights reserved.</p>
    </footer>
</template>
  
<script>
export default {
    name: "FooterBar",
};
</script>
  
<style scoped lang="scss">
@import "@/assets/styles/variables";
.footer-bar {
    background: $secondary-color;
    color: $pure-white;
    text-align: center;
    padding: 16px;
}
</style>
  