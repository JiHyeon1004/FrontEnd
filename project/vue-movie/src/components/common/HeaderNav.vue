<template>
  <header>
      <nav class="header-nav">
          <div>
              <router-link to="/">메인</router-link>
          </div>
          <div>
              <router-link to="/board">게시판목록</router-link>
              <router-link to="{name: 'boardCreate'}">게시글등록</router-link>
              <router-link to="#">TMDB</router-link>
          </div>
      </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>

.header {
    height : 70px;
    background-color: pink;
    line-height: 70px;
    padding: 0px 30px;
}

.header-nav{
    display: flex;
    justify-content: space-between;
}

nav a {
    font-weight: bold;
    color: white;
    text-decoration: none;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>