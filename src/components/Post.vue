<template>
  <div>

    <header>
      <a :href="essay.path">
        <h1 class="text-2xl mt-10 mb-8">{{ essay.title }}</h1>
      </a>
      <p class="pb-4">
        {{ date }}
        <span v-if="essay.draft"
              class="italic bg-gray-100 rounded px-2 py-1 ml-2">
          Draft - still thinking about this.
        </span>
      </p>
    </header>

    <div class="content" v-html="essay.content"/>

  </div>
</template>


<script>
import moment from 'moment';

export default {
  props: {
    essay: Object
  },
  data() {
    return {
      date: null
    }
  },
  mounted() {
    this.date = moment(this.essay.date).format("MMMM YYYY")
  }
};
</script>
