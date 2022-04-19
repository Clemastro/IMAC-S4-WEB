<template>
    <div class="showroom">
        <Selection :vesselsData="vesselsData" v-on:giveSearchContent="getSearchContent" v-on:giveFilters="getFilters"/>
        <VesselGalery :vesselsData="vesselsData" v-bind:search.sync="searchContent" v-bind:filters="filters"/>
    </div>
</template>

<script>
import Selection from './selection.vue'
import VesselGalery from './vesselGalery.vue'
import getVesselsData from '../services/api/vesselAPI.js'




export default {
    name: 'Showroom',
    components:{
        Selection,
        VesselGalery
    },
    data(){
        return{
            vesselsData: [],
            searchContent: "",
            filters: ["none", "none", "none"]
        }
    },
    created:function(){
        this.retrieveVesselsData()
    },
    methods: {
        async retrieveVesselsData(){
            this.vesselsData = await getVesselsData()
        },

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
    padding: 100px 5% 10% 5%;
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
</style>