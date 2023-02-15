<div align="center">
  <img src="https://user-images.githubusercontent.com/110225060/216814005-d3edebfb-d0a8-43ce-9dcb-9b6a3c6d13e5.png" width=200/>

## 🐰 [덕마니](https://www.deokman.site/) 받아!

</div>
  
  <br>

# _덕마니는 어떤 사이트 인가요?_

2023년 계묘년을 맞이하여 새해 소원을 작성할 뿐만아니라 다른 사람의 소원을 함께 응원하여 덕많은 한해가 되보자하여 만든 사이트 입니다!

<br>

# _실행 방법_

### 1. git clone

```
git clone https://github.com/Jyoung706/newYearProject.git
```

### 2. 패키지 설치

```
npm i
```

### 3. .env 파일 설정

```
PORT = {Port 번호}
DB_URI = {데이터베이스 URL}
ex) mongodb://{id}:{password}@{ip address}:{port}/{db name}
API_KEY = {형태소 분석 API key}
API_URI = http://aiopen.etri.re.kr:8000/WiseNLU_spoken
ANALYSISCODE = morp
```

형태소 분석 API의 경우 https://aiopen.etri.re.kr/guide/WiseNLU 에서 key를 발급받을 수 있습니다.

### 4. 서버 실행

```
node .\src\server.js
nodemon ./src/server.js         // 개발 모드로 실행
```

<br>

**기능의 동작은 [API 명세서](https://documenter.getpostman.com/view/22723440/2s8Z6zzrw1#08c2d24d-0bb8-4d68-8c3d-faf1e4da49a7) 참조**

<br>

# _프로젝트 구조_

```
📦 deokman
 ┗ 📂src
  ┣ 📂batch
  ┣ 📂common
  ┣ 📂controllers
  ┣ 📂middleware
  ┣ 📂models
  ┣ 📂routes
  ┣ 📂schema
  ┣ 📂services
  ┣ 📜app.js
  ┗ 📜server.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ ⚙️.env
```

<br>

# _데이터베이스 스키마_

![덕마니 소원](https://user-images.githubusercontent.com/110225060/216817622-a9b8905c-56ce-404e-80b4-019ce80f580a.png)

![덕마니 키워드](https://user-images.githubusercontent.com/110225060/216817619-a3b865bd-2d69-4027-806a-d22841b7486e.png)

<br>

# _개발자 정보_

<div align="center">
  <img src="https://user-images.githubusercontent.com/110225060/216816108-82e39553-7327-4893-958c-1779941b5f19.png" width=300/>

  <br>

### 백엔드

**[전준영](https://github.com/Jyoung706)**
**[김현정](https://github.com/hhhj1008)**

### 프론트엔드

**[박찬영](https://github.com/Poylib)**
**[박유빈](https://github.com/daydreamplace)**
**[정예원](https://github.com/ioni19)**

</div>
