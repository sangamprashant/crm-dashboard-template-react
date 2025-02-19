import { SearchOutlined, UndoOutlined } from "@ant-design/icons";
import { Button, Divider, Form, Input, Select } from "antd";

const { Option } = Select;

const LeadsSearch = () => {
    const [form] = Form.useForm();

    const handleSearch = (values: any) => {
        console.log("Search values:", values);
    };

    const handleReset = () => {
        form.resetFields();
    };

    return (
        <>
            <div className="flex justify-center mb-3">
                <div className="w-full">
                    <Form
                        form={form}
                        onFinish={handleSearch}
                        layout="vertical"
                        className=""
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Name Input */}
                            <Form.Item name="name" label="Name">
                                <Input placeholder="Enter lead name" />
                            </Form.Item>

                            {/* Email Input */}
                            <Form.Item name="email" label="Email">
                                <Input placeholder="Enter lead email" />
                            </Form.Item>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Phone Input */}
                            <Form.Item name="phone" label="Phone">
                                <Input placeholder="Enter phone number" />
                            </Form.Item>

                            {/* Status Dropdown */}
                            <Form.Item name="status" label="Status">
                                <Select placeholder="Select lead status" allowClear>
                                    <Option value="new">New</Option>
                                    <Option value="attempted">Attempted Contact</Option>
                                    <Option value="connected">Connected</Option>
                                    <Option value="prospect">Prospect</Option>
                                    <Option value="hot">Hot Lead</Option>
                                    <Option value="payment">Payment Received</Option>
                                    <Option value="completed">Completed</Option>
                                    <Option value="not_interested">Not Interested</Option>
                                </Select>
                            </Form.Item>
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-end gap-3">
                            <Button onClick={handleReset} icon={<UndoOutlined />}>
                                Reset
                            </Button>
                            <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
                                Search
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
            <Divider>Searched Items</Divider>
            <SearchedItems/>
        </>
    );
};

export default LeadsSearch;


const SearchedItems = () => {
    return <>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam distinctio molestias iste, architecto aliquam aperiam odit eius obcaecati consectetur eligendi molestiae animi nobis ab harum alias impedit eaque quidem porro?
    </>
}