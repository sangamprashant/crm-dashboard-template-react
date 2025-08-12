import React, { useState } from "react";
import { PageHeader } from "../../components";

const CreateBooking = () => {
    const [form, setForm] = useState({ name: "", date: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Booking created for ${form.name} on ${form.date}`);
    };

    return (
        <>
            <PageHeader title="Create Booking" />
            <div className="bg-white p-4 rounded shadow">
                <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                        type="text"
                        placeholder="Customer Name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="border p-2 rounded w-full"
                    />
                    <input
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className="border p-2 rounded w-full"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Create
                    </button>
                </form>
            </div>
        </>
    );
};

export default CreateBooking;
