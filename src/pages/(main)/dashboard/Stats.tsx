import { HiOutlineChartBar, HiOutlineTicket, HiOutlineUserGroup } from 'react-icons/hi'

const Stats = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg shadow flex items-center gap-4">
                    <HiOutlineUserGroup size={40} className="text-blue-500" />
                    <div>
                        <p className="text-gray-500">Total Travelers</p>
                        <h3 className="text-xl font-bold">8,500</h3>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow flex items-center gap-4">
                    <HiOutlineTicket size={40} className="text-green-500" />
                    <div>
                        <p className="text-gray-500">Bookings This Month</p>
                        <h3 className="text-xl font-bold">1,200</h3>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow flex items-center gap-4">
                    <HiOutlineChartBar size={40} className="text-yellow-500" />
                    <div>
                        <p className="text-gray-500">Revenue</p>
                        <h3 className="text-xl font-bold">$50,000</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Stats