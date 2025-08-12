import { PageHeader } from "../../components";

const PaymentReceived = () => {
    const payments = [
        { id: "B001", amount: "$200", status: "Paid" },
        { id: "B003", amount: "$150", status: "Paid" },
    ];

    return (
        <>
            <PageHeader title="Payment Received" />
            <div className="bg-white p-4 rounded shadow">
                <table className="w-full border">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-2 border">Booking ID</th>
                            <th className="p-2 border">Amount</th>
                            <th className="p-2 border">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((p) => (
                            <tr key={p.id}>
                                <td className="p-2 border">{p.id}</td>
                                <td className="p-2 border">{p.amount}</td>
                                <td className="p-2 border text-green-600">{p.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default PaymentReceived;
