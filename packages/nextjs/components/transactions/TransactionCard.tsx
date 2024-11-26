import Image from "next/image";

interface TransactionCardProps {
  amount: string;
  usdAmount: string;
  recipient: {
    name: string;
    address: string;
  };
  timestamp: string;
}

const TransactionCard: React.FC<TransactionCardProps> = ({
  amount,
  usdAmount,
  recipient,
  timestamp,
}) => {
  return (
    <div className="bg-[#2C2C2C] rounded-lg p-4">
      {/* Title */}
      <div className="text-2xl text-gray-400 mb-4">Send</div>

      {/* Amount Section */}
      <div className="flex items-center gap-3 mb-6">
        <img src="/btc.png" alt="BTC" className="w-12 h-12" />
        <div className="flex items-center gap-3">
          <span className="text-3xl text-white">{amount}</span>
          <span className="text-xl text-gray-400"> ~${usdAmount}</span>
        </div>
      </div>

      <div className="relative">
        <div className="w-full h-[1px] bg-[#65656526] mb-5"></div>

        {/* To Label */}
        <div className="absolute top-[-20px] left-1/2 -translate-x-1/2">
          <div className="flex justify-center mb-4">
            <div className="bg-[#3A3A3A] px-10 py-2 rounded-lg text-white text-lg">
              To
            </div>
          </div>
        </div>
      </div>

      {/* Recipient Section */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 bg-[#474747] rounded-lg flex items-center justify-center text-2xl text-white">
          {recipient.name[0]}
        </div>
        <div className="flex-1">
          <div className="text-2xl text-white mb-1">{recipient.name}</div>
          <div className="text-gray-400 flex items-center justify-between">
            <span>{recipient.address}</span>
            <img
              src="/copy.png"
              alt="Copy"
              className="w-6 h-6 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Timestamp */}
      <div className="bg-[#e8c2ff33] bg-opacity-40 rounded-lg py-4 flex items-center justify-center gap-2">
        <div className="w-8 h-8 rounded-full flex items-center justify-center">
          <Image src="/timer.svg" width={30} height={10} alt="icon" />
        </div>
        <span className="text-gray-300">{timestamp}</span>
      </div>
    </div>
  );
};

export default TransactionCard;
