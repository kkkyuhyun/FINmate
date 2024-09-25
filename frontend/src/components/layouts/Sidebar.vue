<template>
<div>
    <aside :class="['sidebar', { 'sidebar_open': isOpen }]">
        <div class="sidebar_menu">
            <ul>
                <li><router-link to="/" class="sidebar_menu_li">home</router-link></li>
                <li><router-link to="/login" class="sidebar_menu_li">login</router-link></li>
                <li><router-link to="/group" class="sidebar_menu_li">group</router-link></li>
                <li><router-link to="/groupfirst" class="sidebar_menu_li">groupfirst</router-link></li>
                <li><router-link to="/sns" class="sidebar_menu_li">sns</router-link></li>
                <li><router-link to="/snsfirst" class="sidebar_menu_li">snsfirst</router-link></li>
            </ul>
        </div>
    </aside>
</div>
</template>

<script>
export default {
    name: 'Sidebar',
    props: {
        isOpen: {
        type: Boolean,
        required: true,
        },
    },
    methods: {
        toggle_Sidebar() {
        this.$emit('toggle_sidebar');
        },
    },
};
</script>

<style scoped>
.sidebar {
    position: fixed;
    top: 72px;
    width: 250px;
    height: 100%;
    left: -250px;
    background-color: var(--sidebar-color);
    padding: 10px;
    transition: left 0.3s ease;
    z-index: 99;
}

.sidebar_open {
    left: 0;
}

.sidebar_menu li {
    padding: 20px 0;
    text-align: center;
}

.sidebar_menu_li {
    margin: 20px 0;
    padding: 20px 80px;
    border-radius: 10px;
    color: #fff;
    font-size: var(--font-regular);
    font-weight: 600;
    text-align: center;
}

.sidebar_menu_li:hover {
    color: #000000;
    background-color: var(--header-color);
}

</style>
