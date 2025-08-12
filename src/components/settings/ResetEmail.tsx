const ResetEmail = () => {
  return (
    <div className="p-4 bg-gray-50 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Reset Email</h2>
      <p className="text-sm text-gray-600 mb-4">
        Enter your new email and confirm to update your account email.
      </p>
      <form className="space-y-3">
        <input
          type="email"
          placeholder="New Email"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Confirm New Email"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Update Email
        </button>
      </form>
    </div>
  );
};

export default ResetEmail;
