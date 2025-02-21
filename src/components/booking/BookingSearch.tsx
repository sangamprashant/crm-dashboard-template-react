import { SearchOutlined, UndoOutlined } from "@ant-design/icons";
import { Button, Divider, Form, Input, Select } from "antd";

const { Option } = Select;

const BookingSearch = () => {
    const [form] = Form.useForm();

    const handleSearch = (values: any) => {
        console.log("Search values:", values);
    };

    const handleReset = () => {
        form.resetFields();
    };

    return (
        <div className="p-2">
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
                                    <Option value="payment">Payment Received</Option>
                                    <Option value="completed">Completed</Option>
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
            <SearchedItems />
        </div>
    );
};

export default BookingSearch;


const SearchedItems = () => {
    return <>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam distinctio molestias iste, architecto aliquam aperiam odit eius obcaecati consectetur eligendi molestiae animi nobis ab harum alias impedit eaque quidem porro?
    </>
}