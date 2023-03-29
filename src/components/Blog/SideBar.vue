<template>
  <div class="sidebar">{{ title | uppercase }}</div>
</template>

<script>
export default {
  data: function () {
    return {
      title: "Testing",
    };
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "sidebar",
  filters: {
    uppercase: function (v) {
      return v.toUpperCase();
    },
  },
};
</script>
