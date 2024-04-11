<script>
export default {
  data() {
    return {};
  },
  methods: {
    titlePath(text) {
      return text.replace('/', '').replace(/\b\w/g, c => c.toUpperCase());
    }
  }
};
</script>
<template>
  Super F for the
  <span style="color: red">{{ titlePath($route.path) }}</span>
  page, maybe tomorrow I will add some code here but
  <span style="color: red"> don't count on it </span>
</template>