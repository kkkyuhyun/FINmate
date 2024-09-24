<template>
    <div class="wrap">
        <div class="container">
            <div class="item cal">
                <div>설명하는 부분</div>
            </div>
            <div class="item group_box" @click="router_createGroup">
                <p class="plus">+</p>
            </div>
        </div>  
    </div>
</template>

<script>
export default {
    methods: {
        router_createGroup() {
            this.$router.push('/CreateGroup');
        },
    },
};
</script>

<style scoped>
.container {
    width: 1400px;
    margin: auto;
    margin-top: 100px;
	display: grid;
    row-gap: 10px;
	column-gap: 10px;
    text-align: center;
}

.item {
    margin: 7px;
    padding: 10px;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px 0px rgb(180, 180, 180);
    display: flex;
    justify-content: center;
    align-items: center;
}

.item:nth-child(1) {
	grid-column: 1 / span 4;
    height: 500px;
    
}

.item:nth-child(2) { 
    grid-column: 3 /span 1;
}

.cal div {
    width: 100%;
    height: 100%;
    background-color: var(--btn-blue);
}

.group_box {
    width: 400px;
    height: 400px;
    margin: 10px;
    border-radius: 30px;
    background-color: var(--btn-blue);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.plus {
    font-size: 200px;
    font-weight: 600;
    margin: 0;
    padding-bottom: 50px;
}

</style>
