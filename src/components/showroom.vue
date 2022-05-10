<!--The component Showroom is the main content of the web site, it get the menu and the vessel Galery-->
<template>
    <div class="showroom">
        <!--Menu return search and filters informations-->
        <Menu :vesselsData="vesselsData" v-on:Search="getSearchContent" v-on:Filters="getFilters"/>
        <VesselGalery :vesselsData="vesselsData" v-bind:search.sync="searchContent" v-bind:filters="filters"/>
    </div>
</template>

<script>
import Menu from './menu.vue'
import VesselGalery from './vesselGalery.vue'
import getVesselsData from '../services/api/vesselAPI.js'

export default {
    name: 'Showroom',
    components:{
        Menu,
        VesselGalery
    },
    data(){
        return{
            vesselsData: [],
            //Retrieve data from local storage at the creation, is they don't exist they use a default value
            searchContent: localStorage.getItem('search') || "",
            filters: [localStorage.getItem('filterStatus'), localStorage.getItem('filterType'), localStorage.getItem('filterFocus')] || ["all", "all", "all"]
        }
    },
    created:function(){
        //use this function to fetch API at ceation 
        this.retrieveVesselsData()
    },
    methods: {
        async retrieveVesselsData(){
            //call fethe fetch function and await the result
            this.vesselsData = await getVesselsData()
        },

        //set variable from value
        getSearchContent: function(value){
            this.searchContent = value
        },

        getFilters: function(array){
            this.filters = array
        }
    }
}
</script>

<style scoped>
.showroom{
    min-height: 78vh;
    padding: 100px 5% 20px 5%;
    display: grid;
    grid-template-columns: 20% 80%;
    position: relative;
}

.vesselGalery{
    grid-column: 2;
}

.selection{
    width: 20%;
}

@media screen and (max-width: 950px){
    .showroom{
        grid-template-columns: 25% 75%;
    }
}

@media screen and (max-width: 600px){
    .showroom{
        grid-template-columns: 0% 100%;
    }

    .selection{
        width: 90%;
        z-index: 1;
    }

    .vesselGalery{
        margin-top: 15vw;
    }
}

</style>