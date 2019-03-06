const dataStore = {

    data:{
        favChannels:[],
        channelId:[132],
        programs:[],
        programId:[4058],
        podfiles:[]

    },
    methods:{

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
            const url = "http://api.sr.se/api/v2/programs/index?pagination=false&format=json&channelid="+dataStore.data.channelId[0]
            const srPrograms = (await dataStore.methods.getData(url)).programs;
            dataStore.data.programs.splice(0);
            srPrograms.forEach(function(program){
                dataStore.data.programs.push(program);
            });

        },
        async getPodfiles()
        {
            const url = "http://api.sr.se/api/v2/podfiles?size=20&format=json&programid="+dataStore.data.programId[0]
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