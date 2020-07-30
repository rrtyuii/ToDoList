import { domManipulation } from './DomManipulation'

import { auth, db } from './auth'
import { EventHandler } from './EventHandler'





(function() {
    try {
        EventHandler.load();

        domManipulation.loadAllTask();
        EventHandler.menuButtonToggle();
        EventHandler.newCategoryButtonToggle();
        EventHandler.CreateCategory();
        EventHandler.handleSubmitForNewCategory();
        EventHandler.AllTaskClick();
        EventHandler.onNewTaskClick();
        EventHandler.onCancelNewTask();


    } catch (error) {
        EventHandler.menuButtonToggle();
        domManipulation.loadAllTask();
        EventHandler.newCategoryButtonToggle();
        EventHandler.CreateCategory();
        EventHandler.handleSubmitForNewCategory();
        EventHandler.AllTaskClick();
        EventHandler.onNewTaskClick();
        EventHandler.onCancelNewTask();


    }
}());