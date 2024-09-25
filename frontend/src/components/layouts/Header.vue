<template>
    <header class="header">
        <div class="header_left">
        <div class="logo">
            <router-link to="/"><h2>Finmate</h2></router-link>
        </div>
        <button @click="toggle_Sidebar" class="sidebar_btn">☰</button>
        </div>
        <ul class="header_rigth">
            <li class="header_rigth_item"><router-link to="/login">login</router-link></li>
            <li class="header_rigth_item">알람</li>
            <li class="header_rigth_item">
                <a class="profileBtn profileBox" @click="toggle_Profile">프로필</a>
                <!-- <div class="dropdown" v-if="profile_Open">
                    <ul>
                        <li @click="router_profile">개인정보수정</li>
                        <li @click="router_total">모임 친구</li>
                        <li @click="router_logout">로그아웃</li>
                    </ul>
                </div> -->
            </li>
        </ul>
    </header>
</template>

<script>
export default {
    data(){
        return {
            profile_Open: true
        }
    },

    methods: {
        
        // 사이드바 토글 버튼
        toggle_Sidebar() {
            this.$emit('toggle_sidebar');
        },

        // 프로필 토글 버튼
        toggle_Profile() {
            this.profileOpen = !this.profileOpen;
        },

        // 로그아웃
        router_logout() {
            localStorage.removeItem('loginKey')
            console.log("로그아웃 되었습니다.");
            this.profileOpen = false;
            this.$router.push('/');
        },

        // 프로필 수정
        router_profile() {
            this.profileOpen = false;
            this.$router.push('/modify');
        },

        router_total() {
            this.$router.push('/total');
        }
    },
};
</script>

<style scoped>
.header {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 0 16px;
    background-color: var(--header-color);
    border-bottom: 1px solid #b6b6b6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
}

.header_left {
    display: flex;
    align-items: center;
}

.sidebar_btn {
    padding: 5px;
    margin-left: 20px;
    border-radius: 5px;
    background: #8da4c0;
    border: none;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
}

.sidebar_btn:hover {
    background: #72849b;
}

.logo {
    margin-left: 10px;
}

.header_rigth {
    display: flex;
}

.header_rigth_item {
    padding: 8px 12px;
    cursor: pointer;
    color: black;
    border: 1px solid transparent;
    border-radius: var(--size-border-radius);
}

</style>
