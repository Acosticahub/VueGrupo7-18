<template>
    <v-main>
      
      <router-view />
    </v-main>

</template>

<script>
/*import LoginHome from '../components/loginhome'*/
export default {
  components: { },
  name: "App",
  
  
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
@import url('https://fonts.googleapis.com/css?family=Poppins');

*{
  font-family: 'Poppins', sans-serif;
}
</style>