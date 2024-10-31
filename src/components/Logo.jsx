import { MapPinIcon } from "@heroicons/react/16/solid";

const Logo = () => {
    return (
        <div className="flex items-center gap-3">
            <MapPinIcon className="text-blue-500 w-5 h-5" />
            <h1 className="font-bold text-gray-500">Location</h1>
        </div>
    )
}

export default Logo