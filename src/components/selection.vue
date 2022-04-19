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
            search: localStorage.getItem('search') || "",
            filters: localStorage.getItem('filters') || [],
            fStatus:"none",
            fType:"none",
            fFocus:"none",
        }
    },
    methods: {
        giveSearchContent: function() {
			this.$emit("giveSearchContent", this.search)
            this.filters = [this.fStatus, this.fType, this.fFocus]
            this.$emit("giveFilters", this.filters)
        }
    },
    watch: {
        search: function(newSearch){
            localStorage.setItem('search', newSearch)
        },
        filters: function(newFilters){
            localStorage.setItem('filters', newFilters)
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

.filters p{
    color: ivory;
    font-family : sans-serif;
}

select{
    width: 60%;
    margin: 0 0 10px 0;
    padding: 10px;
    background: #131A21;
    border-radius: 0;
    border: #064A7C solid 2px;
    color: rgb(202, 202, 202);
}

@media screen and (max-width: 600px){
    .selection{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .search-bar{
        margin: 0;
        width: 30%;
    }

    .filters{
        margin: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .filters p{
        display: none;
    }

    .filters select{
        margin: 0 2% 0 2%;
    }
}

@media screen and (max-height: 570px){
    .filters p{
        margin: 2%;
    }

    .filters select{
        margin: 2%;
    }
}

</style>