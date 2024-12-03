
/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { HeaderActions } from "~~/components/HeaderActions";
import { Routes } from "~~/utils/Routes";
import TransactionButtons from "~~/components/transactions/TransactionButtons";
import TransactionTable from "../transaction/_components/TransactionTable";
import {
  ArrowRightIcon,
  CheckBadgeIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

type Transaction = {
  id: number;
  type: "Receive" | "Send" | "Swap";
  amount: number;
  token: string;
  toAmount?: number;
  toToken?: string;
  date: string;
};

type Asset = {
  symbol: string;
  name: string;
  amount: number;
  value: number;
  percentage: number;
  icon: string;
};

const transactions: Transaction[] = [
  {
    id: 1,
    type: "Receive",
    amount: 12000,
    token: "USDT",
    date: "25/11/2024, 07:15",
  },
  {
    id: 2,
    type: "Send",
    amount: 7159,
    token: "USDT",
    date: "22/11/2024, 23:59",
  },
  {
    id: 3,
    type: "Swap",
    amount: 12067,
    token: "USDT",
    toAmount: 0.15272,
    toToken: "BTC",
    date: "15/11/2024, 16:30",
  },
  {
    id: 4,
    type: "Receive",
    amount: 12000,
    token: "USDT",
    date: "10/11/2024, 14:20",
  },
  {
    id: 5,
    type: "Send",
    amount: 4159,
    token: "USD",
    date: "05/11/2024, 09:45",
  },
];

const assets: Asset[] = [
  {
    symbol: "USDT",
    name: "Tether",
    amount: 4098.01,
    value: 30.89,
    percentage: 79,
    icon: "/usdt.svg", // You'll need to add these icons to your public folder
  },
  {
    symbol: "BTC",
    name: "Bitcoin",
    amount: 0.019268,
    value: 1135.96,
    percentage: 20,
    icon: "/usdt.svg",
  },
  {
    symbol: "MTH",
    name: "Monetha",
    amount: 100.01,
    value: 30.89,
    percentage: 1,
    icon: "/usdt.svg",
  },
];

const MultiOwner = () => {
  const router = useRouter();

  return (
    <div className="p-8 min-h-screen relative">
      {/* Header Section */}
      <HeaderActions />
      <div className="mb-8 grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <h1 className="text-5xl font-semibold gradient-text mt-5 mb-2">
            CREATE NEW ACCOUNT
          </h1>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 rounded-xl flex flex-col gap-5">
          <div className="border border-[#0b0b0b] p-6 bg-black rounded-xl flex flex-col">
            <div className="flex flex-col border-b-gray-800 border-b-2 pb-4">
              <div className="flex items-center gap-2">
                <InformationCircleIcon className="h-5 w-5 text-gray-400" />
                <h2 className="text-xl font-semibold gradient-text">
                  Basic Setup
                </h2>
              </div>
              <p className="text-gray-600">
                Set the signer and how many need to confirm to execute a valid
                transaction
              </p>
            </div>
            <div className="flex flex-col mt-5 gap-1">
              <h2 className="text-lg">Account Name</h2>
              <input
                type="text"
                placeholder="account name"
                className="flex-1 px-4 py-2 text-white bg-gray-700 rounded-lg"
              />
            </div>
          </div>

          <div className="border border-[#0b0b0b] p-6 bg-black rounded-xl flex flex-col">
            <div className="flex flex-col border-b-gray-800 border-b-2 pb-4">
              <div className="flex items-center gap-2">
                <InformationCircleIcon className="h-5 w-5 text-gray-400" />
                <h2 className="text-xl font-semibold gradient-text">
                  Signers & Confirmation
                </h2>
              </div>
              <p className="text-gray-600">
                Set the signer and how many need to confirm to execute a valid
                transaction
              </p>
            </div>

            <div className="flex flex-col border-b-gray-800 border-b-2 pb-4 mt-5 gap-3">
              <div className="flex w-full justify-between items-center">
                <h2 className="text-lg">Signers</h2>
                <button className="bg-gray-600 p-2 rounded">Add Signer</button>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Enter name"
                    className="w-1/4 px-4 py-2 text-white bg-gray-700 rounded-l-lg border-r border-gray-600"
                  />
                  <input
                    type="text"
                    placeholder="Enter address"
                    className="flex-1 px-4 py-2 text-white bg-gray-700 rounded-r-lg"
                  />
                </div>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Enter name"
                    className="w-1/4 px-4 py-2 text-white bg-gray-700 rounded-l-lg border-r border-gray-600"
                  />
                  <input
                    type="text"
                    placeholder="Enter address"
                    className="flex-1 px-4 py-2 text-white bg-gray-700 rounded-r-lg"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between border-b-gray-800 border-b-2 pb-4 mt-5">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <InformationCircleIcon className="h-5 w-5 text-gray-400" />
                  <h2 className="text-xl font-semibold gradient-text">
                    Threshold
                  </h2>
                </div>
                <p className="text-gray-600">
                  Any transaction requires the confirmation of:
                </p>
              </div>
              <div className="join">
                <button className="join-item btn">-</button>
                <input
                  type="number"
                  className="join-item btn w-16"
                  defaultValue={2}
                  min={1}
                  max={10}
                />
                <button className="join-item btn">+</button>
              </div>
            </div>

            <div className="flex flex-col border-b-gray-800 border-b-2 pb-4 mt-5">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <InformationCircleIcon className="h-5 w-5 text-gray-400" />
                  <h2 className="text-xl font-semibold gradient-text">
                    Module setup
                  </h2>
                </div>
                <p className="text-gray-600">Description</p>
              </div>
              <div className="flex mt-5 gap-4">
                <div className="flex gap-1 items-center">
                  <input
                    className="checkbox checkbox-secondary checkbox-sm rounded"
                    type="checkbox"
                  />
                  <p>ERC 20</p>
                </div>
                <div className="flex gap-1 items-center">
                  <input
                    className="checkbox checkbox-secondary checkbox-sm rounded"
                    type="checkbox"
                  />
                  <p>ERC 721</p>
                </div>
                <div className="flex gap-1 items-center text-gray-800">
                  <input
                    className="checkbox disabled checkbox-secondary checkbox-sm rounded"
                    disabled={true}
                    type="checkbox"
                  />
                  <p>Auto MEME trading (locked)</p>
                </div>
                <div className="flex gap-1 items-center text-gray-800">
                  <input
                    disabled={true}
                    className="checkbox disabled checkbox-secondary checkbox-sm rounded"
                    type="checkbox"
                  />
                  <p>Auto Investing (locked)</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Balance Section */}
        <div className="bg-white rounded-xl text-black/80 flex flex-col justify-between">
          <div className="min-w-full">
            <div className="rounded-tr rounded-tl bg-white px-3 py-4">
              <div className="flex flex-col border-b-gray-300 border-b-2 pb-2">
                <h3 className="text-3xl font-semibold text-[#B248DD]">
                  Account Preivew
                </h3>
                <span className="text-black/60 text-base">
                  Check the information below
                </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center gap-1">
                  <CheckBadgeIcon className="h-5 w-5" />
                  <p className="m-0">Basic setup</p>
                </div>
                <ArrowRightIcon className="h-3 w-3 text-gray-400" />
                <div className="flex items-center gap-1">
                  <CheckBadgeIcon className="h-5 w-5" />
                  <p className="m-0">Signer & confirmations</p>
                </div>
              </div>
            </div>
            {/* Assets Tabs */}
            <div className="flex flex-col space-y-4 px-3 py-4">
              <div className="flex flex-col">
                <p className="m-0 p-0">Account information</p>
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between w-full bg-gray-200 rounded p-2">
                    <p className="text-black/60">Wallet Address</p>
                    <p className="font-semibold">0x123...321</p>
                  </div>
                  <div className="flex justify-between w-full bg-gray-200 rounded p-2">
                    <p className="text-black/60">Account Name</p>
                    <p className="font-semibold">Jupeng</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <p className="m-0 p-0">Signers</p>
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between w-full bg-gray-200 rounded p-2">
                    <p className="text-black/60">Carlos</p>
                    <p className="font-semibold">0x153...321</p>
                  </div>
                  <div className="flex justify-between w-full bg-gray-200 rounded p-2">
                    <p className="text-black/60">Shiv</p>
                    <p className="font-semibold">0x164...321</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="px-3 py-4 w-full">
            <button
              type="submit"
              className="px-4 py-2 w-full text-white button-bg rounded-lg flex justify-center items-center gap-2"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiOwner;
