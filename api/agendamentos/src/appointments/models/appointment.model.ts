import { Schema, InferSchemaType, Model, model } from 'mongoose';

const AppointmentSchema = new Schema({

})

export type Appointment = InferSchemaType<typeof AppointmentSchema>;

export const AppointmentModel: Model<Appointment> = model("Appointment", AppointmentSchema);
