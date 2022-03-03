<!--Card with information about a ship-->
<template>
    <div class="vesselCard">
        <!--Name of the ship-->
        <h1>{{vesselName}}</h1>

        <!--Picture of the ship-->
        <div  class="vesselImg">
            <!--Categorie(s) of the ship-->
            <div class="vesselCardCategories">
                <!--Status-->
                <button class="vesselCardCategoriesStatus">{{vesselStatus}}</button>

                <!--Type-->
                <button class="vesselCardCategoriesType">{{vesselType}}</button>

                <!--Focus-->
                <button class="vesselCardCategoriesFocus">{{vesselFocus}}</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VesselCard',
    props:{
        vesselName: String,
        vesselImg: String,
        vesselStatus: String,
        vesselType: String,
        vesselFocus: String,
    }
}
</script>

<style scoped>
.vesselCard{
    width: 30%;
    aspect-ratio: 3/2;

    display:  flex;
    flex-direction: column;
}

h1 {
    height: 15%;
    padding-left: 2%;
    padding-top: 2%;
    margin: 0%;

    font-size: 2vw;

    font-family : sans-serif;
    background: #676F54;
    color: white;
}

.vesselImg{
    width: 100%;
    height: 85%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    background: black;
}

.vesselCardCategories{
    width: 50%;
    background: rgb(0, 255, 0);
}

button{
    width: 30%;
    background: none;
}
</style>