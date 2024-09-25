<script setup>
import MyGoal from './MyGoal.vue';
</script>

<template>
    <div class="wrap">
        <div class="container">
            <!-- 내목표 -->
            <div class="item goal">
                <MyGoal></MyGoal>
            </div>

            <!-- 입금 -->
            <div class="item money">
                <h1 class="money_h1">입금액 : </h1>
                <input type="text" class="input_money">
                <button class="btn_submit">입금</button>
            </div>

            <!-- 상세내역 -->
            <div class="item">
                <div>상세내역</div>
            </div>
        </div>  
    </div>
</template>

<style scoped>
.item {
    margin: 7px;
    padding: 10px;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px 0px rgb(180, 180, 180);
    display: flex;
}
.item:nth-child(1) {
	grid-column: 1 / span 1;
    height: 200px;
    
}
.item:nth-child(2) { 
    grid-column: 1 /span 1;
    height: 100px;
}

.item:nth-child(3) { 
    grid-column: 1 /span 1;
    height: 500px;
}

.money {
    display: flex;
    justify-content: center;
    align-items: center;
}

.money_h1 {
    margin-right: 30px;
    line-height: 10px;
    margin-bottom: 5px;
}

.input_money {
    width: 40%;
    height: 50px;
}

.btn_submit {
    width: 100px;
}
</style>
