import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBanSmoking, faMoneyBill } from "@fortawesome/free-solid-svg-icons";

export default function LocationPolicies(): JSX.Element {
    return (
        <div className="flex flex-col gap-5 px-10 mt-24 w-full">
            <h3 className="font-bold text-2xl">Policies</h3>
            <div className="flex flex-col gap-2">
                <p className="flex gap-2 text-gray-500"><FontAwesomeIcon icon={faBanSmoking} className="text-gray-600 text-xl" />No Smoking</p>
                <p className="flex gap-2 text-gray-500"><FontAwesomeIcon icon={faMoneyBill} className="text-gray-600 text-xl" />Refund within one week of event date</p>
            </div>
        </div>
    )
}
