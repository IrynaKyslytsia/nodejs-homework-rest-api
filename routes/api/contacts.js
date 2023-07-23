const express = require('express');

const {ctrl} = require('../../controllers');

const {validateBody, isValidId} = require('../../middlewares');

const {contactSchemas} = require('../../models');

const router = express.Router();

router.get('/', ctrl.listContacts);

router.get('/:id', isValidId, ctrl.getContactById);

router.post('/', validateBody(contactSchemas.addSchema), ctrl.addContact);

router.delete('/:id', isValidId, ctrl.removeContact);

router.put('/:id', isValidId, validateBody(contactSchemas.addSchema), ctrl.updateContact);

router.patch("/:id/favorite", isValidId, validateBody(contactSchemas.updateStatusSchema), ctrl.updateStatusContact);

module.exports = router;  
