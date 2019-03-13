<template>
    <div id="poddFile">

        <h1>Podfiles</h1>
        programId: {{programId}}
        <br>
        <div class="allPodFiles">
            <div  v-for="pod in podfiles" :key="pod.id">
                    <h3> {{pod.title}} </h3>
                    <audio :src="pod.url"></audio>
                    <audio controls>
                        <source :src="pod.url" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
                    <p> {{Date(pod.publishdateutc)}} </p>
            </div>
       </div>

    </div>
</template>

<script>
import dataStore from "../store/dataStore.js";
export default {
    data:function(){
        return{
            programId: dataStore.data.programId,
            podfiles: dataStore.data.podfiles

        }
    },
    created(){
        dataStore.methods.getPodfiles();
    }
}
</script>

<style scoped>

</style>
