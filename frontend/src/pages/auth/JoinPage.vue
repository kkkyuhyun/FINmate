<template>
    <div class="wrap">
        <div class="wrap_box">
            <h1>회원가입</h1>
            <form>
                <div>
                    <input type="text" class="input_box" placeholder="아이디" required>
                </div>
                <div>
                    <input type="password" class="input_box" placeholder="비밀번호" required>
                </div>
                <div>
                    <input type="password" class="input_box" placeholder="비밀번호 확인" required>
                </div>
                <div>
                    <input type="email" class="input_box" placeholder="이메일" required>
                </div>
                <button type="submit" class="btn_submit"><h2>회원가입</h2></button>
                <div class="wrap_box_auth">
                    <ul>
                        <li><router-link to="/findid" class="wrap_box_auth_li" >아이디 찾기</router-link></li>
                        <li><router-link to="/findpw" class="wrap_box_auth_li" >비밀번호 찾기</router-link></li>
                    </ul>
                </div>  
            </form>
        </div>  
    </div>
</template>

<script setup>
</script>

<style scoped>
.wrap {
    background-color: var(--background-color);
}

.wrap {
    flex-direction: column;
}

.wrap_box {
    flex-direction: column;
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

.wrap_box_auth ul {
    display: flex;
    justify-content: space-around;
    margin: 10px 20px 0px 20px;
}

h1 {
    margin: 0;
    margin-bottom: 40px;
}

input {
    margin-bottom: 16px;
}


</style>