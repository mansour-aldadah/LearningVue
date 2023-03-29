<template>
  <div class="our-blog">
    <h1 v-font.bold.orange="60">{{ pageName }}</h1>
    <p>
      {{ pageDescription }}
    </p>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="posts-area">
            <post
              v-for="post in posts"
              :key="post.id"
              :views="post.views"
              :title="post.title"
              :author="post.author"
              :catagory="post.catagory"
              :date="post.date"
              :content="post.content"
            />
          </div>
        </div>
        <div class="col-md-4">
          <aside>
            <sidebar />
          </aside>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import post from "../components/Blog/BlogPosts.vue";
import sidebar from "../components/Blog/SideBar.vue";
import json from "../json/posts.json";

export default {
  data: function () {
    return {
      pageName: "Blog",
      pageDescription: "This is blog page",
      posts: json,
    };
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "blog",
  components: {
    post,
    sidebar,
  },
};
</script>
