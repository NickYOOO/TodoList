//모듈 만들기!

// todo_list.js

// Actions

const CREATE = 'CREATE';
const REMOVE = 'REMOVE';
const UPDATE = 'UPDATE';

const initialState = {
    list: [{
        title: "1작성하세요",
        body: "1내용을 입력하세요",
        isDone: true, id: 1
    },

    {
        title: "2작성하세요",
        body: "2내용을 입력하세요",
        isDone: false, id: 2
    }
    ],
}


// Action Creators


export function createlist(id, title, body) {
    return {
        type: CREATE,
        payload: {
            id,   //id:id
            title,
            body,
            isDone: false
        }
    }
}

export function removelist(id) {
    return {
        type: REMOVE,
        payload: {
            id,   //id:id
            
        }
    }
}

export function updatelist(id) {
    return {
        type: UPDATE,
        payload: {
            id,   //id:id
            
        }
    }
}

// // 아래는 미들웨어 ->비동기 식으로 수정된 데이터를 전해주는 중간다리, (서버 이용 안해!,<)
// // side effects, only as applicable
// // e.g. thunks, epics, etc
// export function getWidget () {
// return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }



// Reducer
export default function reducer(state = initialState, { payload, type }) {
    switch (type) {
        case CREATE: 

            return {
                ...state,
                list: state.list.concat({
                    id: payload.id,
                    title: payload.title,
                    body: payload.body,
                    isDone: false
                })


            };
        case REMOVE :

            return {
                ...state,
                list: state.list.filter((todo) => todo.id !== payload.id)
            }

            case UPDATE :

                return {
                    ...state,
                    list: state.list.map((todo)=> ({
                        ...todo,
                        isDone:todo.id === payload.id ? !todo.isDone : todo.isDone
                    }))
                }
        
        // do reducer stuff  
        default: return state;
    }
}