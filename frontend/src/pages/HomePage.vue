<template>
    <div class="wrap">
        <div class="container">
            <!-- 캘린더 -->
            <div class="item cal">
                <div>캘린더</div>
            </div>
            <!-- 그룹 -->
            <div class="item group">
                <div class="group_box" @click="router_groupPage">
                    <div class="group_box_text">
                        <h1>Finmate</h1>
                        <h1>도쿄여행</h1>
                    </div>
                <img src="../assets/images/boat.jpg" class="group_box_img"> </img>
                </div>
                <div class="group_box" @click="router_groupPage">
                    <div class="group_box_text">
                        <h1>Finmate</h1>
                        <h1>도쿄여행</h1>
                    </div>
                <img src="../assets/images/boat.jpg" class="group_box_img"> </img>
                </div>
            </div>
            <!-- sns -->
            <div class="item sns">
                <div>sns</div>
                <div>sns</div>
                <div>sns</div>
                <div>sns</div>
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
        router_groupPage() {
            this.$router.push('/GroupDetail');
        },
    },
};
</script>

<style scoped>
.item {
    margin: 7px;
    padding: 10px;
    height: 300px;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px 0px rgb(180, 180, 180);
    display: flex;
    justify-content: center;
    align-items: center;
}
.item:nth-child(1) {
	grid-column: 1 / span 2;
    height: 500px;
    
}
.item:nth-child(2) { 
    grid-column: 1 /span 1;
    justify-content: space-between;
}

.item:nth-child(3) { 
    grid-column: 2 /span 1;
    flex-direction: column;
}
.cal div {
    width: 100%;
    height: 100%;
    background-color: var(--btn-blue);
}

.group div{
    margin-right: 10px;
    width: 100%;
    height: 100%;
}
.group div:last-child{
    margin-right: 0px;
}

.sns div {
    margin-bottom: 10px;
    width: 600px;
    height: 30%;
    background-color: var(--btn-blue);
}

.sns div:last-child {
    margin-bottom: 0px;
}

.group_box {
    position: relative;
    width: 400px;
    height: 400px;
    margin: 10px;
    border-radius: 30px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    float: left;
    text-align: left;
}

.group_box_text {
    position: absolute;
    top: 20px;
    left: 20px;
    color: white;
    z-index: 10;
}

.group_box_img {
    border-radius: 30px;
    width: 100%;
    height: 100%;
    margin: 10px;
}

</style>
