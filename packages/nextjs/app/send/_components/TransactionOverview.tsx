import React from "react";
import TransactionCard from "~~/components/transactions/TransactionCard";

interface TransactionOverviewProps {
  amount: number;
  token: {
    symbol: string;
    logo: string;
  };
  recipient: {
    name: string;
    address: string;
  };
  onAddToBatch?: () => void;
  onSend?: () => void;
}

const TransactionOverview: React.FC<TransactionOverviewProps> = ({
  amount,
  token,
  recipient,
  onAddToBatch,
  onSend,
}) => {
  return (
    <div className="h-full mx-auto bg-[#161616] p-6 text-white">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <img src="/info.svg" alt="info" className="w-6 h-6" />
        <h1 className="text-2xl font-bold gradient-text">
          TRANSACTION OVERVIEW
        </h1>
      </div>
      <p className="text-gray-400 mb-6">
        Carefully check the information below.
      </p>
      <div className="w-full h-[1px] bg-[#65656526] mb-5"></div>

      {/* Transaction Card */}
      <div className="bg-[#1E1E1E] rounded-lg p-4 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-10 h-10 bg-[#2C2C2C] rounded-lg flex items-center justify-center">
            <img src="/arrow-narrow-up.png" alt="send" className="w-6 h-6" />
          </div>
          <div className="ml-2">
            <div className="flex items-center gap-2">
              <img src={token.logo} alt={token.symbol} className="w-6 h-6" />
              <span className="text-xl">{amount}</span>
              <span className="text-gray-400">~${amount * 40000}</span>
            </div>
            <div className="text-gray-400">
              To{" "}
              <span className="text-[#d56aff] underline">{recipient.name}</span>
            </div>
          </div>
          <img src="/arrow-down.png" alt="expand" className="ml-auto" />
        </div>
        <div className="w-full h-[1px] bg-[#65656526] mb-5"></div>
        <TransactionCard
          amount={amount.toString()}
          recipient={{
            name: recipient.name,
            address: recipient.address,
          }}
          usdAmount={(amount * 40000).toString()}
          timestamp={new Date().toLocaleString()}
        />
      </div>

      {/* Transaction Details */}
      <div className="bg-[#2A2440] bg-opacity-40 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg">Transaction checks</span>
          <button className="px-6 py-2 bg-[#2A2440] rounded-lg text-[#C4AEFF]">
            Simulate
          </button>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-400">Min Receive</span>
            <span>4</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Blockchain Fee</span>
            <span>$500</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Transaction Fee</span>
            <span>$20,000</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button
          onClick={onAddToBatch}
          className="flex-1 py-4 rounded-lg text-xl shadow-[inset_0_0_0_2px_#d56aff] text-[#C4AEFF]"
        >
          Add to batch
        </button>
        <button
          onClick={onSend}
          className="flex-1 py-4 rounded-lg text-xl button-bg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default TransactionOverview;
