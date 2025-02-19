import type { TabsProps } from 'antd';
import { Divider, Tabs } from 'antd';

const onChange = (key: string) => {
    console.log(key);
};

const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Tab 1',
        children: 'Content of Tab Pane 1',
    },
    {
        key: '2',
        label: 'Tab 2',
        children: 'Content of Tab Pane 2',
    },
    {
        key: '3',
        label: 'Tab 3',
        children: 'Content of Tab Pane 3',
    },
];

const MailSelector = () => {
    return (
        <div className='px-4 py-2'>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            <Divider>Notice</Divider>
            <p>Due to leads the mail option is no use</p>
        </div>
    )
}

export default MailSelector