<script>
import LoginCont from '@/components/login/LoginCont.vue';
import RegistrarCont from '@/components/login/RegistrarCont.vue';
export default { components: { LoginCont, RegistrarCont } };
</script>
<template>
  <section class="vh-100" id="loginbg">
  <div class="container py-5 h-100">
    <router-link class="text-white" to="/"><h4>Home</h4></router-link>
    <router-view />
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-8 col-lg-7 col-xl-6"></div>
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form>
          <div class="form-outline mb-4">
            <label class="text-white" id="loginform" for="login"><h3>Login</h3></label>
            <label class="text-white" id="registrarform" for="registrar"><h3>Registrar</h3></label>
          </div>
          <input type="radio" name="login" id="login" checked="checked">
          <LoginCont />
          <input type="radio" name="login" id="registrar">
          <RegistrarCont />
        </form>
      </div>
    </div>
  </div>
</section>
</template>