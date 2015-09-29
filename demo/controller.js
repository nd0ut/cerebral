import Controller from './../src/index.js';
import Model from 'cerebral-baobab';

const model = Model({
  recorder: {
    isRecording: false,
    isPlaying: false,
    hasRecorded: false
  },
  nextRef: 0,
  url: '/',
  todos: {},
  visibleTodos: [],
  newTodoTitle: '',
  isSaving: false,
  isAllChecked: false,
  editedTodo: null,
  showCompleted: true,
  showNotCompleted: true,
  remainingCount: 0,
  completedCount: 0,
  filter: 'all'
});

const controller = Controller(model);

controller.compute({
  visibleTodos: function (get, refs) {
    return refs.map(function (id) {
      return get('todos')[id];
    });
  }  
});

export default controller;
