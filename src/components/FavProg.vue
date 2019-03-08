<template>

    <div id="favProg">
        <hr>
       <div  class="programs" @click="setProgramId(program.id)" v-for="program in favPrograms" :key="program.id">
            <span> <img :src="program.programimage" alt=""> {{program.name}} </span>


       </div>
     
        <PoddFile />
    </div>    
</template>

<script>
import dataStore from '../store/dataStore';
export default {
    data:function(){
        return {
            favProg:dataStore.data.favProg,
            favPrograms:[]
        }
    },
    beforeCreate(){
        dataStore.methods.syncFavProgram();
    },
     async created(){
        // get all programs
        // filter with id from localstorage
        // display programs and podfiles
        const url = "http://api.sr.se/api/v2/programs/?format=json&pagination=false";
        const programs = (await dataStore.methods.getData(url)).programs;
        // eslint-disable-next-line
        //console.log(programs);
        
        programs.forEach((program)=>{

            for(let i in this.favProg)
            {
                if(this.favProg[i] == program.id)
                this.favPrograms.push(program);
            }

        });

        
    },
    methods:{
        setProgramId(id){
            dataStore.methods.setProgramId(id);
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
