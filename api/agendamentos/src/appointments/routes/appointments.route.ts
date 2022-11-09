import { Router } from  'express';
import { appointmentRepository } from '../factories/appointments.factory';
import { AppointmentModel } from '../models/appointment.model';

const router = Router();

/**
 * POST - Criar
 * GET - Buscar
 * PUT - Atualizar por completo
 * PATCH - Atualizar parcialmente
 * DELETE - Remover
 * OPTIONS - Verificar
 * HEAD - Nao importa
 */

router.post('/appointments', async (request, response) => {
    const { start, end, customerName, customerPhoneNumber } = request.body

    const appointmentAlreadyExists = await appointmentRepository.findByDate(
        new Date(start),
        new Date(end)
    )

    if (appointmentAlreadyExists.length > 0) {
        return response.status(400).json({ error: 'Appointment already exists' })
    }

    // Format to timestamp
    const formattedStart = new Date(start).getTime()
    const formattedEnd = new Date(end).getTime()

    await AppointmentModel.create({
        start: formattedStart,
        end: formattedEnd,
        customerName,
        customerPhoneNumber,
    })
    return response.status(201).json();
});

router.get('/appointments', async (req, res) => {
    const { start, end } = req.query;
    let appointments = [];

    if (start && end) {
        appointments = await appointmentRepository.findByDate(
            new Date(Number(start)),
            new Date(Number(end))
        );
    } else {
        appointments = await appointmentRepository.find();
    }

    return res.status(200).json({ appointments });
})

router.get('/appointments/:id', async (req, res) => {
    const appointment = await appointmentRepository.findById(Number(req.params.id));
    return res.status(200).json({ appointment });
})

export { router };
