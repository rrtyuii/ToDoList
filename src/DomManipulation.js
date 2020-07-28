import { categoryController } from './database'
import { EventHandler } from './EventHandler'
import { TaskFormController } from './FormController'
import { taskMaker } from './CategoryClass';
const domManipulation = (() => {


    const MainContainer = document.querySelector('#mainContainer');
    let menu = document.querySelector('#menuContainer');
    let menuButton = document.querySelector('#navButton');
    let content = document.querySelector('#contentContainer');
    let CategoriesContainer = document.querySelector("#catogories");
    let CategoryForm = document.querySelector("#NewCategoryForm");
    let CategoryFormButton = document.querySelector("#newCategory");
    let addCategorybutton = document.querySelector("#addNewCategoryButton");
    let CancelNewCategoryButton = document.querySelector("#cancelNewCategoryButton");
    let newTaskButton = document.querySelector("#newTaskButton");
    let categoryFormBox = document.querySelector("#newCategoryInput");
    let newTaskForm = document.querySelector('#newClassForm');

    function removeNode(node) {
        while (node.firstChild) {
            removeNode(node.firstChild);
        }

    }

    function unHideNewTaskForm() {
        newTaskForm.classList.remove('hidden');
    }

    function hideNewTaskForm() {
        newTaskForm.classList.add('hidden');
    }


    function OpenMenu() {

        // menu.animate([
        //     { transform: 'translateX(-305px)' },
        //     { transform: 'translateX(0px)' },
        // ], {   
        //     duration: 300,
        //     easing: 'ease-out',
        // });
        // underlayer.animate([
        //     { width: '0px' },
        //     { width: '305px' },
        // ], {
        //     duration: 300,
        //     easing: 'ease-out',
        //     fill: 'forwards',
        // });
        menu.style.width = "350px";
        menu.style.padding = "0.5rem 2rem 1.5rem";
        menu.classList.remove('closed');

        setTimeout(function() {
            CategoryFormButton.classList.remove('hidden');
            CategoriesContainer.classList.remove('hidden');
        }, 150);



    }

    function closeMenu() {

        menu.style.width = "0";
        menu.style.padding = "0";
        menu.classList.add('closed');

        setTimeout(function() {
            CategoryFormButton.classList.add('hidden');
            CategoriesContainer.classList.add('hidden');
        }, 150);


    }

    function toggleMenu() {
        if (menu.classList.contains("closed")) {
            OpenMenu();
        } else {
            closeMenu();
        }

    }

    function addMenuItems() {
        // let ArrayOfCategory = categoryController.getCategories;
        // const liDiv




        // console.log(ArrayOfCategory);
    }


    function toggleCategoryForm() {
        if (CategoryForm.classList.contains("hidden")) {
            showNewCategoryInput()

        } else {
            hideNewCategoryInput()
        }

    }



    function showNewCategoryInput() {
        CategoryForm.classList.remove("hidden");
        CategoryFormButton.classList.add("hidden");

    }

    function hideNewCategoryInput() {
        CategoryForm.classList.add("hidden");
        CategoryFormButton.classList.remove("hidden");


    }


    function ClickCategory(para, CategoryName) {
        let allP = document.querySelectorAll('p');
        let allLi = document.querySelectorAll('li');

        for (let i = 0; i < allP.length; i++) {
            if (allP[i].classList.contains('selectedCategory')) {
                allP[i].classList.remove('selectedCategory');
            }
        }

        for (let i = 0; i < allLi.length; i++) {
            if (allLi[i].classList.contains('selectedCategory')) {
                allLi[i].classList.remove('selectedCategory');
            }
        }
        para.classList.add('selectedCategory');
        return CategoryName;
    }





    function updateNewCategory(CategoryName) {
        let li = document.createElement('li');
        li.classList.add('categoriesSelection')
        let para = document.createElement('p');
        para.classList.add('categoryName');
        para.textContent = CategoryName;

        para.addEventListener('click', function() {
            ClickCategory(para, CategoryName);

        })

        let buttonContainer = document.createElement('div');
        buttonContainer.classList.add('editDeleteContainer');

        let EditButton = document.createElement('button');
        EditButton.classList.add("editButton");
        EditButton.setAttribute('id', 'edit');
        EditButton.innerHTML = "<img src='Images/edit.svg'>"
        buttonContainer.appendChild(EditButton);


        EditButton.addEventListener('click', function() {
            EventHandler.EditCategory(CategoryName)
        });



        let DButton = document.createElement('button');
        DButton.classList.add("deleteButton");
        DButton.setAttribute('id', 'delete');
        DButton.innerHTML = "<img src='Images/delete.svg'>"
        buttonContainer.appendChild(DButton);
        DButton.addEventListener('click', function() {
            EventHandler.removeCategory(CategoryName, li);
        });

        li.appendChild(para);
        li.appendChild(buttonContainer);
        CategoriesContainer.appendChild(li);

    }


    function DeleteCategory(name) {
        CategoriesContainer.removeChild(name);
    }

    function DeleteTask(node) {
        let ul = document.querySelector('#taskList')
        ul.removeChild(node);

    }




    function CreateNewTask() {
        let ul = document.querySelector('#taskList');
        let A = TaskFormController.getAllTaskValues();
        let taskId = categoryController.getTasks();
        let last = taskId.length - 1
        taskId = taskId[last].taskId;

        let li = document.createElement('li');
        li.classList.add('taskListLi');
        let div1 = document.createElement('div');
        div1.classList.add('topTask');
        li.appendChild(div1);
        let div2 = document.createElement('div');
        div2.classList.add('topTaskLeftAlign');
        div1.appendChild(div2);
        let button1 = document.createElement('button');
        button1.classList.add('expendButton');
        button1.classList.add('vert');
        button1.innerHTML = "<img src ='Images/chevron-down.svg'>";
        //expend function
        button1.addEventListener('click', function() {
            console.log('hit');
            let test = document.getElementById(taskId);
            if (test.classList.contains('hidden')) {
                test.classList.remove('hidden');
                button1.classList.add('vert')
            } else {
                test.classList.add('hidden');
                button1.classList.remove('vert')
            }
        });


        div2.appendChild(button1);

        let div3 = document.createElement('div');
        div3.classList.add('topTaskLeftAlignName');
        div2.appendChild(div3);

        let div4 = document.createElement('div');
        div4.classList.add('topTaskName');

        div4.innerHTML = `<span> ${A.TaskName}</span>`;
        div3.appendChild(div4);

        let div5 = document.createElement('div');
        div5.classList.add('topTaskDueDate');

        div5.innerHTML = `<span> Due: ${A.TaskDueDate}</span>`;

        div3.appendChild(div5);


        let div6 = document.createElement('div');
        div6.classList.add('topTaskRightAlign');

        div1.appendChild(div6);

        let inputCheck = document.createElement('input');
        inputCheck.classList.add('taskCheckBox');
        inputCheck.setAttribute('type', 'checkBox');
        inputCheck.setAttribute('id', 'N' + taskId);

        let labelInput = document.createElement('label');
        labelInput.setAttribute('for', 'N' + taskId);
        div6.append(inputCheck);
        div6.append(labelInput);


        inputCheck.addEventListener('change', function() {
            if (inputCheck.checked) {
                const arrayTask = categoryController.getTasks();
                for (let i = 0; i < arrayTask.length; i++) {
                    if (arrayTask[i].taskId == taskId) {
                        arrayTask[i].completed = true;
                        localStorage.removeItem('Tasks');
                        localStorage.setItem('Tasks', JSON.stringify(arrayTask));
                        DeleteTask(li);
                    }
                }


            }

        })






        let div7 = document.createElement('div');
        div7.classList.add('bottomTask');
        div7.setAttribute('id', taskId);
        li.appendChild(div7);


        let div8 = document.createElement('div');
        div8.classList.add('taskDescription');

        div7.appendChild(div8);

        div8.innerHTML = `<span> ${A.Description}</span>`


        let div9 = document.createElement('div');

        div9.classList.add('taskCategory');

        div9.innerHTML = `${A.TaskCate}`;

        div7.appendChild(div9);


        let div10 = document.createElement('div');
        div10.classList.add('editDeleteButton');

        div7.appendChild(div10);



        let div11 = document.createElement('div');
        div11.classList.add('editTaskButton');
        div10.appendChild(div11);

        let button2 = document.createElement('button');
        button2.classList.add('editController');
        button2.innerHTML = `Edit Task`;
        div11.appendChild(button2);

        //edit
        button2.addEventListener('click', function() {


        })


        let div12 = document.createElement('div');
        div12.classList.add('deleteTaskButton');
        div10.appendChild(div12);
        let button3 = document.createElement('button');
        button3.classList.add('deleteController');

        button3.innerHTML = `Delete Task`;
        div12.appendChild(button3);
        button2.addEventListener('click', function() {


        })


        ul.appendChild(li);

    }



    function loadAllTask() {

        const arrayTask = categoryController.getTasks();
        for (let i = 0; i < arrayTask.length; i++) {
            if (arrayTask[i].completed == false) {
                let taskId = arrayTask[i].taskId;
                let ul = document.querySelector('#taskList');

                let li = document.createElement('li');
                li.classList.add('taskListLi');
                let div1 = document.createElement('div');
                div1.classList.add('topTask');
                li.appendChild(div1);
                let div2 = document.createElement('div');
                div2.classList.add('topTaskLeftAlign');
                div1.appendChild(div2);
                let button1 = document.createElement('button');
                button1.classList.add('expendButton');
                button1.classList.add('vert');
                button1.innerHTML = "<img src ='Images/chevron-down.svg'>";
                //expend function
                button1.addEventListener('click', function() {
                    console.log('hit');
                    let test = document.getElementById(taskId);
                    if (test.classList.contains('hidden')) {
                        test.classList.remove('hidden');
                        button1.classList.add('vert')
                    } else {
                        test.classList.add('hidden');
                        button1.classList.remove('vert')
                    }
                });


                div2.appendChild(button1);

                let div3 = document.createElement('div');
                div3.classList.add('topTaskLeftAlignName');
                div2.appendChild(div3);

                let div4 = document.createElement('div');
                div4.classList.add('topTaskName');

                div4.innerHTML = `<span> ${arrayTask[i].taskName}</span>`;
                div3.appendChild(div4);

                let div5 = document.createElement('div');
                div5.classList.add('topTaskDueDate');

                div5.innerHTML = `<span> Due: ${arrayTask[i].dueDate}</span>`;

                div3.appendChild(div5);


                let div6 = document.createElement('div');
                div6.classList.add('topTaskRightAlign');

                div1.appendChild(div6);

                let inputCheck = document.createElement('input');
                inputCheck.classList.add('taskCheckBox');
                inputCheck.setAttribute('type', 'checkBox');
                inputCheck.setAttribute('id', 'N' + taskId);

                let labelInput = document.createElement('label');
                labelInput.setAttribute('for', 'N' + taskId);
                div6.append(inputCheck);
                div6.append(labelInput);

                inputCheck.addEventListener('change', function() {
                    if (inputCheck.checked) {
                        console.log('checkWorking');
                        arrayTask[i].completed = true;
                        localStorage.removeItem('Tasks');
                        localStorage.setItem('Tasks', JSON.stringify(arrayTask));
                        DeleteTask(li);
                    }

                })

                let div7 = document.createElement('div');
                div7.classList.add('bottomTask');
                div7.setAttribute('id', taskId);
                li.appendChild(div7);


                let div8 = document.createElement('div');
                div8.classList.add('taskDescription');

                div7.appendChild(div8);

                div8.innerHTML = `<span> ${arrayTask[i].description}</span>`


                let div9 = document.createElement('div');

                div9.classList.add('taskCategory');

                div9.innerHTML = `${arrayTask[i].CategoryName}`;

                div7.appendChild(div9);


                let div10 = document.createElement('div');
                div10.classList.add('editDeleteButton');

                div7.appendChild(div10);



                let div11 = document.createElement('div');
                div11.classList.add('editTaskButton');
                div10.appendChild(div11);

                let button2 = document.createElement('button');
                button2.classList.add('editController');
                button2.innerHTML = `Edit Task`;
                div11.appendChild(button2);

                //edit
                button2.addEventListener('click', function() {


                })


                let div12 = document.createElement('div');
                div12.classList.add('deleteTaskButton');
                div10.appendChild(div12);
                let button3 = document.createElement('button');
                button3.classList.add('deleteController');

                button3.innerHTML = `Delete Task`;
                div12.appendChild(button3);
                button2.addEventListener('click', function() {


                })


                ul.appendChild(li);
            }

        }








    }
















    return { loadAllTask, CreateNewTask, unHideNewTaskForm, hideNewTaskForm, ClickCategory, toggleMenu, menu, menuButton, removeNode, addMenuItems, toggleCategoryForm, CategoryFormButton, cancelNewCategoryButton, DeleteCategory, updateNewCategory, addCategorybutton, categoryFormBox }

})();






export { domManipulation };