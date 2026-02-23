class Task {
    constructor(id, title, description, priority, duedate, complete = false) {
        if (!title || typeof title !== 'string') {
            throw new Error('task title must be a non empty string');
        }
        this.id = id;
        this.title = title;
        this.description = description || "";
        this.priority = priority || "low";
        this.duedate = duedate instanceof Date ? duedate : new Date(duedate);
        this.complete = complete;
    }
    markcomplete() {
        this.complete = true;
    }
    markIncomplete() {
        this.complete = false;
    }
    isOverdue() {
        const today = new Date();
        const due = new Date(
            this.duedate.getFullYear(),
            this.duedate.getMonth(),
            this.duedate.getDate()
        );
        const now = new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate()
        );
        return !this.complete && due < now;
    }
    toJSON() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            priority: this.priority,
            duedate: this.duedate.toISOString(),
            complete: this.complete,
            type: "task"
        };
    }
}
if (typeof window !== "undefined") {
    window.Task = Task;
}
if (typeof module !== "undefined" && module.exports) {
    module.exports = Task;
}