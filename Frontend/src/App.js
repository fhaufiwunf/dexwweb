import "./App.css";
import spaggheti from "./Spaggheti.json"
import Header from "./components/Header";
import Swap from "./components/Swap";
import Pool from "./components/Pool";
import { Routes, Route } from "react-router-dom";
import { useConnect, useAccount } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { ethers } from "ethers";


function App() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new MetaMaskConnector(),
  });


  const connectToContract = async () => {

    if (isConnected) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        "0xDCc6776B0a3FB62C8EC2494Ec45ac6503b9bA7E4", // contract address
        spaggheti.abi, // ABI
        signer
      );
      console.log("Contract address:", contract.address);
      return contract;
    }
  };


  return (
    <div className="App">
      <Header connect={connect} isConnected={isConnected} address={address} contract ={connectToContract}/>
      <div className="mainWindow">
        <Routes>
          <Route
            path="/"
            element={<Swap isConnected={isConnected} address={address} contract ={connectToContract}/>}
          />
          <Route path="/Pool" element={<Pool />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
