import { domManipulation } from './DomManipulation'
import { categoryController } from './database'
const TaskFormController = (() => {

    let CategorySelect = document.querySelector('#CategorySelectForTask');
    let dateInput = document.querySelector('#dateForTask');

    function loadCategoriesIntoSelect() {

        let ArrayOfCategories = categoryController.getCategories();
        if (ArrayOfCategories == null) {
            ArrayOfCategories = [];
        }
        CategorySelect.options.add(new Option('All Task', "AllTask"));
        var d = new Date();

        var date = d.getDate();
        var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
        var year = d.getFullYear();

        var dateStr = year + "-" + '0' + month + "-" + date;

        dateInput.min = dateStr;
        dateInput.value = dateStr;


        for (let i = 0; i < ArrayOfCategories.length; i++) {

            CategorySelect.options.add(new Option(ArrayOfCategories[i].CategoryName, ArrayOfCategories[i].CategoryName));




        }
    }

    function unLoadCategoriesSelect() {
        let ArrayOfCategories = categoryController.getCategories();
        if (ArrayOfCategories == null) {
            ArrayOfCategories = [];
        }

        CategorySelect.remove(0);
        for (let i = 0; i < ArrayOfCategories.length; i++) {
            CategorySelect.remove(0);
        }
    }


    function validateNewTaskForm() {
        let TaskNameDiv = doucment.querySelector('#TaskNameCreate');
        let TaskDescriptionDiv = document.querySelector('#TaskDescriptionCreate');

        if (TaskNameDiv.value == null || TaskDescriptionDiv.value == null) {
            alert("Please enter Task Name and Description properly");
            return false;
        } else {
            return true;
        }


    }

    function getAllTaskValues() {
        let TaskName = document.querySelector('#TaskNameCreate').value;
        let TaskDescription = document.querySelector('#TaskDescriptionCreate').value;
        let TaskPriorityLevel = document.querySelector('#TaskPriorityDropDown').value;
        let TaskCategory = document.querySelector('#CategorySelectForTask').value;
        let TaskDueDate = document.querySelector('#dateForTask').value;

        var a = {
            TaskName: TaskName,
            Description: TaskDescription,
            TaskPriority: TaskPriorityLevel,
            TaskCate: TaskCategory,
            TaskDueDate: TaskDueDate

        }

        return a;

    }



    function resetTaskForm() {
        document.querySelector('#TaskNameCreate').value = '';
        document.querySelector('#TaskDescriptionCreate').value = '';
        document.querySelector('#newClassForm').classList.add('hidden');

    }





    return { resetTaskForm, loadCategoriesIntoSelect, unLoadCategoriesSelect, validateNewTaskForm, getAllTaskValues }

})();

export { TaskFormController };