import { HiOutlineUsers } from 'react-icons/hi';
import { LeadsSelector, PageHeader } from '../../../components';

const LeadsPage = () => {
    return (
        <>
            <PageHeader title='Manage Travel Leads' icon={<HiOutlineUsers />} />
            <LeadsSelector />
        </>
    )
}

export default LeadsPage