<template>

    <div id="favProg">
        <hr>
       <div  class="programs" @click="setProgramId(program.id, program.name)" v-for="program in favPrograms" :key="program.id">
            <span> <img :src="program.programimage" alt=""> {{program.name}} </span>
       </div>
        <hr>
        <h1> {{programName}} </h1>
        <PoddFile />
        <ProgramSearch/>
    </div>    
</template>

<script>
import dataStore from '../store/dataStore';
export default {
    data:function(){
        return {
            favProg:dataStore.data.favProg,
            favPrograms:dataStore.data.favPrograms,
            programName:""
        }
    },
    beforeCreate(){
        dataStore.methods.syncFavProgram();
    },
     async created(){
         dataStore.methods.getFavPrograms();
/*         const url = "http://api.sr.se/api/v2/programs/?format=json&pagination=false";
        const programs = (await dataStore.methods.getData(url)).programs;

        programs.forEach((program)=>{
            for(let i in this.favProg)
            {
                if(this.favProg[i] == program.id)
                this.favPrograms.push(program);
            }
        }); */

        
    },
    methods:{
        setProgramId(id,name){
            dataStore.methods.setProgramId(id);
            this.programName = name;
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

</style>
