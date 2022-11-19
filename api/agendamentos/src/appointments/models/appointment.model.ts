import { Schema, InferSchemaType, Model, model } from 'mongoose';

const AppointmentSchema = new Schema({
    start: {
        type: Number,
        required: true
    },
    end: Number,
    customer: {
        type: Schema.Types.ObjectId,
        rel: 'Customer'
    }
})

export type Appointment = InferSchemaType<typeof AppointmentSchema>;

export const AppointmentModel: Model<Appointment> = model("Appointment", AppointmentSchema);
