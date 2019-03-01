<template>
  <div id="channel">
      <h1>Channel Component</h1>
      <p>favChannels_id:  {{favChannels}} </p>
      <div>
          <p v-for="channel in channels" :key="channel.id"> 
             <img @click="changeChannelId(channel.id)" :src="channel.image" alt="">    {{channel.name}}
             <span @click="addToFavChannel(channel.id)"> + </span>
          </p>

      </div>
  </div>
</template>

<script>
import dataStore from "../store/dataStore.js";
export default {

  data:function(){
    return{
      channelId: 12,
      channels:[],
      favChannels:dataStore.data.favChannels
    }

  },
  methods:{
    addToFavChannel(id)
    {  
      dataStore.methods.addFavChannel(id);
    },
    changeChannelId(id){
    
      dataStore.methods.changeChannelId(id);
    
    }

  },
  async created(){
    const url = "http://api.sr.se/api/v2/channels?format=json&pagination=false";
    const rawChan = await dataStore.methods.getData(url);
    this.channels = rawChan.channels;
  }

}
</script>


<style scoped>
  img{
    width:40px;
    height:40px;

  }
  span{
    border-radius:40%;
    border:1px solid blue;
    font-size:22px;
    padding:0.4%;
    cursor:pointer;
  }


</style>
