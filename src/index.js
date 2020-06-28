import { domManipulation } from './DomManipulation'

import { auth, db } from './auth'
import { EventHandler } from './EventHandler'





(function() {

    EventHandler.menuButtonToggle();
    EventHandler.newCategoryButtonToggle();
    EventHandler.CreateCategory();
    EventHandler.handleSubmitForNewCategory();
}());