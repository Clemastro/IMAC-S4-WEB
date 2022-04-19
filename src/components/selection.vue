<!--Selection : apply a filter or search a ship-->
<template>
    <div class="selection">
        <!--search bar-->
        <input class="search-bar" type="text" v-model="search" v-on:input="giveSearchContent" placeholder="Search a ship...">

        <!--Filters-->
        <div  class="filters">
            <p>Status</p>
            <select class="filterStatus" v-model="fStatus" v-on:input="giveSearchContent">
                <option value="none">none</option>
                <option v-for="filter in filtersStatus" :key="filter" :value="filter">{{filter}}</option>
            </select>

            <p>Type</p>
            <select class="filterType" v-model="fType" v-on:input="giveSearchContent">
                <option value="none">none</option>
                <option v-for="filter in filtersType" :key="filter" :value="filter">{{filter}}</option>
            </select>

            <p>Focus</p>
            <select class="filterFocus" v-model="fFocus" v-on:input="giveSearchContent">
                <option value="none">none</option>
                <option v-for="filter in filtersFocus" :key="filter" :value="filter">{{filter}}</option>
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
    data(){
        return {
            search:"",
            fStatus:"none",
            fType:"none",
            fFocus:"none",
        }
    },
    methods: {
        giveSearchContent: function() {
			this.$emit("giveSearchContent", this.search)
            const filters = [this.fStatus, this.fType, this.fFocus]
            this.$emit("giveFilters", filters)
        }
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
    position: fixed;
}

.search-bar{
    width: 80%;
    margin-bottom: 50px;
    border-radius: 15px;
    border: grey solid 2px;
    padding: 5px;
}

.filters{
    display: flex;
    flex-direction: column;
}

.filters p{
    color: ivory;
    font-family : sans-serif;
}

select{
    width: 60%;
    margin: 0 0 10px 0;
    padding: 10px;
    background: none;
    border-radius: 0;
    border: #064A7C solid 2px;
    color: rgb(202, 202, 202);
}

</style>