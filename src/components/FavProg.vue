<template>

    <div id="favProg">
        <hr>
        <div id="menuButton" @click="toggle('allPrograms')">&equiv; Program</div>
        <div class="allPrograms">
       <div  class="programs" @click="setProgramId(program.id)" v-for="program in favPrograms" :key="program.id">
            <span> <img :src="program.programimage" alt=""> {{program.name}} </span>


       </div>
       </div>
    <hr>
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
        const url = "https://api.sr.se/api/v2/programs/?format=json&pagination=false";
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
            this.toggle("allPrograms");
        },
        toggle(cl){
            document.querySelector("."+cl).classList.toggle('hidden');

        }
    }
}
</script>

<style scoped>
img{
    width:40px;
    height:40px;
}
.hidden{
    display:none;
}
.programs{
    cursor:pointer;
}
#menuButton{
    font-size:40px;
    cursor:pointer;
}

</style>
