import { useRef } from "react";
import GenericModal from "../scaffold-stark/CustomConnectButton/GenericModal";
import Image from "next/image";
import { CloseIcon } from "../Icons/CloseIcon";

interface RemoveAddressModalProps {
  addressName: string;
  onRemove: () => void;
}

const RemoveAddressModal = ({
  addressName,
  onRemove,
}: RemoveAddressModalProps) => {
  const modalRef = useRef<HTMLInputElement>(null);

  const handleClose = () => {
    if (modalRef.current) {
      modalRef.current.checked = false;
    }
  };

  const handleDelete = () => {
    onRemove();
    handleClose();
  };

  return (
    <div>
      <label htmlFor={`delete-address-modal-${addressName}`}>
        <div className="bg-[#FF959621] p-[5px] rounded-[7px] w-fit cursor-pointer">
          <Image src={"/delete-icon.svg"} width={14} height={14} alt="icon" />
        </div>
      </label>
      <input
        ref={modalRef}
        type="checkbox"
        id={`delete-address-modal-${addressName}`}
        className="modal-toggle"
      />
      <GenericModal
        modalId={`delete-address-modal-${addressName}`}
        className="flex flex-col gap-3 relative px-4 py-5 rounded-xl bg-[#0F0F0F] w-[422px]"
      >
        <div
          className="bg-[#2D2F35] rounded-full p-1 cursor-pointer absolute right-2 top-2"
          onClick={handleClose}
        >
          <CloseIcon
            width={24}
            height={24}
            color="white"
            className="cursor-pointer"
          />
        </div>
        <div className="mx-auto mt-6">
          <Image
            src="/delete-address.svg"
            alt="icon"
            width={200}
            height={120}
            className="cursor-pointer"
          />
        </div>
        <div className="text-center">
          <p className="font-bold text-2xl uppercase">delete address</p>
          <p className="text-[#747474] text-sm mt-2">
            Are you sure to delete{" "}
            <span className="text-white">{addressName}</span>?
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="bg-white text-[#292929] text-[15px] font-semibold h-10 rounded-lg w-full"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="bg-[#FF484833] text-[#FF4C4C] text-[15px] font-semibold h-10 rounded-lg w-full"
            onClick={handleDelete}
          >
            Yes, delete
          </button>
        </div>
      </GenericModal>
    </div>
  );
};

export default RemoveAddressModal;
