import { categoryMaker, taskMaker } from './CategoryClass';

const categoryController = (() => {
    let ArrayOfCategories = []

    function getCategories() {
        return JSON.parse(localStorage.getItem('Categories'));
    }

    function CreateCategory(name) {
        let newCategory = new categoryMaker(name);
        if (ArrayOfCategories.length != 0) {
            for (let i = 0; i < ArrayOfCategories.length; i++) {
                if (ArrayOfCategories[i].Category == newCategory.Category) {
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
        for (let i = 0; i < ArrayOfCategories.length; i++) {
            if (ArrayOfCategories[i].Category == name) {
                delete ArrayOfCategories[i];
                localStorage.removeItem('Categories');
                localStorage.setItem('Categories', JSON.stringify(ArrayOfCategories));
                return true;
            }

        }

    }

    function EditCategory(name) {
        for (let i = 0; i < ArrayOfCategories.length; i++) {
            if (ArrayOfCategories[i].Category == name) {
                ArrayOfCategories[i].UpdateCategory(name);
                localStorage.removeItem('Categories');
                localStorage.setItem('Categories', JSON.stringify(ArrayOfCategories));
                return true;
            }

        }

    }





    return { getCategories, CreateCategory, DeleteCategory, EditCategory }



})();


export { categoryController }