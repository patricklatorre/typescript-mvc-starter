import { Router } from 'express'

// API routes
import messagesRoutes from './messages/routes'

const router = Router()

// Configure routes
router.use('/messages', messagesRoutes)

export default router
