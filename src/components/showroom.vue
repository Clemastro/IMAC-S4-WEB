<template>
    <div class="showroom">
        <Selection/>
        <VesselCard vesselName="Test" vesselStatus="Status" vesselType="Type" vesselFocus="Focus"/>
    </div>
</template>

<script>
import Selection from './selection.vue'
import VesselCard from './vesselCard.vue'

export default {
    name: 'Showroom',
    components:{
        Selection,
        VesselCard
    }
}
</script>

<style scoped>
.showroom{
    padding: 10%;
    display: grid;
    grid-template-columns: 20% 80%;
}
</style>