export const todoReducer = (state= [], action)  => {
       switch (action.type) {
           case 'ADD_TODO':
                return [...state, {
                    id: Math.random(),
                    completed: false,
                    content: action.payload
                }];
           case "TOGGLE_TODO":
               return state.map((todo) => {
                   if(todo.id === action.payload){
                       return {...todo, completed: !todo.completed}
                   }
                   return todo;
               });
            case "DEL_TODO":
                return state.filter((todo) => {
                    return todo.id !== action.payload
                })
           default:
               return state;
       }
};