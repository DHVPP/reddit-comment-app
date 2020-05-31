<template>
  <div>
    <p v-text="comment.text"></p>
    <div v-if="hasComments">
      <comment
        class="comment"
        v-for="subComment in comment.comments"
        :key="subComment.id"
        :comment="subComment"
      ></comment>
    </div>
  </div>
</template>
<script>
export default {
  name: "comment",
  props: {
    comment: Object
  },
  methods: {
    hasComments() {
      return this.comment.comments.length > 0;
    }
  }
};
</script>
<style>
.comment {
  padding-left: 50px;
}
</style>
