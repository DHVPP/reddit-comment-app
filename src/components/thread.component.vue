<template>
  <div>
    <p v-text="thread.text"></p>
    <comment
      class="comment"
      v-for="comment in thread.comments"
      :key="comment.id"
      :comment="comment"
    ></comment>
  </div>
</template>
<script>
import Comment from "./comment.component";

export default {
  name: "thread",
  props: {
    thread: Object
  },
  components: {
    Comment
  }
};
</script>
<style>
.comment {
  padding-left: 50px;
}
</style>