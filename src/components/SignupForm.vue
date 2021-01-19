<template>
  <form v-if="!submitted"
        v-on:submit.prevent="handleSubmit"
        name="newsletter"
        method="post"
        action="/signup"
        data-netlify="true"
        data-netlify-honeypot="surname">
    <p hidden>
      <label>
        Don’t fill this out: <input name="surname" />
      </label>
    </p>
    <input
      class="w-48 text-black placeholder-gray-700 text-sm bg-purple-100 px-2 py-4 sm:py-2
             border-purple-700 border-t border-l sm:border-b border-r sm:border-r-0"
      type="text"
      name="firstname"
      v-model="formData.firstname"
      placeholder="First Name" />
    <input
      class="w-48 text-black text-sm bg-white px-2 py-4 sm:py-2
             border-purple-700 border-l sm:border-l-0 border-r sm:border-t border-b
             block sm:inline-block mx-auto sm:ml-0"
      type="email"
      name="email"
      v-model="formData.email"
      placeholder="Enter Email" />
    <button class="button text-left bg-purple-700 text-gray-100 shadow-xl
                   hover:bg-purple-800
                   border border-purple-900
                   block sm:inline-block mx-auto sm:ml-2 mt-2 sm:mt-1
                   pl-4 pr-6 py-2"
            :class="button_bg()"
            type="submit">
      Keep Me Posted
    </button>
  </form>

  <div v-else>
    <p>
      You're in {{ formData.firstname }}!
    </p>
  </div>
</template>

<script>
export default {
  props: {
    emphasise: Boolean
  },
  data() {
    return {
      formData: {},
      submitted: false,
    }
  },
  methods: {
    button_bg() {
      return this.emphasise ? "bg-c9-highlight" : "bg-white"
    },
    encode(data) {
      return Object.keys(data)
                   .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
                   .join('&')
    },
    handleSubmit(e) {
      // https://docs.netlify.com/forms/setup/#submit-forms-via-ajax
      // AJAX request must match the action attribute on the form
      fetch('/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData,
        }),
      })
        .then(() => this.submitted = true)
        .catch(error => alert(error))
    }
  }
}
</script>
