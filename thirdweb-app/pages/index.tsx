import { Web3Button, useContract, useContractRead } from "@thirdweb-dev/react";

const contractAddress = "0x1522fc5195c36514b3424E26C346f502CA84f370";

const Home = () => {
  const { contract } = useContract(contractAddress);
  const { data, isLoading } = useContractRead(contract, "greet");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <h1 style={{ textAlign: "center" }}>{data}</h1>
      )}

      <Web3Button
        contractAddress={contractAddress}
        action={(contract) =>
          contract.call("setGreeting", ["Hey from my app!"])
        }
        style={{ height: 64, width: 256 }}
      >
        Set Greeting
      </Web3Button>
    </div>
  );
};

export default Home;
