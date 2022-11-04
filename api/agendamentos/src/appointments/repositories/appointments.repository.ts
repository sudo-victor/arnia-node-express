import { Model } from "mongoose";
import { Appointment } from "../models/appointment.model";

export class AppointmentRepository {
    constructor(
        private readonly appointmentModel: Model<Appointment>
    ) {}

    async find() {
        const appointments = await this.appointmentModel.find();
        return appointments;
    }

    async findById(id: number) {
        const appointments = await this.appointmentModel.findById(id);
        return appointments;
    }

    async findByDate(start: Date, end: Date) {
        const appointments = await this.appointmentModel.find({
                $and: [
                    { start: { $gt: start.getTime() }},
                    { end: { $lt: end.getTime() } }
                ]
            });
        return appointments;
    }

    async create(appointmentToCreate: any) {
        const appointment = await this.appointmentModel.create(appointmentToCreate)
    }
}