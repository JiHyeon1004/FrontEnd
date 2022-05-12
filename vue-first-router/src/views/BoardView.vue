<template>
  <div>
      <h3>게시판</h3>
      <router-link to="/board/list">게시판 목록</router-link><br>
      <router-link to="/board/write">게시글 등록</router-link>
  </div>
</template>

<script>
export default {
    name: 'BoardView'
}
</script>

<style>

</style>