const dataStore = {

    data:{
        favChannels:[],
        channelId:[132],
        programs:[],
        programId:[4058],
        podfiles:[],
        favProg:[],
        favPrograms:[]

    },
    methods:{

        syncFavProgram()
        {
            const pid = JSON.parse(localStorage.favProg);
            dataStore.data.favProg = pid;
        },

        addFavProgram(id){
            const index = dataStore.data.favProg.indexOf(id);
            if(index === -1) dataStore.data.favProg.push(id);
            localStorage.favProg = "";
            localStorage.favProg = JSON.stringify(dataStore.data.favProg); 
            dataStore.methods.getFavPrograms();
        },
        async getFavPrograms()
        {
            const url = "http://api.sr.se/api/v2/programs/?format=json&pagination=false";
            const programs = (await dataStore.methods.getData(url)).programs;
            dataStore.data.favPrograms.splice(0);
            programs.forEach((program)=>{
                for(let i in dataStore.data.favProg)
                {
                    if(dataStore.data.favProg[i] == program.id)
                    dataStore.data.favPrograms.push(program);
                }
            });

        },
        addFavChannel(id){
            var index = dataStore.data.favChannels.indexOf(id);
            if(index === -1)  dataStore.data.favChannels.push(id);       
        },
        getChannelId()
        {
            return dataStore.data.channelId[0];
        },
        changeChannelId(id){
            
            dataStore.data.channelId.pop();
            dataStore.data.channelId.push(id);
            dataStore.methods.getPrograms();
        },
       async getPrograms()
        {
            const url = "https://api.sr.se/api/v2/programs/index?pagination=false&format=json&channelid="+dataStore.data.channelId[0]
            const srPrograms = (await dataStore.methods.getData(url)).programs;
            dataStore.data.programs.splice(0);
            srPrograms.forEach(function(program){
                dataStore.data.programs.push(program);
            });

        },
        async getPodfiles()
        {
            const url = "https://api.sr.se/api/v2/podfiles?size=20&format=json&programid="+dataStore.data.programId[0]
            const srPrograms = (await dataStore.methods.getData(url)).podfiles;
            dataStore.data.podfiles.splice(0);
            srPrograms.forEach(function(program){
                dataStore.data.podfiles.push(program);
            });

        },
        setProgramId(id){
            dataStore.data.programId.pop();
            dataStore.data.programId.push(parseInt(id));
            dataStore.methods.getPodfiles();
        },
        async getData(url){
            let data = await fetch(url);
            data = await data.json();
            return data;
        }


    }
};

export default dataStore;