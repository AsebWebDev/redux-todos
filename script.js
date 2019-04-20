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
      newState.id--;
      let todos = state.todos.filter(val => val.id !== +action.id)
      return { ...newState, todos}
    default: return state;
  }
  
}

const store = Redux.createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

$("ul").on("click", "button", function(e) {
  store.dispatch({
    type: "REMOVE_TODO",
    id: $(event.target).attr("id")
  });
  $(event.target).parent().remove();
})

$(document).ready(function () {
  $("form").on("submit", function(e) {
    event.preventDefault(); 
    let newTask = $("#task").val();
    store.dispatch({
      type: "ADD_TODO",
      task: newTask
    })
    let currentState = store.getState();
    let $newLi = $("<li>", {
      text: newTask
    });
    let $newButton = $("<button>", {
      text: "X",
      id: currentState.id
    });
    $newLi.append($newButton);
    $("#todos").append($newLi)
    $("form").trigger("reset");
  })
});