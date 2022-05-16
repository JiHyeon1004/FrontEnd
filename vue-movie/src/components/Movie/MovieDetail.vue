<template>
  <div>
      <h2></h2>
  </div>
</template>

<script>
export default {
name: "MovieDetail",
create(){
  const pathName = new URL(document.location).pathname.split("/");
  const id = pathName[pathName.length-1]
  this.$store.dispatch('getBoard', id)
}
}
</script>

<style>

</style>