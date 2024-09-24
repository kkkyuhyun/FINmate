<template>
    <div class="wrap">
        <div class="wrap_box">
            <!-- 글제목 -->
            <div class="board_Header">
                <h2>이거 살건데 어떰?</h2>
                <div class="board_Header_right">
                    <div>
                        <p>2024.9.30</p>
                    </div>
                    <div class="member_box">
                        <img src="../../assets/images/member.jpg" class=" member_img">
                        <h3>황근원</h3>
                    </div>
                </div>
            </div>

            <!-- 글내용 -->
            <div class="board_body">
                <img src="../../assets/images/포도.jpg">
                <p>송이당 천원이라는데 별로면 댓글 ㄱㄱ</p>
            </div>

            <!-- 글 마지막 -->
            <div class="board_bottom">
                <p>수정</p>
                <p>|</p>
                <p>삭제</p>
            </div>

            <!-- 댓글 -->
            <div class="board_comment">
                <div class="member_box">
                    <img src="../../assets/images/member.jpg" class=" member_img">
                    <h3>황근원</h3>
                </div>
                <div class="comment">
                    <p>안익은거 같은데?</p>
                </div>
                <div class="board_comment_right">
                    <p>2024.9.30</p>
                    <p>수정</p>
                    <p>|</p>
                    <p>삭제</p>
                </div>
            </div>
            
            <!-- 댓글 쓰기 -->
            <div class="board_comment">
                <div class="member_box">
                    <img src="../../assets/images/member.jpg" class=" member_img">
                    <h3>황근원</h3>
                </div>
                <textarea class="comment_box"> </textarea>
                <div class="board_comment_right">
                    <button class="btn_submit">작성</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.wrap {
    align-items: first baseline;
}

.wrap_box {
    margin-top: 100px;
    display: block;
}

.board_Header {
    width: 100%;
    padding: 15px 30px;
    border-bottom: 1px solid rgb(206, 206, 206);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.board_Header_right {
    float: right;
    display: flex;
    align-items: center;
}

.board_Header_right p {
    margin-right: 20px;
}

.board_body {
    padding: 20px 30px;
    text-align: left;
}

.board_bottom {
    display: flex;
    padding-left: 10px;
    border-bottom: 1px solid rgb(206, 206, 206);
}

.board_bottom p {
    padding: 10px 5px;
}

.board_comment {
    height: 70px;
    padding: 10px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgb(206, 206, 206);
}

.comment {
    padding-left: 15px;
}

.board_comment_right {
    display: flex;
    margin-left: auto; 
    align-items: center;
    padding-right: 10px;
}

.board_comment_right p {
    padding-left: 10px;
}

.board_comment_write {
    display: flex;
}

.comment_box{
    width: 100%;
    height: 46px;
    margin: 10px;
    font-size: 16px;
}

.btn_submit {
    padding: 0;
    width: 100px;
    height: 46px;
    text-align: center;
    border: 1px solid rgb(194, 194, 194);
}
</style>
