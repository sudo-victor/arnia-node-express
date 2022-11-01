import { connect, connection } from 'mongoose';

const mongo = process.env.MONGODB as string

export function connectMongo() {
    connection
        .once('error', (error) => {
            console.log('connection error: ' + error)
        })
        .once('close', () => {
            console.log('close connection')
        })
        .once('open', () => {
            console.log('conectou')
        })

    connect(mongo)
}
