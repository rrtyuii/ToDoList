import { auth, db } from './auth'
import { categoryController } from './database'
import { EventHandler } from './EventHandler'
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

    let categoryFormBox = document.querySelector("#newCategoryInput");


    function removeNode(node) {
        while (node.firstChild) {
            removeNode(node.firstChild);
        }
        node.remove();
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


    }

    function closeMenu() {
        // menu.animate([
        //     { transform: 'translateX(0px)' },
        //     { transform: 'translateX(-305px)' },
        // ], {
        //     duration: 300,
        //     easing: 'ease-in',
        // });
        // underlayer.animate([
        //     { width: '305px' },
        //     { width: '0px' },
        // ], {
        //     duration: 300,
        //     easing: 'ease-in',



        //     fill: 'forwards',
        // });
        // setTimeout(() => {
        //     removeNode(menu);
        // }, 300);

        menu.style.width = "0";
        menu.style.padding = "0";
        menu.classList.add('closed');
        content.style.marginLeft = "0"

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


    function updateNewCategory(CategoryName) {

        let li = document.createElement('li');
        li.classList.add('categoriesSelection')
        let para = document.createElement('p');
        para.classList.add('categoryName');
        para.textContent = CategoryName;

        let buttonContainer = document.createElement('div');
        buttonContainer.classList.add('editDeleteContainer');

        let EditButton = document.createElement('button');
        EditButton.classList.add("editButton");
        EditButton.setAttribute('id', 'edit');
        EditButton.innerHTML = "<img src='Images/edit.svg'>"
        buttonContainer.appendChild(EditButton);
        EditButton.addEventListener('click', function() {
            categoryController.EditCategory(CategoryName);
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





    return { toggleMenu, menu, menuButton, removeNode, addMenuItems, toggleCategoryForm, CategoryFormButton, cancelNewCategoryButton, DeleteCategory, updateNewCategory, addCategorybutton, categoryFormBox }

})();






// <
// ul id = "catogories" >
//     <
//     li id = 'allTasks'
// class = "selectedCategory categoriesSelection" >
//     All Tasks <
//     /li>

// <
// li class = "categoriesSelection" >
//     <
//     p class = 'categoryName' > test test < /p> <

//     div class = "editDeleteContainer" >
//     <
//     button id = "edit"
// class = 'editButton' >
//     <
//     img src = "Images/edit.svg" >
//     <
//     /button>

// <
// button id = "delete"
// class = "deleteButton" >
//     <
//     img src = 'Images/delete.svg' >
//     <
//     /button>

// <
// /div> < /
// li >

//     <
//     /ul>

// <
// button id = "newCategory" >
//     <
//     p >
//     <
//     img src = "Images/plus.svg" >
//     New Category <
//     /p> < /
//     button >


export { domManipulation }