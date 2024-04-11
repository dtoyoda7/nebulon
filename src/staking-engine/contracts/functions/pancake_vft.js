import { CONTRACT_ADDRESSES, UINT256_MAX } from "../../utils/constants";
import { toEther } from "../../utils/helpers";
import { pancake_vft_contract } from "../getContracts";

import {
  transactionFailed,
  transactionRejected,
  transactionSuccess,
} from "../../hooks/swal2";
import { getWeb3 } from "../getContracts";

export const balanceOf = async (account) => {
  try {
    let contract = pancake_vft_contract();
    return parseFloat(
      toEther(await contract?.methods.balanceOf(account).call())
    ).toFixed(2);
  } catch (e) {
    console.log("balanceOf", e);
    return "0";
  }
};

export const allowance = async (account) => {
  try {
    let contract = pancake_vft_contract();
    return (
      parseInt(
        await contract?.methods
          .allowance(account, CONTRACT_ADDRESSES.stakingContract)
          .call()
      ) >= parseInt(UINT256_MAX)
    );
  } catch (e) {
    // console.log("allowance", e);
    return false;
  }
};

export const approve = async (account, cb = () => { }) => {
  try {
    let txHash;
    let contract = pancake_vft_contract();
    await contract?.methods
      .approve(CONTRACT_ADDRESSES.stakingContract, UINT256_MAX)
      .send({
        from: account,
      })
      .on("transactionHash", (hash) => {
        txHash = hash;
      })
      .then((receipt) => {
        transactionSuccess();
      })
      .catch((e) => {
        if (e.code === 4001) {
          transactionRejected();
        } else if (e?.message?.includes("not mined within 50 blocks")) {
          const web3 = getWeb3();
          if (web3) {
            const handle = setInterval(() => {
              web3.eth.getTransactionReceipt(txHash).then((res) => {
                if (res != null && res.blockNumber > 0) {
                  clearInterval(handle);
                  if (res.status) {
                    transactionSuccess();
                  } else {
                    transactionFailed();
                  }
                }
              });
            });
          }
        } else {
          transactionFailed();
        }
      });
    cb();
  } catch (e) {
    // console.log("approve", e);
  }
};
