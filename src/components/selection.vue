<!--Selection : apply a filter or search a ship-->
<template>
    <div class="selection">
        <!--search bar-->
        <input class="search-bar" type="text" placeholder="Search a ship...">

        <!--Filters-->
        <div  class="filters">
            <select class="filterStatus">
                <option>choix 1</option>
                <option>choix 2</option>
                <option>choix 3</option>
            </select>

            <select class="filterType">
                <option>choix 1</option>
                <option>choix 2</option>
                <option>choix 3</option>
            </select>

            <select class="filterFocus">
                <option>choix 1</option>
                <option>choix 2</option>
                <option>choix 3</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Selection',
}
</script>

<style scoped>
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