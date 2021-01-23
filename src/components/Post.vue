<template>
  <div>

    <header>
      <a :href="essay.path">
        <h1 class="text-2xl mt-10 mb-8">{{ essay.title }}</h1>
      </a>
      <p class="pb-4">
        {{ essay.date }}<span v-if="essay.draft" class="italic"
                        >, draft - still working on this.</span>
      </p>
    </header>

    <div class="content" v-html="essay.content"/>

  </div>
</template>


<script>
export default {
  props: {
    essay: Object
  }
};
</script>
