"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { Address } from "~~/components/scaffold-stark";
import { useAccount } from "~~/hooks/useAccount";
import { Address as AddressType } from "@starknet-react/chains";
import Image from "next/image";
import SendToken from "~~/components/SendToken";

const Home: NextPage = () => {
  const connectedAddress = useAccount();

  return (
    <>
      <SendToken />
    </>
  );
};

export default Home;
