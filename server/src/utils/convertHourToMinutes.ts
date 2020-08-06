export default function convertHourToMinutes(time: string){
    const [hours, minutes] = time.split(':').map(Number)

    return (hours * 60) + minutes
}