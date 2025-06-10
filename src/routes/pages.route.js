import express from 'express'; 
import {pagesController} from '../controllers/pages.controller.js'
import { contactsController } from '../controllers/contacts.controller.js';


export const route = express.Router();

route.get('/', pagesController.mainPage);

route.post('/contacts', contactsController.contacts);

