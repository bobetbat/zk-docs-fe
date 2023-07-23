import { EAS, SchemaEncoder, SignedOffchainAttestation, TypedDataSigner } from "@ethereum-attestation-service/eas-sdk";
import { ethers } from "ethers";
import { useCallback, useEffect, useState } from "react";
import { useAccount, useWalletClient } from "wagmi";
import { publicProvider } from '@wagmi/core/providers/public'
import { Hash } from "viem";
import { useEthersProvider, useEthersSigner } from "../utils/ethers";
const EASContractAddress = "0xC2679fBD37d54388Ce493F1DB75320D236e1815e"

export const useEAS = () => {
  const { address, isConnecting, isDisconnected } = useAccount()
  const [data, setData] = useState<SignedOffchainAttestation>()
  const provider = useEthersProvider()
  const signer = useEthersSigner()
  
  const getAttestation = useCallback(async (hashOfDocument: any, note: string) => {
    const eas = new EAS(EASContractAddress);
    eas.connect(provider)
    if (!signer || !eas) return
    console.log('eas', eas)

    const schemaEncoder = new SchemaEncoder("bytes32 hashOfDocument, string note");
    const encodedData = schemaEncoder.encodeData([
      { name: "hashOfDocument", value: hashOfDocument, type: "bytes32" },
      { name: "note", value: note, type: "string" },
    ]);

    const offchain = await eas.getOffchain();

    const offchainAttestation = await offchain.signOffchainAttestation({
      recipient: address as string,
      // Unix timestamp of when attestation expires. (0 for no expiration)
      expirationTime: 0,
      // Unix timestamp of current time
      time: Math.round(Date.now() / 1000),
      revocable: true,
      version: 1,
      nonce: 0,
      schema: "0xd3f24e873e8df2d9bb9af6f08ea1ddf61f65754d023f3ea761081e3e6a226a80",
      refUID: '0x0000000000000000000000000000000000000000000000000000000000000000',
      data: encodedData,
    }, signer);
    console.log('DATA', offchainAttestation)
    setData(offchainAttestation)
  }, [signer, provider])

  return { data, getAttestation }
}
