<template>
  <div class="about">
    <h1>{{ pageName }}</h1>
    <p v-bold>{{ pageDescription }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      pageName: "About us",
      pageDescription: "This is about us page",
    };
  },
  directives: {
    bold: function (e) {
      e.style.fontWeight = "bold";
    },
  },
  name: "AboutView",
};
</script>
