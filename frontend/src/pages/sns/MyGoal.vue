<template>
    <div class="goal_left">
        <div class="goal_top">
            <h1>나의 목표</h1>
            <h1>🏅</h1>
        </div>
        <div class="goal_bar">50%</div>
        <h2>목표 : 200,000</h2>
        <h2>현재 : 100,000</h2>
    </div>
    <div class="goal_right">
        <div class="goal_box">
            <h1>50%</h1>
        </div>
        <div class="goal_detail" @click="router_myGoal">
            <h1>수정</h1>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        router_myGoal() {
            this.$router.push('/mysns');
        },
    },
};
</script>

<style scoped>
.goal_left {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    padding: 10px;
}

.goal_left h2 {
    margin-bottom: 10px;
}

.goal_top {
    display: flex;
    justify-content: center;
    align-items: center;
}

.goal_top  h1{
    margin-right: 20px;
}

.goal_bar {
    width: 95%;
    margin: 10px;
    border-radius: 10px;
    height: 20px;
    background-color: #ff9b9b;
}

.goal_right {
    margin-left: auto;
    display: flex;
    align-items: center;
}

.goal_box {
    width: 170px;
    height: 170px;
    background-color: rgb(255, 233, 105);
    border-radius: 30px;
    line-height: 170px;
    margin: 0px 10px;
}

.goal_detail {
    width: 100px;
    height: 170px;
    background-color: rgb(189, 189, 189);
    border-radius: 30px;
    line-height: 170px;
    margin: 0px 10px;
    cursor: pointer;
}


</style>
