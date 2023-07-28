const express = require('express');

const {ctrl} = require('../../controllers');

const {validateBody, isValidId, authenticate} = require('../../middlewares');

const {contactSchemas} = require('../../models');

const router = express.Router();

router.get('/', authenticate, ctrl.listContacts);

router.get('/:id', authenticate, isValidId, ctrl.getContactById);

router.post('/', authenticate, validateBody(contactSchemas.addSchema), ctrl.addContact);

router.delete('/:id', authenticate, isValidId, ctrl.removeContact);

router.put('/:id', authenticate, isValidId, validateBody(contactSchemas.addSchema), ctrl.updateContact);

router.patch("/:id/favorite", authenticate, isValidId, validateBody(contactSchemas.updateStatusSchema), ctrl.updateStatusContact);

module.exports = router;  
