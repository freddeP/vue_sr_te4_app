<template>
  <div id="program">
      <h1>Program Component</h1>
       channelId:  {{channelId}} <br> programId: {{programId}} <br>

       <input v-on:keydown.13="selectProgram" v-on:keydown.40.39="arrowSelect"  type="text" placeholder="sök program" v-model="searchValue">
    
        <hr>
      <div class='programs'  v-for="program in filteredPrograms" :key="program.id" :id="program.id">
          <span>  <img :src="program.programimage" alt="">  {{program.name}}  </span> <button  @click="saveFav(ev, program.id)"> + </button>

      </div>


  </div>
</template>

<script>
import dataStore from "../store/dataStore.js";
export default {

    data: function(){
        return {
            programs:dataStore.data.programs,
            channelId:dataStore.data.channelId,
            programId:dataStore.data.programId,
            searchValue:"",
            count:0
        }
    },
    created(){
     dataStore.methods.getPrograms();

    },
    computed:{
        // Metod som påverkar datan: programs direkt...
        filteredPrograms:function(){
            return this.programs.filter((program)=>{
                return program.name.toLowerCase().match(this.searchValue.toLowerCase());
            })
        }
    },
    methods:{

        saveFav(ev,id){
            window.event.stopPropagation();
            
            dataStore.methods.addFavProgram(id);
            dataStore.methods.syncFavProgram();
        },
        searchPrograms(){
            // metod används inte längre...
           this.results = this.programs.filter((program)=>{
                if(this.searchValue != "")
                { 
                    let r = program.name.toLowerCase().search(this.searchValue.toLowerCase());
                    if(r != -1) return program;
                }
            });
        },
        arrowSelect(){
            let programs = document.getElementsByClassName("programs");
        
            if(document.querySelector(".selected"))
            document.querySelector(".selected").classList.remove("selected");

            programs[this.count].classList.add("selected");
            this.count++;
            if(this.count>programs.length-1)
            {
                this.count = 0;
            }

        
        },
        selectProgram(id){
            
            if(parseInt(id)=== id)
            dataStore.methods.setProgramId(id);
            else if(document.querySelector(".selected"))
            {
                const selected = document.querySelector(".selected").id;
                dataStore.methods.setProgramId(selected);

            }
            
        }

    }


    


}
</script>



<style scoped>
.programs{
    border: 1px solid #fff;
}
.programs:hover{
   
}
    img{
        width:40px;
        height:40px;
    }
    .programs span{
        cursor:pointer;
    }
    .selected{
        border: 1px solid #909090;
    }

</style>
