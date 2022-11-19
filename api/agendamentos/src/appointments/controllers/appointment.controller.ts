import { Request, Response } from "express"
import { AppointmentsService } from "../services/appointments.service"

export class AppointmentController {
    constructor(
        private readonly appointmentService: AppointmentsService,
    ) {}

    async create(request: Request, response: Response) {
      try {
        const { start, end, customerName, customerPhoneNumber } = request.body

        const appointment = {
            start, end, customerName, customerPhoneNumber 
        }

        await this.appointmentService.create(appointment)

        return response.status(201).json();
      } catch (error: any) {
        return response.status(400).json({ message: error.message});
      }
    }

    async findAll(request: Request, response: Response) {
        try {
            const appointments = await this.appointmentService.findAll()
            return response.status(200).json({ appointments })
        } catch (err: any) {
            return response.status(400).json({ message: err.message })
        }
    }

    async findOne(request: Request, response: Response) {
        try {
            const appointment = await this.appointmentService.findById(+request.params.id)
            if (!appointment) {
                return response.status(404).json({ message: 'Appointment not found' })
            }
            return response.status(200).json({ appointment })
        } catch (err: any) {
            return response.status(400).json({ message: err.message })
        }
    }
}
