<script setup>
import Snslist from './Snslist.vue';
import Snslist2 from './Snslist2.vue';
import MyGoal from './MyGoal.vue';
</script>

<template>
    <div class="wrap">
        <div class="container">
            <!-- 목표 -->
            <div class="item goal">
                <MyGoal></MyGoal>
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

.goal {
    display: flex
}

.sns {
    display: flex;
    flex-direction: column;
}

</style>
