import { HiOutlineClipboardList } from 'react-icons/hi'
import { PageHeader, SettingComponent } from '../../../components'

const SettingPage = () => {
    return (
        <>
            <PageHeader title='Settings' icon={<HiOutlineClipboardList />} />
            <SettingComponent />
        </>
    )
}

export default SettingPage