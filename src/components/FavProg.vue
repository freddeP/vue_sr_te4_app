<template>

    <div id="favProg">
        <hr>
        <div class="menuButton" @click="toggle('allPrograms')"> &equiv; <small>Program</small> </div> 
        <div v-if="programShow" id = "allPrograms">
            <div  class="programs" @click="setProgramId(program.id, program.name)" v-for="program in favPrograms" :key="program.id">
                    <span> <img :src="program.programimage" alt=""> {{program.name}} </span>
            </div>
       </div>
       <br><br>
        <div style="font-size:23px;" class="menuButton" @click="toggleProgramSearch()">&#128270; +</div>
          <div v-if="ps">
            <ProgramSearch/>
          </div>
        <hr>
        <h1> {{programName}} </h1>
        <PoddFile />
      
    </div>    
</template>

<script>
import dataStore from '../store/dataStore';
export default {
    data:function(){
        return {
            favProg:dataStore.data.favProg,
            favPrograms:dataStore.data.favPrograms,
            programName:"",
            ps:false,
            programShow: true
        }
    },
    beforeCreate(){
        dataStore.methods.syncFavProgram();
    },
     async created(){
         dataStore.methods.getFavPrograms();  
    },
    methods:{
        toggleProgramSearch(){
            this.ps = !this.ps;
        },
        setProgramId(id,name){
            dataStore.methods.setProgramId(id);
            this.programName = name;
            this.toggle('allPrograms');
        },
        toggle(){
            this.programShow = ! this.programShow;
        }
    }
}
</script>

<style scoped>
img{
    width:40px;
    height:40px;
}
.programs{
    cursor:pointer;
}
.menuButton{
    font-size:40px;
    cursor:pointer;
}


</style>
