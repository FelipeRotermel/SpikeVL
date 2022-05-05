<script>
  import NavBar from "@/components/NavBar.vue"
  import BgIntro from "@/components/BgIntro.vue"
  import IntroCont from "@/components/IntroCont.vue"
  import AgentesCont from "@/components/AgentesCont.vue"
  export default{
    components: { NavBar, BgIntro, IntroCont, AgentesCont }
  }
</script>
<template>
  <NavBar />
  <BgIntro />
  <IntroCont />
  <AgentesCont />
</template>