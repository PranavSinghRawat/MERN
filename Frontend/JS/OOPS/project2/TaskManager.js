let Task;
if (typeof require !== 'undefined') {
    try {
        Task = require('./Task');
    } catch (e) {

    }
}

class TaskManager {
    constructor() {
        this._tasks = [];
    }
    addTask(task) {
        if (!(task instanceof Task)) {
            throw new Error('Invalid Task');
        }
        const existing = this.getTaskById(task.id);
        if (existing) {
            throw new Error(`Task with id ${task.id} already exists`);
        }
        this._tasks.push(task);
    }

    removetaskid(id) {
        const index = this._tasks.findIndex(task => task.id === id);
        if (index === -1) {
            return false;
        }
        this._tasks.splice(index, 1);
        return true;
    }
    getTaskById(id) {
        return this._tasks.find(task => task.id === id) || null;
    }

    getAllTasks() {
        return [...this._tasks];
    }
    getCompletedTasks() {
        return this._tasks.filter(task => task.completed);
    }

    getPendingTasks() {
        return this._tasks.filter(task => !task.completed);
    }

    getOverdueTasks() {
        return this._tasks.filter(task => task.isOverdue());
    }

    toJSON() {
        return this._tasks.map(task => task.toJSON());
    }
    static fromJSON(dataArray) {
        const manager = new TaskManager();
        if (!Array.isArray(dataArray)) return manager;

        dataArray.forEach(item => {
            if (!item) return;
            const task = new Task(
                item.id,
                item.title,
                item.description,
                item.priority,
                item.dueDate,
                item.completed
            );
            manager.addTask(task);
        });
        return manager;
    }
}
if (typeof window !== 'undefined') {
    window.TaskManager = TaskManager;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TaskManager;
}

