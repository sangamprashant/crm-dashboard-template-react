import { HiOutlineClipboardList } from 'react-icons/hi'
import { PageHeader } from '../../../components'
import BookingSearch from '../../../components/booking/BookingSearch'

const BookingSearchPage = () => {
    return (
        <>
            <PageHeader title='Booking Search' icon={<HiOutlineClipboardList />} />
            <BookingSearch />
        </>
    )
}

export default BookingSearchPage