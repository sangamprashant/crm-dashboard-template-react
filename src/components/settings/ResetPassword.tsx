const ResetPassword = () => {
  return (
    <div className="p-4 bg-gray-50 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Reset Password</h2>
      <p className="text-sm text-gray-600 mb-4">
        Enter your current password and your new password below.
      </p>
      <form className="space-y-3">
        <input
          type="password"
          placeholder="Current Password"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="New Password"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
