import { HiOutlineClipboardList } from "react-icons/hi"
import { BookingSelector, PageHeader } from "../../../components"

const BookingsPage = () => {
    return (
        <>
            <PageHeader title='Booking Management' icon={<HiOutlineClipboardList />} />
            <BookingSelector />
        </>
    )
}

export default BookingsPage