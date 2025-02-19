import { IoMailOutline } from "react-icons/io5";
import { MailSelector, PageHeader } from '../../../components';

const MailsPage = () => {
    return (
        <>
            <PageHeader title='Mails' icon={<IoMailOutline />} />
            <MailSelector />
        </>
    )
}

export default MailsPage