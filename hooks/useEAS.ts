import { EAS, SchemaEncoder, SignedOffchainAttestation, TypedDataSigner } from "@ethereum-attestation-service/eas-sdk";
import { ethers } from "ethers";
import { useCallback, useState } from "react";
import { usePublicClient, useWalletClient } from "wagmi";
import { publicProvider } from '@wagmi/core/providers/public'
const EASContractAddress = "0xC2679fBD37d54388Ce493F1DB75320D236e1815e"

export const useEAS = () => {
  const schemaEncoder = new SchemaEncoder("bytes32 hashOfDocument, string note");
  const eas = new EAS(EASContractAddress);
  const [data, setData] = useState<SignedOffchainAttestation>()
  const { data: signer } = useWalletClient()
  const provider = usePublicClient()
  
  
  console.log('eas', eas)
  eas.connect(provider as any);
  // Initialize SchemaEncoder with the schema string
  const encodedData = schemaEncoder.encodeData([
    { name: "hashOfDocument", value: "0xdef835095c9298ef045106da476770358fb0c37d7ed13a6108b6dfd4a0282f54", type: "bytes32" },
    { name: "note", value: "1", type: "string" },
  ]);

  const getAttestation = useCallback(async () => {
    if (!signer) return
    const offchain = await eas.getOffchain();

    const offchainAttestation = await offchain.signOffchainAttestation({
      recipient: '0xFD50b031E778fAb33DfD2Fc3Ca66a1EeF0652165',
      // Unix timestamp of when attestation expires. (0 for no expiration)
      expirationTime: 0,
      // Unix timestamp of current time
      time: Math.round(Date.now() / 1000),

      revocable: true,
      version: 1,
      nonce: 0,
      schema: "0xb16fa048b0d597f5a821747eba64efa4762ee5143e9a80600d0005386edfc995",
      refUID: '0x0000000000000000000000000000000000000000000000000000000000000000',
      data: encodedData,
    }, signer as any);
    console.log('DATA', offchainAttestation)
    setData(offchainAttestation)
  }, [signer])

  return { data, eas, getAttestation }
}
