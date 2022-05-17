<template>
  <div>
<h3>aboutcomponent</h3>
{{msg}}
  </div>
</template>

<script>
export default {
    name: 'AboutView',
    props: {
        msg: String,
    },
    data() {
        return{
            text: ''
        }
    }
}
</script>

<style>

</style>