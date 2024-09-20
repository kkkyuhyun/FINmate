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
      <li class="header_rigth_item">프로필</li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    
    // 사이드바 토글 버튼
    toggle_Sidebar() {
      this.$emit('toggle_sidebar');
    },
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
