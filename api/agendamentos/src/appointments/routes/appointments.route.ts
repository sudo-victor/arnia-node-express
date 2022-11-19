import { NextFunction, Router } from  'express';
import { appointment } from '../factories/appointments.factory';

const appointmentRouter = Router();

appointmentRouter.post('/', appointment.create.bind(appointment));
appointmentRouter.get('/', appointment.findAll.bind(appointment));
appointmentRouter.get('/:id', appointment.findAll.bind(appointment));

export { appointmentRouter };