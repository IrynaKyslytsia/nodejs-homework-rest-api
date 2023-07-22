const express = require('express');

const {
  listContacts, 
  getContactById, 
  addContact,
  removeContact,
  updateContact,
  updateStatusContact,
} = require('../../controllers');

const {validateBody, isValidId} = require('../../middlewares');

const {schemas} = require('../../models');

const router = express.Router();

router.get('/', listContacts);

router.get('/:id', isValidId, getContactById);

router.post('/', validateBody(schemas.addSchema), addContact);

router.delete('/:id', isValidId, removeContact);

router.put('/:id', isValidId, validateBody(schemas.addSchema), updateContact);

router.patch("/:id/favorite", isValidId, validateBody(schemas.updateStatusSchema), updateStatusContact);

module.exports = router;  
