import { categoryMaker, taskMaker } from './CategoryClass';

const categoryController = (() => {


    function getCategories() {
        console.log(JSON.parse(localStorage.getItem('Categories')));
        return JSON.parse(localStorage.getItem('Categories'));
    }



    function getTasks() {
        return JSON.parse(localStorage.getItem('Tasks'));

    }




    function CreateTask(name, categoryParent, dueDate, description, priority, completed) {
        let ArrayOfTasks = [];
        let checkTask = getTasks();
        let taskID = Math.floor(Math.random() * 1471 / 7.5 * 1.032);

        if (checkTask != null && checkTask.length != 0) {
            ArrayOfTasks = getTasks();

            let newTask = new taskMaker(categoryParent, name, description, priority, dueDate, taskID, completed);
            ArrayOfTasks.push(newTask);
            localStorage.removeItem('Tasks');
            localStorage.setItem('Tasks', JSON.stringify(ArrayOfTasks));
            console.log('Task Added');

        } else {

            let newTask = new taskMaker(categoryParent, name, description, priority, dueDate, taskID, completed);
            ArrayOfTasks.push(newTask);
            localStorage.setItem('Tasks', JSON.stringify(ArrayOfTasks));
            console.log('Task made');

        }





    }





    function CreateCategory(name) {
        let ArrayOfCategories = [];
        let checkCate = getCategories();
        let newCategory = new categoryMaker(name);
        if (checkCate != null && checkCate.length != 0) {
            ArrayOfCategories = getCategories();
            for (let i = 0; i < ArrayOfCategories.length; i++) {
                if (ArrayOfCategories[i].CategoryName == newCategory.CategoryName) {
                    console.log('That Category is already created');
                    return false;
                } else {
                    if (i == ArrayOfCategories.length - 1) {
                        ArrayOfCategories.push(newCategory);
                        localStorage.removeItem('Categories');
                        localStorage.setItem('Categories', JSON.stringify(ArrayOfCategories));
                        console.log('Category Added');
                        return true;
                    }

                }
            }
        } else {
            ArrayOfCategories.push(newCategory);
            localStorage.setItem('Categories', JSON.stringify(ArrayOfCategories));
            console.log('Category made');
            return true;
        }





    }

    function DeleteCategory(name) {
        let deleteCate = getCategories();


        for (let i = 0; i < deleteCate.length; i++) {
            if (deleteCate[i].CategoryName == name) {


                deleteCate.splice(i, 1);


                localStorage.removeItem('Categories');
                localStorage.setItem('Categories', JSON.stringify(deleteCate));
                return true;
            }


        }

    }


    //not done 
    function EditCategory(name) {
        let ArrayOfCategories = getCategories();
        for (let i = 0; i < ArrayOfCategories.length; i++) {
            if (ArrayOfCategories[i].CategoryName == name) {
                console.log(ArrayOfCategories[i]);
                ArrayOfCategories[i].CategoryName = name;
                localStorage.removeItem('Categories');
                localStorage.setItem('Categories', JSON.stringify(ArrayOfCategories));
                return true;
            }

        }

    }





    return { getCategories, getTasks, CreateCategory, DeleteCategory, EditCategory, CreateTask }



})();


export { categoryController }