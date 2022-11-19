import { CustomerService } from "../../customers/services/customer.services";
import { CreateAppointmentDTO } from "../dtos/create-appointment.dto";
import { AppointmentRepository } from "../repositories/appointments.repository";

export class AppointmentsService {
    constructor(
        private readonly appointmentRepository: AppointmentRepository,
        private readonly customerService: CustomerService
    ) {}

    async create(appointmentDTO: CreateAppointmentDTO) {
        try {
            const formattedStart = new Date(appointmentDTO.start).getTime();
            const formattedEnd = new Date(appointmentDTO.end).getTime();

            const appointmentAlreadyExists = await this.appointmentRepository.findByDate(
                formattedStart,
                formattedEnd
            );

            if (appointmentAlreadyExists.length > 0) {
                throw new Error('Appointment already exists')
            }

            const customer = await this.customerService.create({
                name: appointmentDTO.customerName,
                phoneNumber: +appointmentDTO.customerPhoneNumber
            })

            const formattedAppointment = {
                start: formattedStart,
                end: formattedEnd,
                customer: (customer as any).id
            }

            const appointmentPersisted = await this.appointmentRepository.create(formattedAppointment)

            return appointmentPersisted;
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async findAll() {
        try {
            const appointments = await this.appointmentRepository.find();
            return appointments
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async findById(id: number) {
        try {
            const appointments = await this.appointmentRepository.findById(id);
            return appointments
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}
