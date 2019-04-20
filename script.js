const initialState = {
  todos: [],
  id: 0
}

function rootReducer(state=initialState, action) {
  switch(action.type) {
    case 'ADD_TODO':
      debugger
      return state;
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