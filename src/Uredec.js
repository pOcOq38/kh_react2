/*
UseReducer: state가 너무 많아지거나 부모와 자식간의 관계가 복잡한 경우에 
관리를 해주어 빠르게 작업할 수 있게 도와주는 hook

dispatch reducer을 호출함 
     reducer는 자체적으로 메모리를 가지고 있어서 저장소에 가서 현재 state값을 가지고 와 새로운 state값 반환
     reducer => store을 관리함 

     Component -(dispatch)-> Action을 취함 -> Reducer를 Store에서 가져옴
     dispatch({type:'값'});
     dispatch({type:'값', data:'변경될 값'});
*/

import { useReducer } from "react";

function reducer(state, action) {
    switch (state, action) {
        case 'PLUS':
            return state + 1;
        case 'MINUS':
            return state + 1;
        default:
            return state;
    }
}
export default function Count() {

    //const [상태객체, 디스패티함수] = useReducer(reducer 함수, 초기상태)

    const [number, dispatch] = useReducer(reducer,0);

    const onPlus = () => {
        dispatch({ type: 'PLUS' });
    };

    const onMinus = () => {
        dispatch({ type: 'MINUS' });
    };
    return (
        <div>
            <h3>{number}</h3>
            <button onClick={onPlus}>+</button>
            <button onClick={onMinus}>-</button>
        </div>
    )
}

