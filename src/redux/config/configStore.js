import {createStore, combineReducers} from "redux";
import todo from "../modules/todo";

const rootReducer = combineReducers({todo});

const store = createStore(rootReducer);

export default store;

//스토어 만들기 끝!   Q.왜 createStore에 줄이 가있죠?  -> 키워딩:createStore 취소선  -> npm remove redux react-redux 한 다음에 npm install redux@4.1.2 react-redux 해보세요 or@reduxjs/toolkit의 권장사용을 유도하기 위해서라고 합니다. 
 // 루트 리듀서를 이용해서, 스토어를 생성했다! 