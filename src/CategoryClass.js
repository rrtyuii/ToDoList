class categoryMaker {
    constructor(CategoryName) {
        this.CategoryName = CategoryName;

    }

    get Category() {
        return this.CategoryName;
    }





}

class taskMaker {
    constructor(CategoryName, taskName, description, priorityLevel, DueDate, taskId, completed) {
        this.CategoryName = CategoryName;
        this.taskName = taskName;
        this.priority = priorityLevel;
        this.dueDate = DueDate;
        this.description = description;
        this.taskId = taskId;
        this.completed = completed
    }




}












export { categoryMaker, taskMaker }