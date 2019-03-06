<template>
  <div class="home">
    
    <Channel/>
    <Program/>
    <PoddFile/>

  </div>
</template>

<script>


export default {




}
</script>
<style >
  .home{
    display:flex;
  }
  #program, #channel,#poddFile{
    flex:1;
    padding:2%;
    border-right:1px solid #ddd;

  }



</style>
