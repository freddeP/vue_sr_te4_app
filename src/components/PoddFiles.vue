<template>
    <div id="poddFile">

        <h1>Poddfiles Component</h1>
        programId: {{programId}}

    </div>
</template>

<script>
import dataStore from "../store/dataStore.js";
export default {
    data:function(){
        return{
            programId: dataStore.data.programId,


        }
    }
}
</script>

<style scoped>

</style>
