<template>
    <!--The footer is composed as a simple banner with text-->
    <div class="footer">
        <p>C.BOURHIS - Copyright - 2022 | cgr | Mention Légale</p>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
.footer {
    background-color: #030303;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

p{
    color: #2e2e2e;
    font-family: Arial, Helvetica, sans-serif;
}
</style>