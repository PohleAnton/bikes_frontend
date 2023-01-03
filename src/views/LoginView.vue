<template>
  <login-comp></login-comp>
</template>

<script>
import LoginComp from "@/components/LoginComp";
import {store} from '@/assets/store'

export default {
  name: "LoginView",
  components: { LoginComp },
  data(){
    return{
      store
    }
  }
}
</script>

<style scoped>

</style>
