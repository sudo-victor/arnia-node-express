import { Model } from "mongoose";
import { Appointment } from "../models/appointment.model";

export class AppointmentRepository {
    constructor(
        private readonly appointmentModel: Model<Appointment>
    ) {}

    async find() {
        const appointments = await this.appointmentModel.find();
        appointments.filter((appointment) => {
            const formattedStart = new Date(appointment.start as number);
            formattedStart.getDay()
            formattedStart.getUTCMonth()
        })
        return appointments;
    }

    async findById(id: number) {
        const appointments = await this.appointmentModel.findById(id);
        return appointments;
    }

/**
 * Robson marcou das 20:30 até as 22:00
 * Eu tentei marcar das 20:40 até as 22:10
 * 
 * 
 * 20:30 < 20:40 < 22:00
 * start < formattedEnd < end
 * 
 * 
 * Pedro marcou das 10:30 até as 11:00
 * Eu tentei marcar das 9:00 até as 10:45
 * 10:30 < 10:45 > 11:00
 * 
 * and or
 * 
 */

    async findByDate(myStart: Date, myEnd: Date) {
        const appointments = await this.appointmentModel.find({
            $or: [
                {
                    $and: [
                        { start: { $lte: myStart } },
                        { end: { $gte: myStart } },
                    ]
                },
                {
                    $and: [
                        { start: { $lte: myEnd } },
                        { end: { $gte: myEnd } },
                    ]
                }
            ]
        });

        return appointments;
    }

    async create(appointmentToCreate: any) {
        const appointment = await this.appointmentModel.create(appointmentToCreate)
    }

    async remove(id: number) {
        this.appointmentModel.remove({ id })
    }
}
