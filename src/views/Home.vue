<script>
import NavBar from "@/components/NavBar.vue";
import BgIntro from "@/components/BgIntro.vue";
import IntroCont from "@/components/IntroCont.vue";
import AgentesCont from "@/components/AgentesCont.vue";
import MapasCont from "@/components/MapasCont.vue";
import FooterCont from "@/components/FooterCont.vue";
export default {
  components: { NavBar, BgIntro, IntroCont, AgentesCont, MapasCont, FooterCont },
};
</script>
<template>
  <NavBar />
  <BgIntro />
  <IntroCont />
  <AgentesCont />
  <MapasCont />
  <FooterCont />
</template>
