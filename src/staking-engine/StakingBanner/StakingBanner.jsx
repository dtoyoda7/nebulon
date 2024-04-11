import React from "react";
import balanceIm from '../assets/images/balance.png';
import "./StakingBanner.scss";

const StakingBanner = ({
    balance,
    userStakes,
    earnings,
    totalStaked,
    valueAmount,
    onChangeAmount,
    onClickDeposit,
    onClickWithdraw,
    onClickClaim,
    titleMain,
    setInputAmount,
    setInputAmountStake,
    inputAmountStake
}) => {
    return (
        <div className="banner-area">
            {/* <div className="banner-images">
            <img src={bannerGif} alt="img" />
        </div> */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="staking-content">
                            <div className="staking-item">
                                <div className="h4">AVN Balance</div>
                                <div className="h3 pb-1">{balance} AVN</div>
                                <div className="form">
                                    <div className="h5 title">Stake AVN</div>
                                    <div className="form-content">
                                        <div className="form-input">
                                            <input
                                                value={inputAmountStake}
                                                onChange={(e) => setInputAmountStake(e.target.value)}
                                                type="number" placeholder="0.00" />
                                            <button onClick={() => setInputAmountStake(balance)}>MAX</button>
                                        </div>
                                        <button onClick={onClickDeposit} className="btn-lg">{titleMain}</button>
                                    </div>
                                </div>
                                <div className="form">
                                    <div className="h5 title">Available To Unstake</div>
                                    <div className="form-content">
                                        <div className="form-input">
                                            <input
                                                value={valueAmount}
                                                onChange={onChangeAmount}
                                                type="number" placeholder="0.00" />
                                            <button onClick={() => setInputAmount(userStakes)}>MAX</button>
                                        </div>
                                        <button onClick={onClickWithdraw} className="btn-lg">UNSTAKE</button>
                                    </div>
                                </div>
                                <div className="unstacking">
                                    Unstaking - 30 Days Lock
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="staking-content">
                            <div className="staking-item d-flex align-items-center">
                                <div className="available-text">
                                    <div className="h3 pb-2">{totalStaked} AVN</div>
                                    <p>Total Staked</p>
                                </div>
                                <div className="ms-auto">
                                    <img src={balanceIm} alt="balance" height={60} />
                                </div>
                            </div>
                            <div className="staking-item mt-5 d-flex align-items-center">
                                <div className="available-text">
                                    <div className="h3 pb-2">{userStakes} AVN</div>
                                    <p>My Staked AVN</p>
                                </div>
                                <div className="ms-auto">
                                    <img src={balanceIm} alt="balance" height={60} />
                                </div>
                            </div>
                            <div className="staking-item mt-5">
                                <div className="available-text">
                                    <div className="h4">Your Earnings</div>
                                    <div className="h3 pb-4">{earnings} AVN</div>
                                </div>
                                <hr />
                                <div className="d-flex pt-4 align-items-center">
                                    <div className="h6">APY Rate</div>
                                    <div className="h3 ms-auto primary-c">50 %</div>
                                </div>
                                <div className="form">
                                    <div className="h5 title">Earnings - Deposited Daily</div>
                                    <div className="form-content">
                                        <div className="form-input">
                                            <input readOnly value={`${earnings} AVN`} type="text" placeholder="0.00" />
                                            <button>MAX</button>
                                        </div>
                                        <button onClick={onClickClaim} className="btn-lg">CLAIM</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StakingBanner
