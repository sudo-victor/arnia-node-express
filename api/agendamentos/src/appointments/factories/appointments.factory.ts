import { AppointmentModel } from "../models/appointment.model"
import { AppointmentRepository } from "../repositories/appointments.repository"

const appointmentRepository = new AppointmentRepository(AppointmentModel)

export { appointmentRepository }