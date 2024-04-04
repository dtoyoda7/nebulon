const IDOPolicyPage = () => {
    return (
        <div>
            <div className="mx-4 lg:mx-40 mt-40">
                <div>
                    <div className="uppercase text-center text-4xl lg:text-6xl font-semibold my-10">Trust Launchpad IDO Policy</div>
                    <hr className="m-auto border-[#355396] border-[1.5px] w-16" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-20">
                        <div>
                            <img className="w-full" src={require("../../assets/images/DEXView.jpg")} alt="" />
                        </div>
                        <div className="text-md text-center lg:text-left lg:text-xl">
                            <h1 className="text-4xl">Policy</h1>
                            <p className="mt-10">We are sharing TRUST LAUNCHPAD's new and improved security guidelines to promote a safer web3 investment experience for everyone.</p>
                            <p className="mt-10">From the start of TRUST LAUNCHPAD we have always been vocal of our goal to create a safe and secure environment for all presale investors (small, medium or large) and early phase crypto projects. We have proven our commitment to that of safeguarding your trust by ensuring that investors have full exclusive access to pre-audited, safe, innovative and rewarding projects with compliant audits.</p>

                            <p className="mt-10">Because of the unprecedented rise of crypto scams and greedy opportunists, we cannot ignore those projects with unprofessional teams who don't abide by TRUST LAUNCHPAD guidelines, thereby posing a serious threat to our community.</p>
                            <p className="mt-10">The TRUST LAUNCHPAD professional team and partners review and evaluate the EXPERTISE of the entire team, review and evaluate the DEVELOPMENT PLAN and project timeline, in addition to reviewing and evaluating the MARKETING PLAN of the project.</p>
                            <p className="mt-10">These rules are effective immediately and applicable to all our future partnered projects. Our aim is to provide peace of mind and protect the funds of both our investors and our partnered projects. We believe that it is better to exercise scrutiny of projects from the outset than to risk reputational damage due to a relaxed "Every project is welcome to TRUST LAUNCHPAD" approach. Only quality projects that meet our rigorous standards will get to stage their fundraising with TRUST LAUNCHPAD. Not only can investors feel confident about the our processes to mitigate risk but also that they will have access to secure and reliable projects that have the best chance of success.</p>

                            <p className="mt-10">In addition to our in-house strict auditing procedures, we think now is great time to reinforce a number of TRUST LAUNCHPAD safeguarding rules. These are in place to ensure investors safety, prevent scams and frauds, and guarantee the value of the project. This also serves as a reminder to all projects of the guidelines that they should follow before they are able to pursue any IDOS or private/public sale, and before they are allowed to launch on TRUST LAUNCHPAD.</p>
                            <p className="mt-10">1. The project will have to provide liquidity in a 1:1 ratio in relation to its initial market cap. For example if a project has an initial market cap of $100k, it will need to have a $50k of liquidity in USD + $50k of liquidity in the project token. And TRUST LAUNCHPAD team will help to calculate the real initial market cap for the project by the time of launching.</p>
                            <p className="mt-10">2. The liquidity of the token will have to be locked with a reputable locker company like Unicrypt, Pinksale or Flokifi for a period of 6 months.</p>
                            <p className="mt-10">3. The team tokens are required to be locked.</p>
                            <p className="mt-10">4. Listing date of the token must be within 10 days of the IDO. TRUST LAUNCHPAD reserves the right to refund investors if listing is postponed.</p>
                            <p className="mt-10">6. TRUST LAUNCHPAD does not support vesting schedules.</p>
                            <p className="mt-10">7. The Funds raised from TRUST LAUNCHPAD will be held on the smart contract for a period of 72 hours which excludes weekends (Saturdays and Sundays).</p>
                            <p className="mt-10">8. Investors, can request for a refund with this 72 hours when the price falls below the IDOS price.</p>
                            <p className="mt-10">9. TRUST LAUNCHPAD team reserves the right to cancel ongoing or concluded IDO's and refund investors their investment.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { IDOPolicyPage };