<script setup>
import Borad from './BoradList.vue';
</script>

<template>
    <div class="wrap">
        <div class="container">
            <div class="item group">
                <div class="group_box">
                    <div class="group_box_left">
                        <img src="../../assets/images/boat.jpg" class="group_box_img">
                    </div>
                    <div class="group_box_right">
                        <div   class="group_box_text">
                            <h1>도쿄여행</h1>
                            <h2>목표 금액 : 400,000</h2>
                            <h2>현재 금액 : 200,000</h2>
                        </div>
                    </div>
                    <div class="group_box_bottom">
                        <div>70%</div>
                    </div>
                </div>
            </div>
            <div class="item member">
                <div class="member_title">
                    <h3>멤버</h3>
                    <p>수정</p>
                </div>
                <div class="member_box">
                    <img src="../../assets/images/member.jpg" class=" member_img">
                    <h3>황근원</h3>
                </div>
                <div class="member_box">
                    <img src="../../assets/images/member.jpg" class=" member_img">
                    <h3>황근원</h3>
                </div>
                <div class="member_box">
                    <img src="../../assets/images/member.jpg" class=" member_img">
                    <h3>황근원</h3>
                </div>
                <div class="member_box">
                    <img src="../../assets/images/member.jpg" class=" member_img">
                    <h3>황근원</h3>
                </div>
                <div class="member_box">
                    <img src="../../assets/images/member.jpg" class=" member_img">
                    <h3>황근원</h3>
                </div>
                <div class="member_box">
                    <img src="../../assets/images/member.jpg" class=" member_img">
                    <h3>황근원</h3>
                </div>
            </div>
            <div class="item cal">
                <Borad></Borad>
            </div>
        </div>  
    </div>
</template>

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
    height: 300px;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px 0px rgb(180, 180, 180);
    display: flex;
    justify-content: center;
    align-items: center;
}

.item:nth-child(1) {
	grid-column: 1 / span 9;
    
}
.item:nth-child(2) {
    max-width: 400px; 
    grid-column: 10 /span 1;
    justify-content: space-between;
}

.item:nth-child(3) { 
    height: 500px;
    grid-column: 1 /span 10;
    flex-direction: column;
}
.cal div {
    width: 100%;
    height: 100%;
    background-color: var(--btn-blue);
}

.group_box {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.group_box_left {
    width: 50%;
}

.group_box_right {
    width: 50%;
    display: flex;
    flex-direction: column;
    text-align: left;
}

.group_box_text {
    margin-top: 30px;
    margin-left: 50px;
}

.group_box_text h1{
    margin-bottom: 30px;
}

.group_box_text h2{
    margin-top: 10px;
}

.group_box_bottom {
    width: 100%;
    border-radius: 10px;
    background-color: rgb(240, 108, 108);
    margin-bottom: 10px;
}

.group_box_img {
    border: 1px solid rgb(161, 161, 161);
    border-radius: 30px;
    width: 100%;
    height: 250px;
    margin: 10px;
}

.member {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.member div {
    width: 49%;
    height: 60px;
}

.member_title {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    background-color: white;
    border-radius: 0;
    border-bottom: 1px solid rgb(197, 197, 197);
}

.member div:first-child {
    width: 100%;
    height: 30px;
}

.member_box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: var(--btn-blue);
    border-radius: 10px;
}

.member_img {
    width: 45px;
    border-radius: 100px;
    margin: 0 20px;
}

</style>
