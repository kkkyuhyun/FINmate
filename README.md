# FINmate
## 👉 팀 소개

| 이영환 | 류혜린 | 전민주 | 김규현 | 윤지민 | 황근원 |
| --- | --- | --- | --- | --- | --- |
| <img width="160px" src="https://avatars.githubusercontent.com/u/97424144?v=4" /> | <img width="160px" src="https://avatars.githubusercontent.com/u/170384649?v=4" /> | <img width="160px" src="https://avatars.githubusercontent.com/u/170384535?v=4" /> | <img width="160px" src="https://avatars.githubusercontent.com/u/169462726?v=4" /> | <img width="160px" src="https://avatars.githubusercontent.com/u/87742666?v=4" /> | <img width="160px" src="https://avatars.githubusercontent.com/u/99851831?v=4" /> |
| [@Yhwani](https://github.com/Yhwani) | [@Ruedal](https://github.com/Ruedal) | [@odeto1310](https://github.com/odeto1310) | [@kkkyuhyun](https://github.com/kkkyuhyun) | [@yyyygmin](https://github.com/yyyygmin) | [@hwang-won](https://github.com/hwang-won)
|팀장 Project Manager, ERD 설계, Back-End 전체 전반적인 관리 | Board Group 게시판 Full Stack, Git 관리와 게시판 기능 구현을 담당하며, 팀 내 코드 병합과 충돌 해결을 주도.| Figma 사용자 흐름 설계 디자인 목업 제작, 캘린더 기능 Full Stack, 회원가입 로그인 ID/PW 찾기 Full Stack| 아이디어 기획,  네비게이션 가드 및 API 문서화 담당. SMTP를 활용한 인증 기능과 회원탈퇴 로직 구현 | SNS 페이지, Board Group 게시판 Group Page제작 Full Stack | Figma 사용자 흐름 설계 디자인 목업 제작, Front-End 전체 전반적인 관리|
<br />

## 📝프로젝트 기록
<a href="https://telling-columnist-d6b.notion.site/KB-IT-s-Your-Life-5-FINmate-112552d86e818199a40fe993117502ff?pvs=4">Visit FINmate Project Report on Notion</a><br>
주제: 편리한 금융생활을 위한 전자지갑 서비스 개발<br>
목적: 금융 초개인화 시대 맞춤형 금융생활을 위한 공용 재정관리 기능 웹 서비스 개발<br>
기능1. 공동 저축 계좌 관리와 금융커뮤니티 (친구와 목표를 세우고 달성 정도 공유) <br>
기능2. 로그인&회원가입 / 캘린더 / 금융 커뮤니티 SNS <br>

## 💻 프로젝트 사용된 주요 기술 스택 
UI/UX: Figma, Notion <br>
Frontend: Vue.js  <br>
Backend: JAVA Spring <br>
Database: MySQL, API <br>
Documentation: Swagger <br>

## ✍ 팀 프로젝트 핵심 기능
→ 모임 게시판 과 SNS 기능 구현

## 💻 내가 맡은 부분과 성과
→ 회원가입 로직 프로세스 구현<br>
→ 회원가입 예외처리 <br>
→ 회원탈퇴 로직 프로세스 구현 <br>
→ 네비게이션 가드  
→ SMTP를 통해 회원가입 로그인 ID찾기, PW찾기 <br>
→ 로그인 창 Design 및 UI/UX 제작 <br>
→ Swagger를 활용하여 API 문서 정리 

## 💥 프로젝트 도중 문제와 해결방안
문제1. 백엔드에서 메일로 ID, PW 인증을 받는 구현에 대한 어려움 <br>
Api Tester Verifycoder를 짰음에도 불구하고 인증번호가 날라오지 않는 경우 발생(Talend API Tester에서 오류 발생) <br>
해결1. SMTP 서버 설정, API Tester에서의 요청 로그 분석 그리고 인증 라이브러리 설정을 검토하여 문제 해결

## 📌 후기 
- 전공자와 비전공자가 함께 모여 이루어진 첫 개발 풀스택 프로젝트 경험으로 실제 현업에서 이루어지고 있는 개발 프로젝트 맛보기 경험 <br>
- 프로젝트를 하면서 전공자 분들에게 많이 질문하며 실제 회사에서 이루어지는 것이라고 생각하고 배워나간다는 자세로 프로젝트 참여<br>
- 프론트엔드 - 백엔드 연동 흐름과 로직에 대한 전반적인 이해와 Flow를 깨달음 <br>
- 프로젝트에서 사용하는 Git 용어와 함께 전반적인 `Commit` `Merge` `Push` `Pull`에 대한 방법을 익히고 학습할 수 있었던 경험 <br>
* 프로젝트 협업을 위한 깃 기본 용어 정리 <br>
1. 커밋: 로컬 저장소의 코드 변경사항을 저장하는 것
` git commit -m "commit message" `
2. 푸시: 로컬 저장소의 코드 변경사항을 원격 저장소에 반영
` git push --set-upstream origin "현재 로컬 브랜치명"`
3. 병합: 특정 브랜치에서 다른 브랜치로 변경 사항을 통합하는 작업
` git merge [브랜치명] `
4. 풀: 원격 저장소의 소스를 가져오고 해당 소스가 현재 내 소스보다 최신 버전일 때 지금의 버전을 해당 소스에 맞춰 올리는 작업 <br>
` git pull [원격저장소] [브랜치명] `
