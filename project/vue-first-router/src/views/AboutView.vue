<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="moveToHome">홈으로</button><br>
    <router-link :to="{name: 'user', params: {username: 'jihyeon'}}">지현</router-link><hr>
    <router-link :to="{name: 'user', params: {username: 'sohyeon'}}">소현</router-link><hr>
    <router-link :to="{name: 'user', params: {username: 'suho'}}">수호</router-link><hr>

    <!--요것은 의미가 없습니다요-->
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  //name에 about같은 단일키워드는 안 쓰는 것이 좋다
  name: 'AboutView',
  methods: {
    //<router-link> 걸은 것과 같은 작용
    moveToHome(){
      this.$router.push({name: 'home'})
      //this.$router.pust('/')이랑 똑같다.
    }
  }
}
</script>
