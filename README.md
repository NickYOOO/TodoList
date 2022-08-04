# 스파르타코딩클럽 항해 99 

- React 기초 주차 과제


전체 불러오기 (ROAD)
1.useSelector 를 이용해서 list 가져오기
2.isDone을 이용해서 Working /Done 나누기  ()
3.나눈 리스트를 화면에 보여주기

상세 불러오기 (ROAD)

1.params를 이용해서 id 값을 가져온다. (Router 동적라우트 path=“/write/:id”)
2.useSelector를 이용해서 list가져오기
3.list에서 id 값을 기준으로 상세데이터 가져오기


투두 추가하기 (CREATE)
1.사용자 입력값 (input) 받아오기 (title, body)	 => isDone은? 	무조건 false//id 따로 값 저장
2.리듀서에 값을 저장한다. (액션 생성함수 만들고, 디스패치로 액션함수를 실행하게 하여 , 리듀서를 통해 State 변경)

투두 삭제하기 (DELETE)

1.사용자가 선택한 id값을 가진 데이터를 list에서 찾아서 삭제처리해준다. ( id는 list에서map 돌릴떄 받아올 수 있음) (액션함수 만들고, 디스패치로 액션생성함수를 실행하게 하여, 리듀서를 통해 state 변경)


투두 업데이트 (UPDATE)

1. id 값을 이용해서 list에서 해당 데이터를 찾고, 그 데이터 내에 isDone을 변경시켜준다.( 액션생성함수 만들고, 디스패치로 액션생성함수를 실행하게 하여, 리듀서를 통해 state 를 변경해준다.)





라우터