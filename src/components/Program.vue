<template>
  <div id="program">
      <h1>Program Component</h1>
       channelId:  {{channelId}}
       <hr>
      <div class='programs' v-for="program in programs" :key="program.id">
          <span>  <img :src="program.programimage" alt="">  {{program.name}}</span>

      </div>


  </div>
</template>

<script>
import dataStore from "../store/dataStore.js";
export default {

    data: function(){
        return {
            programs:dataStore.data.programs,
            channelId:dataStore.data.channelId

        }
    },
    created(){
     dataStore.methods.getPrograms();

    }

    


}
</script>


<style scoped>
    img{
        width:40px;
        height:40px;
    }
    .programs span{
        cursor:pointer;
    }

</style>
