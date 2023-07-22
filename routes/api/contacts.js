const express = require('express');

const {
  listContacts, 
  getContactById, 
  addContact,
  removeContact,
  updateContact,
  updateStatusContact,
} = require('../../controllers/contacts');

const {validateBody, isValidId} = require('../../middlewares');

const {schemas} = require('../../models/contact');

const router = express.Router();

router.get('/', listContacts);

router.get('/:id', isValidId, getContactById);

router.post('/', validateBody(schemas.addSchema), addContact);

router.delete('/:id', isValidId, removeContact);

router.put('/:id', isValidId, validateBody(schemas.addSchema), updateContact);

router.patch("/:id/favorite", isValidId, validateBody(schemas.updateStatusSchema), updateStatusContact);

module.exports = router;  
