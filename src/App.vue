<template>
  <div id="app">
    <thread v-for="thread in threads" :key="thread.id" class="thread" :thread="thread"></thread>
  </div>
</template>
<script>
import Thread from "./components/thread.component";
import ThreadApiService from "./api.services/thread.api.service";

export default {
  name: "App",
  components: {
    Thread
  },
  data() {
    return {
      threads: []
    };
  },
  mounted: function() {
    ThreadApiService.getThreads().then(response => {
      this.threads = response.data;
    });
  }
};
</script>
<style>
.thread {
  border: 1px solid #000;
}
</style>
