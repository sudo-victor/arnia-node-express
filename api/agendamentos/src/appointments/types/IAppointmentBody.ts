export interface IAppointmentBody {
    start: string;
    end: string;
    customerName: string;
    customerPhone: string;
}

type AppointmentDTO = {
    start: string;
    end: string;
    customerName: string;
    customerPhone: string;
}