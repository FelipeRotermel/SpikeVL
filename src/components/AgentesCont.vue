<script>
  import AgentesDuelistas from "@/components/agentes/AgentesDuelistas.vue"
  import AgentesIniciadores from "@/components/agentes/AgentesIniciadores.vue"
  import AgentesControladores from "@/components/agentes/AgentesControladores.vue"
  import AgentesSentinelas from "@/components/agentes/AgentesSentinelas.vue"
  export default{
      components: { AgentesDuelistas, AgentesIniciadores, AgentesControladores, AgentesSentinelas }
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
                    <div class="col-sm" id="col-agentes">
                        <label for="item-3"><h2>CONTROLADORES</h2></label><br>
                        <label for="item-3"><h1><img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt63e21ca9443dce8e/5eb270f43b09c042ddca1353/Controller.png" width="50px" alt=""></h1></label>
                    </div>
                    <div class="col-sm" id="col-agentes">
                        <label for="item-4"><h2>SENTINELAS</h2></label><br>
                        <label for="item-4"><h1><img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt72ffc2e48d4a7a58/5eaa06852b79652f27c31ff6/Sentinel.png" width="50px" alt=""></h1></label>
                    </div>
                </div>
            </div>
            <input type="radio" name="item" id="item-1">
            <AgentesDuelistas />
            <input type="radio" name="item" id="item-2">
            <AgentesIniciadores />
            <input type="radio" name="item" id="item-3">
            <AgentesControladores />
            <input type="radio" name="item" id="item-4">
            <AgentesSentinelas />
        </div>
    </div>
</template>