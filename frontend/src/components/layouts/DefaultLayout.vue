<script setup>
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';
import Footer from './Footer.vue';
import { ref } from 'vue';

const isSidebar = ref(false);

function btnSidebar() {
    isSidebar.value = !isSidebar.value;
}
</script>

<template>
    <div>
        <Header @toggle_sidebar="btnSidebar" />
        <Sidebar :isOpen="isSidebar" @toggle_sidebar="btnSidebar" />
        <slot></slot>
        <!-- <Footer /> -->
    </div>
</template>

