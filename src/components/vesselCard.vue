<!--Card with information about a ship-->
<template>
    <div class="vesselCard">
        <!--Name of the ship-->
        <h1>{{vesselData.name}}</h1>

        <!--Picture of the ship-->
        <div  class="vesselImg">
            <!--Categorie(s) of the ship-->
            <img alt="picture-missing" :src="vesselData.media[0].images.background_blur">
            <div class="vesselCardCategories">
                <!--Status-->
                <button class="vesselCardCategoriesStatus">{{vesselData.production_status}}</button>

                <!--Type-->
                <button class="vesselCardCategoriesType">{{vesselData.type}}</button>

                <!--Focus-->
                <button class="vesselCardCategoriesFocus">{{vesselData.focus}}</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VesselCard',
    props:{
        vesselData: Object,
    }
}
</script>

<style scoped>
.vesselCard{
    aspect-ratio: 3/2;
    display:  flex;
    flex-direction: column;
    transition: 0.5s transform cubic-bezier( 0.07, 0.62, 0.45, 0.93 ) ;
}

.vesselCard:hover{
    transform: scale(1.05);
}

h1 {
    height: 15%;
    padding-left: 2%;
    padding-bottom: 2%;
    margin: 0%;
    font-size: 2vw;
    font-family : sans-serif;
    background: #84877D;
    color: white;
}

.vesselImg{
    width: 100%;
    height: 85%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    background: black;
    overflow: hidden;
    position: relative;
}

img{
    width: 100%;
}

.vesselCardCategories{
    margin: 10px;
    width: 70%;
    display: flex;
    position: absolute;
}

button{
    margin: auto;
    width: 30%;
    border-radius: 10px;
    background: none;
    color:white;
    font:bold;

    font-size: 0.5vw;
}


</style>