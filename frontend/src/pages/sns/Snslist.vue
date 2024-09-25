<template>
    <div v-for="(sns, index) in snsList" :key="index" class="sns_box">
        <div>
            <h3>{{ sns.name }}님(이) 목표금액 {{ sns.goalPercent }}% 달성했습니다</h3>
        </div>
        <div class="sns_box_right">
            <p>❤️{{ sns.likes }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            snsList: [
                {
                    name: '황근원',
                    goalPercent: 50,
                    likes: 2
                },
                {
                    name: '이영환',
                    goalPercent: 90,
                    likes: 5
                }
            ]
        }
    }
}
</script>

<style scoped>
.sns_box {
    width: 100%;
    height: 70px;
    background-color: var(--btn-blue);
    border-radius: 20px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding: 0 30px;
}

.sns_box:nth-child(2n),
.sns_box:nth-child(2n) .member_box {
    background-color: rgb(230, 203, 255);
}

.sns_box_right {
    display: flex;
    margin-left: auto; 
    align-items: center;
}

.sns_box_right p {
    font-size: 20px;
}


</style>
