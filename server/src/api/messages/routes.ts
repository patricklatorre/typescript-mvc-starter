import { Router } from 'express'
import * as ctrl from './controllers'

const router = Router()

router.get('/', ctrl.randMessage)

export default router