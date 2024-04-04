const DappPage = () => {
    return (
        <div>
            <div className="mx-4 lg:mx-40 mt-40">
                <div>
                    <div className="text-center text-4xl lg:text-6xl font-semibold my-10">Trust Launchpad</div>
                    <hr className="m-auto border-[#355396] border-[1.5px] w-16" />
                    <div className="text-md text-center lg:text-left lg:text-xl mt-10">
                        <img className="w-full" src={require("../../assets/images/DEXView.jpg")} alt="" />
                    </div>
                </div>
                <div>
                    <div className="text-center text-4xl lg:text-6xl font-semibold my-10">Your Journey Starts Here</div>
                    <div className="flex justify-center">
                        <button className="px-8 py-4 rounded-md bg-[#FFF] text-black font-semibold uppercase">Connect Wallet</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { DappPage };