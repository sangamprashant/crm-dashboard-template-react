import { Button, Card, DatePicker, Form, Input, Select } from "antd";
import { leadsType } from "./LeadsSelector";
const { Option } = Select;
const { RangePicker } = DatePicker;

const CreateLeadForm = () => {
  const [form] = Form.useForm();
  const handleSubmit = (values: any) => {
    console.log("Lead Created:", values);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-3xl shadow-lg rounded-lg border border-gray-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">
          Create New Lead
        </h2>
        <Form
          form={form}
          onFinish={handleSubmit}
          layout="vertical"
          className="space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item name="name" label="Name" rules={[{ required: true, message: "Name is required" }]}>
              <Input placeholder="Enter lead name" />
            </Form.Item>

            <Form.Item name="email" label="Email" rules={[{ required: true, type: "email", message: "Enter a valid email" }]}>
              <Input placeholder="Enter lead email" />
            </Form.Item>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item name="phone" label="Phone" rules={[{ required: true, message: "Phone number is required" }]}>
              <Input placeholder="Enter phone number" />
            </Form.Item>

            <Form.Item name="destination" label="Destination" rules={[{ required: true, message: "Destination is required" }]}>
              <Input placeholder="Enter destination" />
            </Form.Item>
          </div>

          <Form.Item name="date" label="Select Date Range" rules={[{ required: true, message: "Date range is required" }]}>
            <RangePicker className="w-full" format="YYYY-MM-DD" />
          </Form.Item>

          <Form.Item name="type" label="Lead Type" rules={[{ required: true, message: "Select a lead type" }]}>
            <Select placeholder="Select lead type">
              {leadsType.slice(2).map((l, i) => (
                <Option value={l} key={i}> {l}</Option>
              ))}
            </Select>
          </Form.Item>

          <div className="space-y-2">
            <label className="text-gray-700 font-medium">People</label>
            <div className="flex gap-2 items-center">
              <Form.Item name={["people", "adult"]} noStyle>
                <Input placeholder="Adults" className="w-28" />
              </Form.Item>
              <Form.Item name={["people", "children"]} noStyle>
                <Input placeholder="Children" className="w-28" />
              </Form.Item>
            </div>
          </div>

          <Form.Item name="address" label="Address">
            <Input.TextArea rows={2} placeholder="Enter address" />
          </Form.Item>

          <div className="flex justify-end gap-3">
            <Button type="default" onClick={() => form.resetFields()}>
              Reset
            </Button>
            <Button type="primary" htmlType="submit">
              Create Lead
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default CreateLeadForm;
