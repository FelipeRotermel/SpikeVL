<script>
  export default{}
</script>
<template>
    <header>
        <div class="container" id="nav-container">
            <nav class="navbar navbar-expand-lg fixed-top">
                <div class="collapse navbar-collapse justify-content-left" id="navbar-links">
                    <div class="navbar-nav">
                        <a href="#"><img src="@/assets/logo.png" width="50px" alt=""></a>
                        <a href="#"><h3>SpikeVL</h3></a>
                        <a href="#"><h4>Home</h4></a>
                        <a href="#IntroCont"><h4>Sobre o Valorant</h4></a>
                        <a href="#container-agentes"><h4>Agentes</h4></a>
                        <a href="#MapasCont"><h4>Mapas</h4></a>
                        <router-link to="/Login"><h4>Login</h4></router-link>
                        <router-view />
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>