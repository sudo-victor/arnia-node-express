import { Model } from "mongoose";
import { Appointment } from "../models/appointment.model";

/**
 * Rafael: 10:30 até 11:00
 * Victor: 10:40 até 11:30
 * start < 10:40 < end
 * OR
 * Robson: 13:30 até 14:00
 * Victor: 12:00 até 13:40
 * start < 10:40 < end
*/
// Greates than and equal
// Less than and equal
// SELECT * FROM appointemnts
// WHERE appointments.start <= '13:30' AND appoitments.end >= '14:00'

export class AppointmentRepository {
    constructor(
        private readonly appointmentModel: Model<Appointment>
    ) {}

    async find(): Promise<Appointment[]> {
        const appointments = await this.appointmentModel.find().populate('customer');
        appointments.filter((appointment) => {
            const formattedStart = new Date(appointment.start as number);
            formattedStart.getDay()
            formattedStart.getUTCMonth()
        })
        return appointments;
    }

    async findById(id: number): Promise<Appointment | null> {
        const appointment = await this.appointmentModel.findById(id);
        return appointment;
    }

    async findByDate(myStart: number, myEnd: number): Promise<Appointment[]> {
        const appointments = await this.appointmentModel.find({
            $or: [
                {
                    $and: [
                        { start: { $gte: myStart } },
                        { end: { $lte: myStart } },
                    ]
                },
                {
                    $and: [
                        { start: { $gte: myEnd } },
                        { end: { $lte: myEnd } },
                    ]
                },
            ]
        });
        return appointments;
    }

    async create(appointmentToCreate: any): Promise<Appointment> {
        const appointment = await this.appointmentModel.create(appointmentToCreate)
        return appointment;
    }

    async remove(id: number): Promise<void>  {
        await this.appointmentModel.remove({ id })
    }
}
