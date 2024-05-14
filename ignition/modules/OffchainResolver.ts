import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const INITIAL_URL = "https://api.starknet.id/crosschain/ethereum/resolve";
const INITIAL_SIGNER = "0x47D4c3Be0d05D100E739Bda560Fe0243b2702FdE";

const OffchainResolverModule = buildModule("OffchainResolverModule", (m) => {
  // Deploy the OffchainResolver contract
  const offchainResolver = m.contract("OffchainResolver");

  // Set the URL
  m.call(offchainResolver, "setURL", [INITIAL_URL]);

  // Set the signers
  m.call(offchainResolver, "setSigners", [[INITIAL_SIGNER]]);

  return { offchainResolver };
});

export default OffchainResolverModule;
