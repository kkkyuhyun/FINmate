<template>
    <div class="wrap">
        <div class="container">
            <div class="group_box" @click="router_createGroup" >
                <p class="plus">+</p>
            </div>
            <div class="group_box" @click="router_groupPage">
                <h1>Finmate</h1>
                <h1>도쿄여행</h1>
                <img src="../../assets/images/boat.jpg" class="group_box_img">
            </div>
            <div class="group_box">3</div>
            <div class="group_box">4</div>
            <div class="group_box">5</div>
            <div class="group_box">6</div>
        </div>  
    </div>
</template>

<script>
export default {
    methods: {
        router_createGroup() {
            this.$router.push('/CreateGroup');
        },
        router_groupPage() {
            this.$router.push('/GroupDetail');
        },
    },
};
</script>

<style scoped>
.container {
    width: 1400px;
    height: auto;
    margin: auto;
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
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
    float: left;
    text-align: left;
    box-shadow: 0px 0px 10px 0px rgb(180, 180, 180);

}

.group_box h1 {
    margin-top: 10px;
}

.plus {
    font-size: 150px;
    margin: 0;
    padding-bottom: 50px;
}

.group_box_img {
    border: 1px solid rgb(161, 161, 161);
    border-radius: 30px;
    width: 90%;
    height: 260px;
    margin: 10px;
}
</style>
