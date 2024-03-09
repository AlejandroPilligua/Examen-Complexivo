import express from 'express'
import { getAllMedicos, getMedico, createMedico, updateMedico, deleteMedico } from '../controllers/MedicoController.js'
const router = express.Router()

router.get('/', getAllMedicos)
router.get('/:id', getMedico)
router.post('/', createMedico)
router.put('/:id', updateMedico)
router.delete('/:id', deleteMedico)

export default router
