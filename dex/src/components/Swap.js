import React, {useState, useEffect} from 'react'
import { Input, Popover, Radio, Modal,message } from 'antd';
import {
  AccountBookOutlined,
  DownOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import tokenList from "../tokenList.json"

function Swap() {
    const [Slippage, setSlippage] = useState(2.5);
    const [tokenOneAmount, setTokenOneAmount] = useState(null);
    const [tokenTwoAmount, setTokentwoAmount] = useState(null);
    const [tokenOne, setTokenOne] =useState(tokenList[0]);
    const [tokenTwo, setTokenTwo] =useState(tokenList[1]);
    const [isOpen, setIsOpen] =useState(false);
    const [changeToken, setChangeToken] =useState(1);


    function handleSlippageChange(e){
      setSlippage(e.target.value);
    }

    function changeAmount(e){
      setTokenOneAmount(e.target.value);
    }

    function switchToken(){
      const one = tokenOne;
      const two = tokenTwo;
      setTokenOne(two);
      setTokenTwo(one);

    }

    function openModal(asset){
      setChangeToken(asset);
      setIsOpen(true);
    }

    function modifyToken(i){
      if (changeToken === 1){
        setTokenOne(tokenList[i]);
      } else{
        setTokenTwo(tokenList[i]);
      }
      setIsOpen(false);
      
    }
  
    const settings =(
      <>
        <div>Slippage Tolerance</div>
        <div>
          <Radio.Group value ={Slippage} onChange ={handleSlippageChange}>
            <Radio.Button value={0.5}>0.5%</Radio.Button>
            <Radio.Button value={2.5}>2.5%</Radio.Button>
            <Radio.Button value={5}>5.0%</Radio.Button>

          </Radio.Group>
        </div>
      </>
    )
  
  return (
    <>
    <Modal
      open={isOpen}
      footer={null}
      onCancel={() => setIsOpen(false)}
      title="Select a token"
    >
      <div
        className='modalContent'
      >
        {tokenList?.map((e,i)=>{
          return(
            <div
              className='tokenChoice'
              key ={i}
              onClick={() => modifyToken(i)}
            >
              <img src={e.img} alt={e.ticker} className='tokenLogo'/>
              <div className='tokenChoiceName'>
                <div className='tokenName'>{e.name}</div>
                <div className='tokenTicker'>{e.ticker}</div>
              </div>

            </div>

          );
        })}
      </div>
    </Modal>
    <div className='tradeBox'>
      <div className='tradeBoxHeader'>
        <h4>swap</h4>
        <Popover
          content={settings}
          title="setting"
          trigger="click"
          placement="bottomRight"
        >
          <SettingOutlined className="cog"/>
        </Popover>
        
      </div>
      <div className='inputs'>
        <Input placeholder='0' value={tokenOneAmount} onChange={changeAmount}/>
        <Input placeholder='0' value={tokenTwoAmount} disabled={true}/>
        <div className='switchButton' onClick={switchToken}>
          <AccountBookOutlined className='switchArrow'/>
        </div>
        <div className='assetOne' onClick={() =>openModal(1)}>
          <img src={tokenOne.img} alt='assetOneLogo' className='assetLogo'/>
          {tokenOne.ticker}
          <DownOutlined/>
        </div>
        <div className='assetTwo' onClick={() =>openModal(2)}>
          <img src={tokenTwo.img} alt='assetOneLogo' className='assetLogo'/>
          {tokenTwo.ticker}
          <DownOutlined/>
        </div>
      </div>
      <div className='swapButton'  disabled ={!tokenOneAmount}>swap</div>
    </div>
    </>
  )
}

export default Swap