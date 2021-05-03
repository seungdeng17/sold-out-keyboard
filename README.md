# 나만 없는 키보드

[ec2 배포 주소](http://ec2-3-35-141-218.ap-northeast-2.compute.amazonaws.com:3000/)

<br>

## # 개요
갖고 싶은 키보드가 자꾸 품절이라 분노하며 작성한 토이 프로젝트

<br>
<br>

## # 사용법
1. 알람 받을 메일을 **정확하게** 입력
2. 제품 번호 입력 (레오폴드 키보드만 가능..)
   - 제품 번호는 상세보기 페이지 쿼리스트링 참고
   - ![image](https://user-images.githubusercontent.com/58316983/116864192-6eb35e80-ac42-11eb-83e6-73b1993eca45.png)
3. 등록
4. 기다린다

<br>
<br>

## # UI
<img width="502" alt="스크린샷 2021-05-04 오전 1 52 03" src="https://user-images.githubusercontent.com/58316983/116906663-84914580-ac7b-11eb-81eb-8e9a4d9a5ce6.png">

<br>
<br>

<img width="545" alt="스크린샷 2021-05-04 오전 1 52 51" src="https://user-images.githubusercontent.com/58316983/116906671-88bd6300-ac7b-11eb-9d98-5312ac9dc547.png">

<br>
<br>

<img width="657" alt="스크린샷 2021-05-04 오전 2 01 20" src="https://user-images.githubusercontent.com/58316983/116907526-a808c000-ac7c-11eb-9eae-ce2877696254.png">

<br>
<br>

## # 추가 내용
- 스케줄러는 매시 정각에 돈다
- 하나의 메일에 같은 번호를 중복 등록할 수 없다
- 알람을 삭제하려면 메일과 번호를 동일하게 입력하고 삭제 요청을 보낸다
- 메일 당 5건까지 등록 가능하다 (총 100건 등록 가능)
- 검색 값이 없는 번호는 자동 삭제된다
- 알람 메일이 발송된 건은 자동 삭제된다
