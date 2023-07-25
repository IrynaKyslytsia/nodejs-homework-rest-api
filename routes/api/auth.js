const express = require('express');

const {authCtrl} = require('../../controllers');

const {validateBody} = require('../../middlewares');

const {userSchemas} = require('../../models');

const router = express.Router();

router.post('/register', validateBody(userSchemas.registerSchema), authCtrl.register);

router.post('/login', validateBody(userSchemas.loginSchema), authCtrl.login);

module.exports = router;