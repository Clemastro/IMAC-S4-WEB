<!--Here we display all the vessel we want, and sort vesselsData with search and filters-->
<template>
    <div class="vesselGalery">
        <!--We use a v-for to display all vessel from the vesselsData array-->
        <VesselCard v-for="vessel in filteredVesselData" 
            :key="vessel.id"  
            :vesselDataName="vessel.name"
            :vesselDataImg="vessel.media[0].images.background_blur"
            :vesselDataStatus="vessel.production_status"
            :vesselDataType="vessel.type"
            :vesselDataFocus="vessel.focus"
            />
    </div>
</template>

<script>
import VesselCard from './vesselCard.vue'

export default {
    name:"VesselGalery",
    components: {
        VesselCard
    },
    props:{
        vesselsData : Array,
        search: String,
        filters: Array
    },
    computed: {
        //Here we sort the data from vesselsData with the search and filters value
        filteredVesselData: function(){
            //sort with Search
            const filterFunction = (vessel) => vessel.name.toLowerCase().includes(this.search.toLowerCase()) //We don't take imortance of Lowercase and Uppercase
            let data = this.vesselsData.filter(filterFunction)
            
            //sort with Filters (0 -> Status | 1 -> Type |  2 -> Focus)
            if(this.filters[0] != "all"){
                data = data.filter(vessel => vessel.production_status == this.filters[0])
            }
            if(this.filters[1] != "all"){
                data = data.filter(vessel => vessel.type == this.filters[1])
            }
            if(this.filters[2] != "all"){
                data = data.filter(vessel => vessel.focus == this.filters[2])
            }
            return data
        }
    }

}
</script>

<style scoped>
.vesselGalery{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2%;
    grid-row-gap: 10px;
}

@media screen and (max-width: 1200px){
    .vesselGalery{
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (max-width: 300px){
    .vesselGalery{
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>