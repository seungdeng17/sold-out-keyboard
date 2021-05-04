# 나만 없는 키보드

2021.05.03 ~ 05.04

[ec2 배포 주소](http://ec2-3-35-141-218.ap-northeast-2.compute.amazonaws.com:3000/)

<br>

## # 개요
갖고 싶은 키보드가 자꾸 품절이라 분노하며 작성한 토이 프로젝트

<br>
<br>

## # 사용법
1. 알람 받을 메일을 **정확하게** 입력
2. 제품 번호 입력 (**레오폴드** 키보드만 지원)
   - 상세보기 페이지 쿼리스트링
   - ![image](https://user-images.githubusercontent.com/58316983/116864192-6eb35e80-ac42-11eb-83e6-73b1993eca45.png)
3. 등록
4. 기다린다

<br>
<br>

## # UI
![스크린샷 2021-05-04 오후 1 49 26](https://user-images.githubusercontent.com/58316983/116962332-a670e380-ace0-11eb-93f1-29325959ae1b.png)

<br>
<br>

![스크린샷 2021-05-04 오후 1 50 15](https://user-images.githubusercontent.com/58316983/116962359-b4beff80-ace0-11eb-9727-07396507a638.png)

<br>
<br>

![스크린샷 2021-05-04 오후 1 56 01](https://user-images.githubusercontent.com/58316983/116962371-bee0fe00-ace0-11eb-86d7-7c2f9866b86b.png)

<br>
<br>

## # 추가 내용
- 스케줄러는 매시 정각에 돈다
- 하나의 메일에 같은 번호를 중복 등록할 수 없다
- 메일 당 5건까지 등록 가능하다 (총 100건 등록 가능)
- 검색 값이 없는 번호는 자동 삭제된다
- 알람 메일이 발송된 건은 자동 삭제된다
