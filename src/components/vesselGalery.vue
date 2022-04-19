<template>
    <div class="vesselGalery">
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
        filteredVesselData: function(){
            const filterFunction = (vessel) => vessel.name.toLowerCase().includes(this.search.toLowerCase())
            let data = this.vesselsData.filter(filterFunction)
            if(this.filters[0] != "none" || !this.filters[0] != ""){
                data = data.filter(vessel => vessel.production_status == this.filters[0])
            }
            if(this.filters[1] != "none"){
                data = data.filter(vessel => vessel.type == this.filters[1])
            }
            if(this.filters[2] != "none"){
                data = data.filter(vessel => vessel.focus == this.filters[2])
            }
            console.log(this.filters)
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

@media screen and (max-width: 950px){
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