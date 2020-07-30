import { domManipulation } from './DomManipulation'
import { categoryController } from './database'
import { TaskFormController } from './FormController'
const EventHandler = (() => {

    let onClickAdded = false;

    function menuButtonToggle() {
        domManipulation.menuButton.addEventListener('click', () => {
            console.log('working');
            domManipulation.toggleMenu();

        })
    }

    function newCategoryButtonToggle() {
        domManipulation.CategoryFormButton.addEventListener('click', () => {
            domManipulation.toggleCategoryForm();
        })

        domManipulation.cancelNewCategoryButton.addEventListener('click', () => {
            console.log('hi');
            domManipulation.toggleCategoryForm();
        })


    }


    function handleSubmitForNewCategory() {
        domManipulation.categoryFormBox.addEventListener('input', function() {
            CheckIfInputEmpty();
        });
    }

    function CheckIfInputEmpty() {
        if (domManipulation.categoryFormBox.value.length > 1) {
            console.log('hit');
            domManipulation.addCategorybutton.removeAttribute('disabled');
        } else {
            console.log(domManipulation.categoryFormBox.value);
            console.log(domManipulation.categoryFormBox.value.length);
            console.log('value Empty');
            domManipulation.addCategorybutton.setAttribute("disabled", "disabled");

        }
    }


    function CheckIfInputsEmpty(input, button) {
        if (input.value.length > 1) {

            button.removeAttribute('disabled');
        } else {

            button.setAttribute("disabled", "disabled");

        }
    }




    function EditCategory(oldCateName, NewcategoryName) {
        categoryController.EditCategory(oldCateName, NewcategoryName);

    }






    function removeCategory(name, node) {
        categoryController.DeleteCategory(name);
        domManipulation.DeleteCategory(node);

    }



    function CreateCategory() {
        //FIX ERROR HERE cancelNewCatButotn works but the other one doesnt 
        domManipulation.addCategorybutton.addEventListener('click', () => {
            console.log('hit');
            const value = domManipulation.categoryFormBox.value;

            if (categoryController.CreateCategory(value) == true) {
                domManipulation.updateNewCategory(value)
            } else {
                console.log("createCategory Failed");
            }

        });

    }

    //all task category
    function AllTaskClick() {
        let allTask = document.querySelector('#allTasks');
        allTask.addEventListener('click', function() {
            domManipulation.ClickCategory(allTask, 'AllTasks');
            let ul = document.querySelector('#taskList');
            domManipulation.removeNode(ul);
            domManipulation.loadAllTask();
        })
    }


    function load() {
        const arrayCateogry = categoryController.getCategories();

        for (let i = 0; i < arrayCateogry.length; i++) {
            domManipulation.updateNewCategory(arrayCateogry[i].CategoryName);

        }




    }


    function onNewTaskClick() {
        let newTaskButton = document.querySelector('#newTaskButton');
        newTaskButton.addEventListener('click', function() {
            TaskFormController.loadCategoriesIntoSelect();
            domManipulation.unHideNewTaskForm();

            if (onClickAdded == false) {
                onCreateTask()
            }
        })

    }


    function onCancelNewTask() {
        let CancelCreateTask = document.querySelector('#CancelCreateTask');
        let CategorySelect = document.querySelector('#CategorySelectForTask');
        CancelCreateTask.addEventListener('click', function() {
            TaskFormController.unLoadCategoriesSelect();
            domManipulation.hideNewTaskForm();

        })
    }




    function handleSubmitForNewTask() {

        document.querySelector('#TaskNameCreate').addEventListener('input', function() {
            CheckIfTaskInputEmpty();
        });
    }

    function CheckIfTaskInputEmpty() {
        if (document.querySelector('#TaskNameCreate').value.length > 1) {
            console.log('hit');
            document.querySelector('#CreateTaskButton').removeAttribute('disabled');
        } else {

            document.querySelector('#CreateTaskButton').setAttribute("disabled", "disabled");

        }
    }

    // function removeAll() {
    //     document.querySelector('#REMOVEALL').addEventListener('click', function() {

    //         let testnode = document.querySelector('#taskList');
    //         domManipulation.removeNode(testnode);

    //     })

    // }




    function onCreateTask() {
        const createTaskButton = document.querySelector('#CreateTaskButton');
        console.log(createTaskButton);
        handleSubmitForNewTask();
        onClickAdded = true;

        createTaskButton.addEventListener('click', function() {
                console.log('test');
                let A = TaskFormController.getAllTaskValues();

                categoryController.CreateTask(A.TaskName, A.TaskCate, A.TaskDueDate, A.Description, A.TaskPriority, false);
                domManipulation.CreateNewTask();


                TaskFormController.resetTaskForm();
                TaskFormController.unLoadCategoriesSelect();

            }


        )


    }






    return { EditCategory, CheckIfInputsEmpty, onCreateTask, onNewTaskClick, onCancelNewTask, menuButtonToggle, newCategoryButtonToggle, removeCategory, CreateCategory, handleSubmitForNewCategory, load, AllTaskClick }

})();


export { EventHandler };