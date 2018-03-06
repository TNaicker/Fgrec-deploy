const expect = require('chai').expect;

const todos = (state = [], action) => {

  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        }
      ];
    default:
      return state;
  }

};

const testAddTodo = () => {
  const stateBefore = [];
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: 'false',
    }
  ];
    expect(stateBefore, action)
      .to.equal(stateAfter);
}

testAddTodo();
console.log('tests passed');
