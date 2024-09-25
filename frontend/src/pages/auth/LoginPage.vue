<template>
<div class="wrap">
    <div class="wrap_box">
        <div class="wrap_box_intro"></div>
        <div class="wrap_box_login">
            <h1>Finmate</h1>
            <form>
                <div>
                    <input type="text" class="input_box" placeholder="아이디 입력" required>
                </div>
                <div>
                    <input type="password" class="input_box" placeholder="비밀번호 입력" required>
                </div>
                <button type="submit" class="btn_submit">
                    <h2>login</h2>
                </button>
            </form>
            <div class="wrap_box_auth">
                <ul>
                    <li><router-link to="/join" class="wrap_box_auth_li">회원가입</router-link></li>
                    <li><router-link to="/findid" class="wrap_box_auth_li" >아이디 찾기</router-link></li>
                    <li><router-link to="/findpw" class="wrap_box_auth_li" >비밀번호 찾기</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
</script>

<style scoped>
.wrap {
    background-color: var(--background-color);
}

.wrap_box_intro {
    width: 750px;
    height: 550px;
    border-radius: 10px 0px 0px 10px;
    background-color: #a8d1fd;
}

.wrap_box_login {
    width: 450px;
    height: 550px;
    border-radius: 0px 10px 10px 0px;
    background-color: #fff;
    text-align: center;
}

.wrap_box_auth {
    width: 450px;
}

.wrap_box_auth_li {
    font-size: 14px;
    color: var(--color-grey-light);
}

.wrap_box_auth_li:hover {
    font-weight: 600;
}

h1 {
    margin: 60px;
}

input {
    margin-bottom: 16px;
}

.wrap_box_auth ul {
    display: flex;
    justify-content: space-around;
    margin: 10px 20px 0px 20px;
}

.wrap_box_auth_li {
    font-size: 14px;
    color: #7a7a7a;
}
</style>
