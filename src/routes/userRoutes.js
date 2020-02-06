var express = require('express');

var userController = require('../controllers/userController.js');

module.exports= (router) => {


/*
 * GET
 */
router.get('/user', userController.list);

/*
 * GET
 */
router.get('/user/:id', userController.show);

/*
 * POST
 */
router.post('/user', userController.create);

/*
 * PUT
 */
router.put('/user/:id', userController.update);

/*
 * DELETE
 */
router.delete('/user/:id', userController.remove);

/*
 * POST_LOGIN
 */
router.post('/login', userController.login);

}

