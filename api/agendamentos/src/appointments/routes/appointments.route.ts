import { Router } from  'express';
import { Model } from 'mongoose';
import { appointmentRepository } from '../factories/appointments.factory';
import { AppointmentModel } from '../models/appointment.model';

const router = Router();

router.post('/appointments', async (request, response) => {
    const { start, end, customerName, customerPhoneNumber } = request.body

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
    let appointments = null;

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
    const appointment = await appointmentRepository.find();
    return res.status(200).json({ appointment });
})

export { router };
