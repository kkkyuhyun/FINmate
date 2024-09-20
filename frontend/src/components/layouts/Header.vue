<template>
  <header class="header">
    <div class="logo">
      <router-link to="/"><h2>Finmate</h2></router-link>
    </div>
    <ul class="header_menu">
      <li class="header_menu_item"><router-link to="/login">login</router-link></li>
      <li class="header_menu_item">알람</li>
      <li class="header_menu_item">프로필</li>
    </ul>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0 16px 0 16px;
  background-color: #BAC4DD;
  border-bottom: 1px solid #cecece;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
}

.header_menu{
  display: flex;
}

.header_menu_item{
  padding: 8px 12px;
  cursor: pointer;
  color: black;
  border: 1px solid transparent;
  border-radius: var(--size-border-radius);
}


</style>