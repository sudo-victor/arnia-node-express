import { customerService } from "../../customers/factories/customer.factory"
import { CustomerService } from "../../customers/services/customer.services"
import { AppointmentController } from "../controllers/appointment.controller"
import { AppointmentModel } from "../models/appointment.model"
import { AppointmentRepository } from "../repositories/appointments.repository"
import { AppointmentsService } from "../services/appointments.service"

function factory() {
    const appointmentRepository = new AppointmentRepository(AppointmentModel)
    const appointmentService = new AppointmentsService(appointmentRepository, customerService)
    const appointmentController = new AppointmentController(appointmentService)
    return appointmentController
}

const appointment = factory();

export { appointment }
