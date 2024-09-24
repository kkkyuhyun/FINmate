<template>
    <!-- 개별 sns -->
    <div class="sns_box">
        <div class="member_box">
            <img src="../../assets/images/member.jpg" class=" member_img">
            <h3>황근원</h3>
        </div>
        <div>
            <h3>님(이) 목표금액 50% 달성했습니다</h3>
        </div>
        <div class="sns_box_right">
            <p>❤️2</p>
        </div>
    </div>
    <!-- 개별 sns -->
    <div class="sns_box">
        <div class="member_box">
            <img src="../../assets/images/포도.jpg" class=" member_img">
            <h3>이영환</h3>
        </div>
        <div>
            <h3>님(이) 목표금액 90% 달성했습니다</h3>
        </div>
        <div class="sns_box_right">
            <p>❤️5</p>
        </div>
    </div>
</template>

<style scoped>
.sns_box {
    width: 100%;
    height: 70px;
    background-color: var(--btn-blue);
    border-radius: 20px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.sns_box:nth-child(2n),
.sns_box:nth-child(2n) .member_box {
    background-color: rgb(230, 203, 255);
}

.sns_box_right {
    display: flex;
    margin-left: auto; 
    align-items: center;
    padding-right: 30px;
}

.sns_box_right p {
    font-size: 20px;
}


</style>
