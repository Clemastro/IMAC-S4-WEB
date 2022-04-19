<template>
    <div class="header">
        <a href="https://robertsspaceindustries.com/">
            <img alt="RSI" src="../assets/RSI_Logo.png">
        </a>
    </div>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
.header {
    background-color: #064A7C;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: fixed;
    width: 100%;
    z-index: 1;
    box-shadow: 0px 30px 35px -15px rgba(0,0,0,0.65);
}

a {
    height: 5vw;
    margin-left: 15px;
    min-height: 70px;
}

img{
    max-height: 5vw;
    min-height: 70px;
}
</style>