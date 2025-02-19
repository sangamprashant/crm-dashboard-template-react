import { HiOutlineGlobeAlt, HiOutlineLocationMarker } from 'react-icons/hi'

const Featured = () => {
    return (
        <>
            <div className="mt-6">
                <h2 className="text-lg font-bold mb-4">Top Destinations</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow flex items-center gap-4">
                        <HiOutlineGlobeAlt size={40} className="text-red-500" />
                        <div>
                            <p className="text-gray-500">Paris, France</p>
                            <h3 className="text-xl font-bold">500+ Bookings</h3>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow flex items-center gap-4">
                        <HiOutlineLocationMarker size={40} className="text-purple-500" />
                        <div>
                            <p className="text-gray-500">Bali, Indonesia</p>
                            <h3 className="text-xl font-bold">700+ Bookings</h3>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow flex items-center gap-4">
                        <HiOutlineGlobeAlt size={40} className="text-blue-500" />
                        <div>
                            <p className="text-gray-500">New York, USA</p>
                            <h3 className="text-xl font-bold">850+ Bookings</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Featured