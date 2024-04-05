import { Accordion } from "flowbite-react";

const FAQPage = () => {
    return (
        <div>
            <div className="mx-4 lg:mx-40 mt-40">
                <div>
                    <div className="text-center text-4xl lg:text-6xl font-semibold my-10">Frequently Asked Questions</div>
                    <hr className="m-auto border-[#355396] border-[1.5px] w-16" />
                    <div className="text-md text-center lg:text-xl mt-5 font-semibold">Please reach out to us if you cannot find an answer to your question.</div>
                    <div className="text-md text-center lg:text-left lg:text-xl mt-10">
                        <Accordion collapseAll className="border-none">
                            <Accordion.Panel>
                                <Accordion.Title className="border-none">
                                    <p className="text-2xl text-white text-left my-5">What is Trust Launchpad ?</p>
                                </Accordion.Title>
                                <Accordion.Content className="border-none">
                                    <p className="mb-2 text-white">
                                        Trust Launchpad is decentralised multi chain crowd funding platform built for web3 projects, empowering web3 projects to distribute tokens and raise liquidity.
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>
                            <Accordion.Panel>
                                <Accordion.Title>
                                    <p className="text-2xl text-white text-left my-5">How do I participate in upcoming IDO's?</p>
                                </Accordion.Title>
                                <Accordion.Content className="border-none">
                                    <p className="mb-2 text-white">
                                        Step1 - Buy $TRUST token from PancakeSwap or any approved centralised exchange. <br />
                                        Step2 - Stake your $TRUST token for 30 days. Note, your $TRUST token must be staked for at least 3 days before the IDO starts. <br />
                                        Step3 - Connect your wallet to the Trust Launchpad dapp. <br />
                                        Step4 - Check the amount of USDT allocated to you. <br />
                                        Step5 - Fund your account with the blockchain mainnet token according to the amount allocated to you. <br />
                                        Step6 - Wait for IDO to open before you can participate.
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>
                            <Accordion.Panel>
                                <Accordion.Title>
                                    <p className="text-2xl text-white text-left my-5">What are the 'guaranteed' and 'lottery' allocation?</p>
                                </Accordion.Title>
                                <Accordion.Content className="border-none">
                                    <p className="mb-2 text-white">
                                        There is no lottery or tier. Everyone who meets the minimum staking requirements will be given a guaranteed allocation.
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>
                            <Accordion.Panel>
                                <Accordion.Title>
                                    <p className="text-2xl text-white text-left my-5">How can I be sure my investment is safe?</p>
                                </Accordion.Title>
                                <Accordion.Content className="border-none">
                                    <p className="mb-2 text-white">
                                        All the projects launched on Trust Launchpad will be vetted and audited to ensure Trust Launchpad investors are safe against scams and rugs. As an investor you need to make sure you thoroughly understand the project that you will be investing in, do all the required research and only invest
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>
                            <Accordion.Panel>
                                <Accordion.Title>
                                    <p className="text-2xl text-white text-left my-5">can this be present with a similar structure to the original?</p>
                                </Accordion.Title>
                                <Accordion.Content className="border-none">
                                    <p className="mb-2 text-white">
                                        All the projects launched on Trust Launchpad will be vetted and audited to ensure Trust Launchpad investors are safe against scams and rugs.
                                        As an investor you need to make sure you thoroughly understand the project that you will be investing in, do all the required research and only invest when you are confident.
                                        Trust Launchpad does not provide any financial advice or force you to invest in any project.
                                        Note: in the crypto space, the general rule is, invest what you can afford to lose.
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>
                            <Accordion.Panel>
                                <Accordion.Title>
                                    <p className="text-2xl text-white text-left my-5">Does purchasing more $TRUST tokens give more allocation?</p>
                                </Accordion.Title>
                                <Accordion.Content className="border-none">
                                    <p className="mb-2 text-white">
                                        Yes, the more $TRUST token you stake the more allocation you will receive.
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>
                            <Accordion.Panel>
                                <Accordion.Title>
                                    <p className="text-2xl text-white text-left my-5">If I transfer tokens I receive from a Presale to different wallets, will I still be entitled to a refund?</p>
                                </Accordion.Title>
                                <Accordion.Content className="border-none">
                                    <p className="mb-2 text-white">
                                        No. You can only request a refund when you leave your token in the same wallet used to participate in the IDO; should you sell or move part or all the tokens you will be disqualified from the refund option.
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>
                            <Accordion.Panel>
                                <Accordion.Title>
                                    <p className="text-2xl text-white text-left my-5">What is the minimum amount of $TRUST token required before I can participate in a Private Sale?</p>
                                </Accordion.Title>
                                <Accordion.Content className="border-none">
                                    <p className="mb-2 text-white">
                                        10,000,000 $TRUST Tokens (subject to change)
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>
                            <Accordion.Panel>
                                <Accordion.Title>
                                    <p className="text-2xl text-white text-left my-5">How do I find the result of an IDO?</p>
                                </Accordion.Title>
                                <Accordion.Content className="border-none">
                                    <p className="mb-2 text-white">
                                        Generally, within 24 hours after the IDO end date, you will receive your tokens; make sure to add the project token contract to your wallet.
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>
                            <Accordion.Panel>
                                <Accordion.Title>
                                    <p className="text-2xl text-white text-left my-5">What is the minimum amount of $TRUST Token required to be staked to participate in an IDO?</p>
                                </Accordion.Title>
                                <Accordion.Content className="border-none">
                                    <p className="mb-2 text-white">
                                        50,000 $TRUST tokens (subject to change)
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { FAQPage };