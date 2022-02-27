import { Router } from 'express'
import * as todosCtrl from '../controllers/todos.js'
const router = Router()

router.get('/', function(req, res) {
  skillsDb.find({}, function(error, skills) {
    res.render('skills/index', {
      skills: skills,
      error: error
    })
  })
})

export {
  router
}
