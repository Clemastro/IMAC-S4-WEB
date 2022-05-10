<!--Card with information about a ship-->
<template>
    <div class="vesselCard">
        <!--Name of the ship-->
        <h1>{{vesselDataName}}</h1>

        <!--Picture of the ship-->
        <div  class="vesselImg">
            <!--Categorie(s) of the ship-->
            <img alt="picture-missing" :src="vesselDataImg">
            <div class="vesselCardCategories">
                <!--Status-->
                <button class="vesselCardCategoriesStatus">{{vesselDataStatus}}</button>

                <!--Type-->
                <button class="vesselCardCategoriesType">{{vesselDataType}}</button>

                <!--Focus-->
                <button class="vesselCardCategoriesFocus">{{vesselDataFocus}}</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VesselCard',
    props:{
        //props get from the parent vesselGalery
        vesselDataName: String,
        vesselDataImg: String,
        vesselDataStatus: String,
        vesselDataType: String,
        vesselDataFocus: String,
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
    padding-top: 2%;
    margin: 0%;
    font-size: 100%;
    font-family : sans-serif;
    font-style: bold;
    background: #84877D;
    color: white;
    vertical-align: middle;
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

@media screen and (max-width: 950px){
    button{
        font-size: 1vw;
    }
}

</style>