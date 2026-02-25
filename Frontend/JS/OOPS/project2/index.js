// //for task
// const Task = require('./Task');
// function testTaskClass() {
//     console.log('----Testing Task Class----');
//     const Task1 = new Task(
//         1,
//         'Studing DSA',
//         'practicing Array',
//         'high',
//         '2026-02-20',
//         false,
//     );
//     const Task2 = new Task(
//         2,
//         'Runing 8km',
//         'For Health',
//         'medium',
//         '2026-02-25',
//         false
//     );
//     console.log('Task1: ', Task1);
//     console.log('Task 1 is overdue?', Task1.isOverdue());

//     console.log('Task 2:', Task2);
//     console.log('Task 2 is overdue?', Task2.isOverdue());
//     console.log('Marking Task 1 complete...');
//     Task1.markcomplete();
//     console.log('Task 1 after complete:', Task1);
//     console.log('Task 1 is overdue now?', Task1.isOverdue());

//     console.log('Task 1 JSON:', Task1.toJSON());
// }
// testTaskClass();



// for TaskManager
// index.js (Node version)
const Task = require('./Task');
const TaskManager = require('./TaskManager');

function testTaskAndTaskManager() {
  console.log('--- Testing Task and TaskManager ---');

  const manager = new TaskManager();

  const task1 = new Task(1, 'Study DSA', 'Arrays and strings', 'high', '2026-02-20');
  const task2 = new Task(2, 'Run 8km', 'Morning run', 'medium', '2026-02-25');
  const task3 = new Task(3, 'Watch JS OOP video', 'YouTube tutorial', 'low', '2026-02-21');

  manager.addTask(task1);
  manager.addTask(task2);
  manager.addTask(task3);

  console.log('All tasks:', manager.getAllTasks());

  task1.markcomplete();

  console.log('Completed tasks:', manager.getCompletedTasks());
  console.log('Pending tasks:', manager.getPendingTasks());
  console.log('Overdue tasks:', manager.getOverdueTasks());

  console.log('Removing task 2...');
  manager.removetaskid(2);
  console.log('All tasks after removal:', manager.getAllTasks());

  const jsonData = manager.toJSON();
  console.log('Manager JSON data:', jsonData);

  const loadedManager = TaskManager.fromJSON(jsonData);
  console.log('Loaded manager tasks:', loadedManager.getAllTasks());
}

testTaskAndTaskManager();
