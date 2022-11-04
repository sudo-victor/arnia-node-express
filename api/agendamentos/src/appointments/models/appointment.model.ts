import { Schema, InferSchemaType, Model, model } from 'mongoose';

const AppointmentSchema = new Schema({
    start: Number,
    end: Number,
    customerName: String,
    customerPhoneNumber: Number,
})

export type Appointment = InferSchemaType<typeof AppointmentSchema>;

export const AppointmentModel: Model<Appointment> = model("Appointment", AppointmentSchema);
