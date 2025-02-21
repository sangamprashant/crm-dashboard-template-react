import { HiOutlineClipboardList } from 'react-icons/hi'
import { PageHeader } from '../../../components'
import CreateLeadForm from '../../../components/leads/LeadCreate'

const AddBookingPage = () => {
    return (
        <>
            <PageHeader title='Create a Booking' icon={<HiOutlineClipboardList />} />
            <CreateLeadForm />
        </>
    )
}

export default AddBookingPage