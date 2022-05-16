<template>
  <div>
    <h2>영화 목록</h2>
    <hr />
    <div>
      <table>
        <tr>
          <th>아이디</th>
          <th>제목</th>
          <th>감독</th>
          <th>장르</th>
          <th>상영시간</th>
        </tr>
        <tr v-for="movie in movies" :key="movie.id">
          <td>{{movie.id}}</td>
          <td><router-link :to='/movie/${movie.id}'>{{movie.title}}</router-link></td>
          <td>{{movie.director}}</td>
          <td>{{movie.genre}}</td>
          <td>{{movie.runningTime}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MovieList",
  computed: {
    ...mapState(["movies"])
  },
  creater(){
      this.$store.dispatch('getMovies')
  }
};
</script>

<style>
</style>