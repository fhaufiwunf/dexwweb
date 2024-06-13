import React, { useState, useEffect } from "react";
import { Input, Popover, Radio, Modal, message } from "antd";
import {
  AccountBookOutlined,
  DownOutlined,
  SettingOutlined,
} from "@ant-design/icons";
// import tokenList from "../tokenList.json";

function Swap() {
  const [Slippage, setSlippage] = useState(2.5);
  const [tokenOneAmount, setTokenOneAmount] = useState(null);
  const [tokenTwoAmount, setTokentwoAmount] = useState(null);
  // const [tokenOne, setTokenOne] = useState(tokenList[0]);
  // const [tokenTwo, setTokenTwo] = useState(tokenList[1]);
  const [tokenOne, setTokenOne] = useState({ name: "", ticker: "", img: "" });
  const [tokenTwo, setTokenTwo] = useState({ name: "", ticker: "", img: "" });
  const [isOpen, setIsOpen] = useState(false);
  const [changeToken, setChangeToken] = useState(1);

  function handleSlippageChange(e) {
    setSlippage(e.target.value);
  }

  function changeAmount(e) {
    setTokenOneAmount(e.target.value);
  }

  function switchToken() {
    const one = tokenOne;
    const two = tokenTwo;
    setTokenOne(two);
    setTokenTwo(one);
  }

  function openModal(asset) {
    setChangeToken(asset);
    setIsOpen(true);
  }

  function modifyToken(asset) {
    if (changeToken === 1) {
      setTokenOne(asset);
    } else {
      setTokenTwo(asset);
    }
    setIsOpen(false);
  }

  const settings = (
    <>
      <div>Slippage Tolerance</div>
      <div>
        <Radio.Group value={Slippage} onChange={handleSlippageChange}>
          <Radio.Button value={0.5}>0.5%</Radio.Button>
          <Radio.Button value={2.5}>2.5%</Radio.Button>
          <Radio.Button value={5}>5.0%</Radio.Button>
        </Radio.Group>
      </div>
    </>
  );

  return (
    <>
      <Modal
        open={isOpen}
        footer={null}
        onCancel={() => setIsOpen(false)}
        title="Select a token"
      >
        <div className="modalContent">
          {/* {tokenList?.map((e, i) => {
            return ( */}
          <div
            className="tokenChoice"
            onClick={() =>
              modifyToken({ name: "Token 1", ticker: "T1", img: "token1.png" })
            }
          >
            <img src="token1.png" alt="T1" className="tokenLogo" />
            <div className="tokenChoiceName">
              <div className="tokenName">Token 1</div>
              <div className="tokenTicker">T1</div>
            </div>
          </div>
          <div
            className="tokenChoice"
            onClick={() =>
              modifyToken({ name: "Token 2", ticker: "T2", img: "token2.png" })
            }
          >
            <img src="token2.png" alt="T2" className="tokenLogo" />
            <div className="tokenChoiceName">
              <div className="tokenName">Token 2</div>
              <div className="tokenTicker">T2</div>
            </div>

            {/* Thêm các token giả định khác */}
          </div>
          {/* );
          })} */}
        </div>
      </Modal>
      <div className="tradeBox">
        <div className="tradeBoxHeader">
          <h4>swap</h4>
          <Popover
            content={settings}
            title="setting"
            trigger="click"
            placement="bottomRight"
          >
            <SettingOutlined className="cog" />
          </Popover>
        </div>
        <div className="inputs">
          <Input
            placeholder="0"
            value={tokenOneAmount}
            onChange={changeAmount}
          />
          <Input placeholder="0" value={tokenTwoAmount} disabled={true} />
          <div className="switchButton" onClick={switchToken}>
            <AccountBookOutlined className="switchArrow" />
          </div>
          <div className="assetOne" onClick={() => openModal(1)}>
            <img src={tokenOne.img} alt="assetOneLogo" className="assetLogo" />
            {tokenOne.ticker}
            <DownOutlined />
          </div>
          <div className="assetTwo" onClick={() => openModal(2)}>
            <img src={tokenTwo.img} alt="assetOneLogo" className="assetLogo" />
            {tokenTwo.ticker}
            <DownOutlined />
          </div>
        </div>
        <div className="swapButton" disabled={!tokenOneAmount}>
          swap
        </div>
      </div>
    </>
  );
}

export default Swap;
