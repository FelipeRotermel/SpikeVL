<script>
  export default{};
</script>
<template>
    <div id="logincont">
        <div class="form-outline mb-4 logincont">
            <input type="text" class="form-control form-control-lg text-white" id="conta"/>
            <label class="form-label text-white" id="conta" for="conta">USUÁRIO</label>
        </div>
        <div class="form-outline mb-4 logincont">
            <input type="password"  class="form-control form-control-lg text-white" id="senha"/>
            <label class="form-label text-white" id="senha" for="senha">SENHA</label>
        </div>
        <div class="d-flex justify-content-end align-items-center mb-4">
        <div class="form-check">
            <router-link to="/"><p class="text-end">Esqueceu a senha?</p></router-link>
            <router-view />
        </div>
        </div>
        <button type="submit" id="btnagentes" class="btn btn-lg btn-block text-white">ENTRAR</button>
    </div>
</template>