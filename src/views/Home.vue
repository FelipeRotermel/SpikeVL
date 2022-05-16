<script>
import NavBar from "@/components/NavBar.vue";
import BgIntro from "@/components/BgIntro.vue";
import IntroCont from "@/components/IntroCont.vue";
import AgentesCont from "@/components/AgentesCont.vue";
import MapasCont from "@/components/MapasCont.vue";
export default {
  components: { NavBar, BgIntro, IntroCont, AgentesCont, MapasCont },
};
</script>
<template>
  <NavBar />
  <BgIntro />
  <IntroCont />
  <AgentesCont />
  <MapasCont />
</template>
