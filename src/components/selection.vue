<!--Selection : apply a filter or search a ship-->
<template>
    <div class="selection">
        <!--search bar-->
        <input class="search-bar" type="text" placeholder="Search a ship...">

        <!--Filters-->
        <div  class="filters">
            <select class="filterStatus">
                <option>No filter</option>
                <option v-for="filter in filtersStatus" :key="filter">{{filter}}</option>
            </select>

            <select class="filterType">
                <option>No filter</option>
                <option v-for="filter in filtersType" :key="filter">{{filter}}</option>
            </select>

            <select class="filterFocus">
                <option>No filter</option>
                <option v-for="filter in filtersFocus" :key="filter">{{filter}}</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Selection',
    props: {
        vesselsData: Array
    },
    computed: {
        filtersStatus: function(){
            let filters = []
            for(let vessel of this.vesselsData){
                if(!filters.includes(vessel.production_status)){
                    filters.push(vessel.production_status)
                }
            }
            return filters
        },

        filtersType: function(){
            let filters = []
            for(let vessel of this.vesselsData){
                if(!filters.includes(vessel.type)){
                    filters.push(vessel.type)
                }
            }
            return filters
        },

        filtersFocus: function(){
            let filters = []
            for(let vessel of this.vesselsData){
                if(!filters.includes(vessel.focus)){
                    filters.push(vessel.focus)
                }
            }
            return filters
        }
    }
}
</script>

<style scoped>
.selection{
    display: fixed;
}

.search-bar{
    width: 80%;
    margin-bottom: 50px;
    margin-bottom: 50px;
    border-radius: 15px;
    border: grey solid 2px;
    padding: 5px;
}

.filters{
    display: flex;
    flex-direction: column;
}

select{
    width: 60%;
    margin: 10px 0 10px 0;
    padding: 10px;
    background: none;
    border-radius: 0;
    border: #064A7C solid 2px;
    color: rgb(202, 202, 202);
}

</style>