<template>
  <div class="our-help">
    <h1>{{ pageName }}</h1>
    <p>
      {{ pageDescription }}
    </p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      pageName: "Help",
      pageDescription: "This is help page",
    };
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "help",
};
</script>
