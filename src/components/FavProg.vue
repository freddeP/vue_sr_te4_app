<template>

    <div id="favProg">
        <hr>
        <div class="menuButton" @click="toggle('allPrograms')"> <small dark> Favoriter </small> <v-icon large>menu</v-icon>  </div> 
        <br>
        <div v-if="programShow" id = "allPrograms">
            <div  class="programs" @click="setProgramId(program.id, program.name)" v-for="program in favPrograms" :key="program.id">
                    <span> <img :src="program.programimage" alt=""> {{program.name}} </span>
            </div>
       </div>
       <br><br>
        <div class="menuButton" @click="toggleProgramSearch()"> <small> Program </small> <v-icon large>menu</v-icon> </div>
          <div v-if="ps">
            <ProgramSearch/>
          </div>
        <hr>
        <h1> {{programName}} </h1>
        <div v-if="!ps">
            <PoddFile />
        </div>
       
      
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
    font-size:36px;
    cursor:pointer;
}


</style>
