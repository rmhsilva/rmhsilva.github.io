<template>
  <DefaultLayout>

    <div class="content narrow">

      <h1>By date</h1>

      <div v-for="edge in $page.allEssay.edges" :key="edge.node.id">

        <a :href="edge.node.path" class="block mb-1">
          <span class="mono text-sm">
            {{ edge.node.date }} ~
          </span>
          {{ edge.node.title }}
        </a>

      </div>

    </div>

  </DefaultLayout>
</template>


<page-query>
query{
  allEssay {
    edges {
      node {
        id
        title
        date
        path
      }
    }
  }
}
</page-query>


<script>
export default {
  metaInfo() {
    return {
      title: "Archive"
    };
  }
};
</script>
