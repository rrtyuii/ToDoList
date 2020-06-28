import { domManipulation } from './DomManipulation'
import { categoryController } from './database'

const EventHandler = (() => {

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



    function removeCategory(name, node) {
        domManipulation.DeleteCategory(node);
        categoryController.DeleteCategory(name);
    }

    function CreateCategory() {
        domManipulation.addCategorybutton.addEventListener('click', () => {
            console.log('hit');
            const value = domManipulation.categoryFormBox.value;
            domManipulation.updateNewCategory(value);
            categoryController.CreateCategory(value);

        });

    }


    function load() {



    }




    return { menuButtonToggle, newCategoryButtonToggle, removeCategory, CreateCategory, handleSubmitForNewCategory }

})();


export { EventHandler };