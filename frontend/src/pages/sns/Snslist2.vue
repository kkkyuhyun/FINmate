<script setup>
</script>

<template>
    <div class="snslist2">
        <div class="sns_box">
            <div class="sns_box_top">
                <div class="letf">
                    <h2>영환의 목표</h2>
                </div>
                <div class="right">
                    <h1>🏅</h1>
                </div>
            </div>
            <div class="goal_bar">
                <div>55%</div>
            </div>
            <div class="sns_box_bottom">
                <div class="sns_box_bottom_left">
                    <h3>목표 : 200,000</h3>
                    <h3>현재 : 100,000</h3>
                </div>
                <div class="sns_box_bottom_right">
                    <p>55%</p>
                </div>
            </div>
        </div>
        <div class="sns_box">2</div>
        <div class="sns_box">3</div>
        <div class="sns_box">4</div>
        <div class="sns_box">5</div>
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
.snslist2 {
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
}
.sns_box {
    width: 430px;
    height: 240px;
    margin: 10px 12px;
    padding: 30px;
    border-radius: 30px;
    background-color: var(--btn-blue);
    cursor: pointer;
    display: flex;
    justify-content: center;
    flex-direction: column;
    float: left;
    text-align: left;
    box-shadow: 0px 0px 10px 0px rgb(180, 180, 180);
}

.sns_box_top {
    display: flex;
    margin: 5px;
}

.goal_bar {
    text-align: center;
    width: 100%;
    height: 30px;
    margin: 5px 0;
    line-height: 30px;
    border-radius: 10px;
    background-color: bisque;
}

.sns_box_bottom {
    display: flex;
    margin-top: 10px;
}

.sns_box_bottom_left h3 {
    margin-bottom: 10px;
}

.sns_box_bottom_right {
    width: 70px;
    height: 70px;
    background-color: rgb(255, 227, 175);
    margin-left: auto;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
