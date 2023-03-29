<template>
  <div class="AppHeader overflow-hidden text-light">
    <div class="container d-flex align-items-center justify-content-between">
      <div class="logo">Mansour Web</div>
      <ul class="text-end m-0 d-flex align-items-center list-unstyled">
        <router-link to="/" tag="li" exact>
          <a>Home</a>
        </router-link>
        <router-link to="/about" tag="li" exact>
          <a>About</a>
        </router-link>
        <router-link to="/help" tag="li" exact>
          <a>Help</a>
        </router-link>
        <router-link to="/blog" tag="li" exact>
          <a>Blog</a>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="scss" scoped>
.AppHeader {
  background-color: #333;
  .logo {
    font-size: 24px;
  }
  ul {
    li {
      padding: 20px;
      font-size: 18px;
      a {
        color: white;
      }
    }
  }
}
</style>
