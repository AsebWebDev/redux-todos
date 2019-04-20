const initialState = {
  todos: [],
  id: 0
}

function rootReducer(state=initialState, action) {
  let newState = { ...state };  
  switch(action.type) {
    case 'ADD_TODO':
      newState.id++;
      return {
        ...newState,
        todos: [...newState.todos, {task: action.task, id: newState.id}]
      };
      // ADD A TODO
    case 'REMOVE_TODO':
      // REMOVE A TODO
    default: return state;
  }
  
}

const store = Redux.createStore(rootReducer);

$(document).ready(function () {
  $("form").on("submit", function(e) {
    event.preventDefault(); 
    let newTask = $("#task").val();
    store.dispatch({
      type: "ADD_TODO",
      task: newTask
    })
    $("form").trigger("reset");
  })
});