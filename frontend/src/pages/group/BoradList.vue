<template>
    <div>
    <table>
        <thead>
            <tr>
                <th>No</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
            </tr>
        </thead>
        <tbody>
            <tr @click="router_BoardDetail" class="borad_row">
                <td>1</td>
                <td>이거 살건데 어떰?</td>
                <td>황근원</td>
                <td>2024.9.30</td>
            </tr>
        </tbody>
    </table>
    </div>
</template>

<script>
export default {
    methods: {
        router_BoardDetail() {
            this.$router.push('/boardDetail');
        },
    },
};
</script>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
}

.borad_row:hover {
    cursor: pointer;
    background-color: rgb(240, 240, 240);
}
</style>
