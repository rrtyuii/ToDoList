class categoryMaker {
    constructor(CategoryName) {
        this.CategoryName = CategoryName;

    }

    get Category() {
        return this.CategoryName;
    }

    UpdateCategory(newCategoryName) {
        this.CategoryName = newCategoryName;
    }

}

class taskMaker {
    constructor(CategoryName, taskName, priorityLevel, DueDate) {
        this.CategoryName = CategoryName;
        this.taskName = taskName;
        this.priority = priorityLevel;
        this.dueDate = DueDate;
    }

    get Task() {
        return this.taskName;

    }

    get Category() {
        return this.CategoryName;
    }

    get Priority() {
        return this.priority;
    }

    get dueDate() {
        return this.dueDate;
    }

    UpdatePriority(newPriority) {
        this.priority = newPriority;
    }

    upDateDueDate(newDueDate) {
        this.dueDate = newDueDate;
    }

    UpdateTaskName(newTaskName) {
        this.taskName = newTaskName;
    }

    UpdateCategory(newCateName) {
        this.CategoryName = newCateName;
    }


}












export { categoryMaker, taskMaker }