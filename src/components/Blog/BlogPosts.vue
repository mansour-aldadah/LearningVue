<template>
  <div class="post bg-wight p-4 position-relative text-start mb-4">
    <span
      class="post-views position-absolute rounded-1 pe-1 ps-1 text-light text-center fw-bold"
      >{{ views }}</span
    >
    <h3 class="post-title mb-0">{{ title }}</h3>
    <span class="post-date text-black-50 fs-6">{{ date }}</span>
    <p class="post-content mt-2 lh-sm mb-4">
      {{ content }}
    </p>
    <div class="row">
      <div class="col-sm-6">
        <span class="post-author pt-2 pb-2 ps-3 pe-3 rounded-3 text-light">{{
          author
        }}</span>
      </div>
      <div class="col-sm-6 text-end">
        <span class="post-catagory pt-2 pb-2 ps-3 pe-3 rounded-3 text-light">{{
          catagory | uppercase
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "post",
  props: ["views", "title", "catagory", "content", "date", "author"],
};
</script>

<style lang="scss" scoped>
.post {
  box-shadow: 0 0 10px #ddd;
  .post-views {
    top: 5px;
    right: 5px;
    background-color: rgb(90, 152, 76);
  }
  .post-author {
    background-color: rgb(47, 71, 83);
  }
  .post-catagory {
    background-color: rgb(107, 143, 161);
  }
}
</style>
