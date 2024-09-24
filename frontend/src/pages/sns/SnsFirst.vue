<script setup>
    import Snslist from './Snslist.vue';
    import Snslist2 from './Snslist2.vue';
</script>

<template>
    <div class="wrap">
        <div class="container">
            <!-- 목표 -->
            <div class="item flex">
                <div class="goal_comment">
                    <h1>나만의 목표를 설정해 보세요!</h1>
                </div>
                <div class="group_box" @click="router_myGoal" >
                    <p class="plus">+</p>
                </div>
            </div>
            
            <!-- sns -->
            <div class="item category">
                <div class="category_top">
                    <button class="category_btn"
                        v-for="category in categories"
                        @click="selected_Category = category"
                        :class="{ checked: selected_Category == category }">
                        {{ category }}
                    </button>
                </div>
                <div v-if="selected_Category">
                    <Snslist v-if="selected_Category == '목록'" />
                    <Snslist2 v-if="selected_Category == '상태'" />
                </div>
            </div>
        </div>  
    </div>
</template>

<script>
export default {
    data() {
        return {
            categories: ["상태", "목록"],
            selected_Category: "목록",
        };
    },
    methods: {
        // 라우팅
        router_myGoal() {
            this.$router.push('/mysns');
        },
    },
};
</script>

<style scoped>
.item {
    margin: 7px;
    padding: 10px;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px 0px rgb(180, 180, 180);
}
.item:nth-child(1) {
	grid-column: 1 / span 1;
    height: 200px;
}
.item:nth-child(2) { 
    grid-column: 1 /span 1;
    height: 600px;
}

.goal_comment {
    padding-left: 100px;
}

.group_box {
    width: 170px;
    height: 170px;
    border-radius: 30px;
    margin: 0 10px;
    margin-left: auto;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(177, 177, 177);
}

.plus {
    font-size: 150px;
    font-weight: 600;
    margin: 0;
    padding-bottom: 40px;
    color: rgb(255, 255, 255);
}


</style>
