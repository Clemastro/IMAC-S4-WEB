<!--The menu permit to users to filter the ship galery-->
<template>
    <div class="menu">
        <!--search bar : get the text enter by users and linked to the variable "search"-->
        <input class="search-bar" type="text" v-model="search" placeholder="Search a ship...">

        <!--Filters : users can apply 3 filter to refine a search thanks to 3 select. Each one are linked to a variable-->
        <!--All option are base on the data from the API, each value possible are get from the prop vesselsData-->
        <div  class="filters">
            <p>Status</p>
            <select class="filterStatus" v-model="fStatus">
                <option value="all">all</option>
                <option v-for="filter in filtersStatus" :key="filter" :value="filter">{{filter}}</option>
            </select>

            <p>Type</p>
            <select class="filterType" v-model="fType">
                <option value="all">all</option>
                <option v-for="filter in filtersType" :key="filter" :value="filter">{{filter}}</option>
            </select>

            <p>Focus</p>
            <select class="filterFocus" v-model="fFocus">
                <option value="all">all</option>
                <option v-for="filter in filtersFocus" :key="filter" :value="filter">{{filter}}</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Menu',
    props: {
        //Receive API's datas from the parent showroom
        vesselsData: Array
    },
    data(){
        return {
            //Retrieve data from local storage at the creation, is they don't exist they use a default value
            search : localStorage.getItem('search')       || "",
            filters: [],
            fStatus: localStorage.getItem('filterStatus') || "all",
            fType  : localStorage.getItem('filterType')   || "all",
            fFocus : localStorage.getItem('filterFocus')  || "all",
        }
    },
    methods: {
        //Return search value
        giveSearchContent: function() {
			this.$emit("Search", this.search)
        },

        //Return filters
        giveFilters: function() {
            this.filters = [this.fStatus, this.fType, this.fFocus]
            this.$emit("Filters", this.filters)
        },
    },
    watch: {
        search: function(newSearch){
            this.giveSearchContent()
            localStorage.setItem('search', newSearch)
        },

        fStatus: function(newFilter){
            this.giveFilters()
            localStorage.setItem('filterStatus', newFilter)
        },
        fType: function(newFilter){
            this.giveFilters()
            localStorage.setItem('filterType', newFilter)
        },
        fFocus: function(newFilter){
            this.giveFilters()
            localStorage.setItem('filterFocus', newFilter)
        }
    },

    computed: {
        //Here the options for the filters are get from the API and saved in an array to be read into the <select>
        //Like this if the API add or remove data, the options will change
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
.menu{
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
    .menu{
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