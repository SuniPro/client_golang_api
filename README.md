# Golang 출석체크 Client


## 🖥️ 프로젝트 소개
go - React 기반 프로젝트이며, 게임에서 보편적으로 활용하는 출석체크 기능입니다.

go는 python 혹은 java의 mvc - mvt 패턴과 유사하게 작업되었습니다. 

자세한 사항은 https://github.com/SuniPro/golang_api_ec2 을 참고 바랍니다.

해당 repository 는 상기 기능의 view 단이며, jwt 및 아래의 일부 기능만이 식별되는 프로젝트입니다.


* data binding 기능 및 auth 기능이 확인 가능합니다.

<br>

## 🕰️ 개발 기간
- 22. 10. 22. ~ 22. 11. 5.

### ⚙️ 개발 환경
- `React`
- **IDE** : Webstorm

## 📌 주요 기능
#### 로그인
- JWT token 발급
#### 회원가입
- ID 중복 체크
- 자동 닉네임 생성
- 최종로그인 일자 확인
#### 출석체크
- 출석체크
- 일정 이상 일자 출석 시 보상
#### 리포트 등록
- 기타 도커 및 ec2 인프라 구축
