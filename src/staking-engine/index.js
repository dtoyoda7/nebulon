import React from "react";
import Staking from "./Staking";
import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "./utils/functions";

const StakingPage = () => {
	return (
		<React.StrictMode>
			<Web3ReactProvider getLibrary={getLibrary}>
				<Staking />
			</Web3ReactProvider>
		</React.StrictMode>
	)
}

export { StakingPage };