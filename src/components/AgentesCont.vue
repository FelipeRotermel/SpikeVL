<script>
  import AgentesDuelistas from "@/components/agentes/AgentesDuelistas.vue"
  import AgentesIniciadores from "@/components/agentes/AgentesIniciadores.vue"
  export default{
      components: { AgentesDuelistas, AgentesIniciadores }
  }
</script>
<template>
    <div class="container-fluid" id="container-agentes">
        <div class="row text-white">
            <div class="col-12">
                <h1 class="main-title text-center"><strong>Escolha seu estilo de gameplay</strong></h1>
            </div>
            <div class="col-12 text-center">
                <div class="row">
                    <div class="col-sm" id="col-agentes">
                        <label for="item-1"><h2>DUELISTAS</h2></label><br>
                        <label for="item-1"><h1><img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt213441880cf2cdf5/5eaa06851b51e36d7c1b61d4/Duelist.png" width="50px" alt=""></h1></label>
                    </div>
                    <div class="col-sm" id="col-agentes">
                        <label for="item-2"><h2>INICIADORES</h2></label><br>
                        <label for="item-2"><h1><img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2965c8a8dce0467d/5eaa0685e6f6795e530a1cbe/Initiator.png" width="50px" alt=""></h1></label>
                    </div>
                </div>
            </div>
            <input type="checkbox" id="item-1">
            <AgentesDuelistas />
            <input type="checkbox" id="item-2">
            <AgentesIniciadores />
        </div>
    </div>
</template>