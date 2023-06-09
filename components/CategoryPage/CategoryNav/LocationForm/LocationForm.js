import { useRouter } from "next/router";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import LocalStorage from "../../../../services/tools/ClientTools/getLocalStorage";
import { useModalOpen } from "../../../AppHooks/useModalOpen";
import Text from "../../../Elementes/Text/Text";
import { useClientSideValue } from "../../../hooks/useClientSideValue";
import LocationFormOptionsContainer from "./LocationFormOptions/LocationFormOptionsContainer";

const LocationForm = () => {
    const [isOpen, setOpen, onSwitchOpen] = useModalOpen()

    const {query: {city}} = useRouter()

    return (
        <>
            <button className="location" onClick={onSwitchOpen}>
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_471_2893)">
                        <path d="M10.0001 0.0349998C7.79507 0.0374258 5.68101 0.914396 4.12173 2.47352C2.56245 4.03265 1.68526 6.14662 1.68262 8.35167C1.68262 10.4933 3.34095 13.845 6.61178 18.3133C7.00117 18.8468 7.511 19.2807 8.09979 19.5799C8.68857 19.8791 9.33968 20.035 10.0001 20.035C10.6606 20.035 11.3117 19.8791 11.9004 19.5799C12.4892 19.2807 12.9991 18.8468 13.3885 18.3133C16.6593 13.845 18.3176 10.4933 18.3176 8.35167C18.315 6.14662 17.4378 4.03265 15.8785 2.47352C14.3192 0.914396 12.2052 0.0374258 10.0001 0.0349998ZM10.0001 11.6667C9.34085 11.6667 8.69638 11.4712 8.14822 11.1049C7.60005 10.7386 7.17281 10.218 6.92052 9.60895C6.66823 8.99986 6.60222 8.32964 6.73083 7.68303C6.85945 7.03643 7.17692 6.44249 7.64309 5.97631C8.10927 5.51014 8.70321 5.19267 9.34982 5.06405C9.99642 4.93543 10.6666 5.00144 11.2757 5.25374C11.8848 5.50603 12.4054 5.93327 12.7717 6.48143C13.138 7.0296 13.3335 7.67406 13.3335 8.33333C13.3335 9.21739 12.9823 10.0652 12.3571 10.6904C11.732 11.3155 10.8842 11.6667 10.0001 11.6667Z" />
                    </g>
                    <defs>
                        <clipPath id="clip0_471_2893">
                            <rect width="20" height="20" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>

                <p>
                    { !!city ? <>{city}</> : <Text content="Location" /> }
                </p>
            </button>
            <LocationFormOptionsContainer {...{isOpen, onSwitchOpen,}} />
            
        </>
    );
}

export default LocationForm;