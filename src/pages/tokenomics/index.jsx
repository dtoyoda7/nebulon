const TokenomicsPage = () => {
    return (
        <div>
            <div className="mx-4 lg:mx-40 mt-40">
                <div>
                    <div className="text-center text-4xl lg:text-6xl font-semibold my-10">$Trust Tokenomics</div>
                    <hr className="m-auto border-[#355396] border-[1.5px] w-16" />
                    <div className="mt-5 grid sm:grid-cols-1 lg:grid-cols-2 gap-20">
                        <div>
                            <h6 className="text-center text-2xl lg:text-4xl font-semibold my-5">Tokenomics</h6>
                            <img className="w-full h-3/6 object-fit object-center" src={require("../../assets/images/Logo3.png")} alt="" />
                            <div className="mt-5">
                                <p className="text-md lg:text-xl font-medium text-center">Our token will launch on the BSC chain.<br /> Only 1 Billion tokens will be issued.</p>
                                <div className="text-md lg:text-xl text-center font-medium mt-10">
                                    <p>Taxes</p>
                                    <p>Buy tax - 2%</p>
                                    <p>Sell tax - 5%</p>
                                    <p>All tax to marketing wallet</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h6 className="text-center text-2xl lg:text-4xl font-semibold my-5">Token Allocation</h6>
                            <img className="w-full h-3/6 object-fit object-center" src={require("../../assets/images/TLP Tokenomics.png")} alt="" />
                            <div className="mt-5 text-md lg:text-xl text-center font-medium">
                                <p>PRESALE - 400,000,000</p>
                                <p>DEX LIQUIDITY - 200,000,000</p>
                                <p>STAKING - 150,000,000</p>
                                <p>CEX - 90,000,000</p>
                                <p>ECOSYSTEM - 50,000,000</p>
                                <p>TEAM - 80,000,000</p>
                                <p>ADVISOR - 30,000,000</p>
                                <p className="mt-10">Our Contract is Published and Verified</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mt-28">
                        <div className="flex items-center">
                            <img className="w-full lg:h-96 object=center object-cover" src={require("../../assets/images/TLP6.png")} alt="" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h1 className="text-center text-4xl lg:text-5xl font-semibold my-4 lg:my-8">Staking & Revenue Sharing</h1>
                            <p className="text-md lg:text-xl font-normal text-center">Earn rewards and participate in private sales and IDOs.</p>
                            <p className="text-md lg:text-xl font-normal text-center mt-10">Put your $TRUST token to work by locking it in the staking dapp and earn a share of 35% of Trust Launchpad's net income.</p>
                        </div>
                    </div>
                </div>
                <div className="mt-20 lg:mt-32">
                    <h1 className="text-center text-4xl lg:text-6xl font-semibold my-4 lg:my-8">Trust Launchpad Roadmap</h1>
                    <hr className="m-auto border-[#355396] border-[1.5px] w-16" />
                    <div className="lg:flex justify-between mt-10">
                        <div className="text-lg lg:text-xl text-center">
                            <h1 className="text-2xl my-10 lg:text-3xl mb-5">Phase 1</h1>
                            <p>Logo and Brand Design</p>
                            <p>BSC contract deployment</p>
                            <p>Audit and KYC</p>
                            <p>Whitepaper</p>
                            <p>Community development</p>
                        </div>
                        <div className="text-lg lg:text-xl text-center">
                            <h1 className="text-2xl my-10 lg:text-3xl mb-5">Phase 2</h1>
                            <p>Partnership with influencers</p>
                            <p>Twitter Campaign</p>
                            <p>Pre launch marketing</p>
                            <p>Presale</p>
                            <p>Chinese and Spanish KOLs</p>
                        </div>
                        <div className="text-lg lg:text-xl text-center">
                            <h1 className="text-2xl my-10 lg:text-3xl mb-5">Phase 3</h1>
                            <p>Staking release</p>
                            <p>P2P development</p>
                            <p>Listing on PancakeSwap</p>
                            <p>Multi chain launchpad release</p>
                        </div>
                    </div>
                    <div className="lg:flex justify-around mt-20">
                        <div className="text-lg lg:text-xl text-center">
                            <h1 className="text-2xl my-10 lg:text-3xl mb-5">Phase 4</h1>
                            <p>Marketing and partners</p>
                            <p>Coingecko listing</p>
                            <p>First tier1 CEX listing</p>
                        </div>
                        <div className="text-lg lg:text-xl text-center">
                            <h1 className="text-2xl my-10 lg:text-3xl mb-5">Phase 5</h1>
                            <p>CMC listing</p>
                            <p>Ambassador program</p>
                            <p>P2P release</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { TokenomicsPage };