<template>
  <DefaultLayout>
    <div class="narrow">

      <div v-for="edge in $page.allEssay.edges" :key="edge.node.id">
        <Post class="mb-24" :essay="edge.node"/>
        <p class="text-gray-700">&mdash;</p>
      </div>

      <Pager class="pager text-sm inline-block" :info="$page.allEssay.pageInfo"/>

      <EssayFooter />

    </div>
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
        draft
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
import EssayFooter from '~/components/EssayFooter.vue'

export default {
  components: { Pager, Post, EssayFooter },
  metaInfo() {
    return {
      title: "Writing"
    };
  }
};
</script>
