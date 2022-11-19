import { InferSchemaType, model, Model, Schema } from "mongoose";

const CustomerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

export type Customer = InferSchemaType<typeof CustomerSchema>;

export const CustomerModel: Model<Customer> = model("Customer", CustomerSchema);