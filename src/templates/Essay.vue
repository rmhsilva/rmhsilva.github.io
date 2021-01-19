<template>
  <DefaultLayout>

    <article>
      <Post :essay="$page.essay"/>

      <AboutAuthor />
    </article>

  </DefaultLayout>
</template>


<page-query>
query ThisEssay ($path: String!) {
  essay: essay(path: $path) {
    title
    date
    content
  }
}
</page-query>


<script>
import Post from '~/components/Post.vue'
import AboutAuthor from '~/components/AboutAuthor.vue'

export default {
  components: { Post, AboutAuthor },
  metaInfo() {
    return {
      title: this.$page.essay.title
    };
  }
};
</script>

