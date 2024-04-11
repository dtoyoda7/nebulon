const HomePage = () => {
    return (
        <div>
            <div className="w-full h-5/6">
                <img className="w-full h-[400px] lg:h-[800px] object-cover object-center" src={require("../../assets/images/banner.jpg")} alt="" />
                <div className="absolute top-0 flex flex-col items-center justify-center w-full h-[400px] lg:h-[800px]">
                    <h1 className="text-4xl lg:text-6xl font-semibold">Launching Soon</h1>
                    <button className="px-8 py-4 rounded-md bg-[#FFF] text-black font-semibold uppercase mt-10">Apply for an IDO</button>
                </div>
            </div>
            <div className="mx-4 lg:mx-40">
                <div>
                    <div className="text-center text-4xl lg:text-5xl font-semibold my-10">Trust Launchpad Partners</div>
                    <hr className="m-auto border-[#355396] border-[1.5px] w-16" />
                    <div className="mt-5 grid sm:grid-cols-1 lg:grid-cols-3 gap-20">
                        <div>
                            <h6 className="text-center text-xl my-5">Pinksale</h6>
                            <img className="w-full h-full" src={require("../../assets/images/pinksale-2000x1000.webp")} alt="" />
                        </div>
                        <div>
                            <h6 className="text-center text-xl my-5">DEXView</h6>
                            <img className="w-full h-full" src={require("../../assets/images/DEXView.jpg")} alt="" />
                        </div>
                        <div>
                            <h6 className="text-center text-xl my-5">ASSURE DEFI</h6>
                            <img className="w-full h-full" src={require("../../assets/images/Assure defi logo.png")} alt="" />
                        </div>
                    </div>
                </div>
                <div className="pt-32 lg:pt-48">
                    <div className="text-center text-4xl lg:text-6xl font-semibold my-10">Trust Launchpad</div>
                    <hr className="m-auto border-[#355396] border-[1.5px] w-16" />
                    <div className="mt-10 lg:mt-0 grid grid-cols-1 lg:grid-rows-3 gap-10 lg:gap-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
                            <div className="flex items-center">
                                <img className="w-full lg:h-96 object-center object-cover" src={require("../../assets/images/TLP10.webp")} alt="" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <h1 className="text-center text-4xl lg:text-6xl font-semibold my-4 lg:my-8">About Us</h1>
                                <p className="text-md lg:text-2xl font-normal text-center">Trust Launchpad is decentralised multi chain crowd funding platform built for web3 projects, empowering web3 projects to distribute tokens and raise liquidity. Allowing projects to explore new ideas and expand their horizons.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                            <div className="flex flex-col justify-center">
                                <h1 className="text-center text-4xl lg:text-6xl font-semibold my-4 lg:my-8">Our Mission</h1>
                                <p className="text-md lg:text-2xl font-normal text-center">Trust Launchpad aims to eliminate scams by bringing only trusted projects to investors.</p>
                            </div>
                            <div className="flex items-center">
                                <img className="w-full lg:h-96 object-center object-cover" src={require("../../assets/images/TLP1.png")} alt="" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
                            <div>
                                <img className="w-full lg:h-96 object-center object-cover" src={require("../../assets/images/TLP_y.webp")} alt="" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <h1 className="text-center text-4xl lg:text-6xl font-semibold my-4 lg:my-8">Our Aim</h1>
                                <div className="text-md lg:text-2xl font-normal text-center">
                                    <p className="mb-10">Trust Launchpad eliminates tier barriers, by allowing $TRUST token stakers to have a guaranteed allocation in the presale.</p>
                                    <p className="mb-10">Get early access to the ideas of tomorrow.</p>
                                    <p className="mb-10">Highly-vetted Web3 projects you can trust. Supported by industry-leading creators and funds.</p>
                                    <p className="mb-10">Our aim is to be the pre-eminent place to launch your crypto project.</p>
                                </div>
                            </div>
                    </div>
                    </div>
                </div>
                <div className="pt-10 lg:pt-20">
                    <div className="text-center text-4xl lg:text-6xl font-semibold my-10">Follow Us On Social Media</div>
                    <hr className="m-auto border-[#355396] border-[1.5px] w-16" />
                    <div className="lg:flex justify-center mt-10">
                        <div className="flex flex-col justify-center items-center my-8 mx-10">
                            <img className="rounded-full mb-5 w-60 lg:w-96 object-center object-cover" src={require("../../assets/images/TLP8.png")} alt="" />
                            <div className="m-auto flex flex-col items-center w-full lg:w-[400px]">
                                <p className="text-center lg:text-4xl font-semibold">Telegram</p>
                                <p className="text-center lg:text-xl my-10">Join our Telegram. <br /> Meet the community, participate in the discussion and fun activities.</p>
                                <a href="https://t.me/TrustLaunchpadPortal" className="px-8 py-4 rounded-md bg-[#FFF] text-black font-semibold uppercase">Join Telegram</a>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center my-8 mx-10">
                            <img className="rounded-full mb-5 w-60 lg:w-96 object-center object-cover" src={require("../../assets/images/TLP5.png")} alt="" />
                            <div className="m-auto flex flex-col items-center w-full lg:w-[220px]">
                                <p className="flex items-center text-center lg:text-4xl font-semibold">
                                    <img className="w-full h-[40px]" src={require("../../assets/images/xlogo.png")} alt="" />
                                    <span>(Twitter)</span>
                                </p>
                                <p className="text-center lg:text-xl my-10">Keep up to date with our PR and marketing; join the conversation.</p>
                                <a href="https://twitter.com/Trustlaunchpad" className="px-8 py-4 rounded-md bg-[#FFF] text-black font-semibold uppercase">Follow Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { HomePage };