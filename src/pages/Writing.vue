<template>
  <DefaultLayout>

    <div v-for="edge in $page.allEssay.edges" :key="edge.node.id">
      <Post class="mb-24" :essay="edge.node"/>
    </div>

    <Pager class="pager text-sm inline-block" :info="$page.allEssay.pageInfo"/>

    <AboutAuthor />

  </DefaultLayout>
</template>


<page-query>
query ($page: Int) {
  allEssay(perPage: 5, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date
        path
        content
      }
    }
  }
}
</page-query>


<script>
import { Pager } from 'gridsome'
import Post from '~/components/Post.vue'
import AboutAuthor from '~/components/AboutAuthor.vue'

export default {
  components: { Pager, Post, AboutAuthor },
  metaInfo() {
    return {
      title: "Writing"
    };
  }
};
</script>
