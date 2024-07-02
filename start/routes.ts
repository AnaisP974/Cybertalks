/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home').as('home')

router.on('/categories').render('pages/categories').as('category')
router.on('/categories/:id').render('pages/category')

router.on('/events').render('pages/events').as('event')
router.on('/events/:id').render('pages/event')

router.on('/contact').render('pages/contact').as('contact')
