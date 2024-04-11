import "bootstrap/dist/css/bootstrap.min.css";
import "./App.sass";
import Header from "./Header/Header";
import StakingBanner from "./StakingBanner/StakingBanner";
import Footer from "./Footer/Footer";
import { WalletModel } from "./components/WalletModel";
import { useCustomWeb3React } from "./hooks/useCustomWeb3React";
import "react-toastify/dist/ReactToastify.css";
import {
  calculateEarnings,
  stake,
  stakes,
  unstake,
  withdrawEarnings,
  gettotalStaked,
} from "./contracts/functions/stakingContract";
import {
  allowance,
  approve,
  balanceOf,
} from "./contracts/functions/pancake_vft";
import { ZERO_ADDRESS } from "./utils/constants";
import { useEffect, useState } from "react";

function Staking() {
  const { account, chainId } = useCustomWeb3React();

  const [random, setRandom] = useState(Math.random());

  const [inputAmount, setInputAmount] = useState("");

  const [inputAmountStake, setInputAmountStake] = useState("");

  const [isApproved, setIsApproved] = useState(false);

  const [refAddr, setRefAddr] = useState("");

  const [balance, setBalance] = useState("0");
  const [userStakes, setUserStakes] = useState("0");
  const [earnings, setEarnings] = useState("0");
  const [totalStaked, setTotalStaked] = useState("0");

  const [open, setOpen] = useState(false);

  const handlerOpenWallets = () => setOpen(true);

  const handlerInputAmount = (e) => setInputAmount(e.target.value);

  const handlerRandom = () => setRandom(Math.random());

  const handlerStake = async () => {
    if (account) {
      stake(account, refAddr ? refAddr : ZERO_ADDRESS, inputAmountStake, () => {
        handlerRandom();
      });
    }
  };

  const handlerApprove = async () => {
    if (account) {
      approve(account, () => {
        handlerRandom();
      });
    }
  };

  const handlerUnstake = async () => {
    if (account) {
      unstake(account, inputAmount, () => {
        handlerRandom();
      });
    }
  };

  const handlerIsApproved = async () => {
    if (account) {
      setIsApproved(await allowance(account));
    }
  };

  const handlerWithdrawEarnings = async () => {
    if (account) {
      withdrawEarnings(account, () => {
        handlerRandom();
      });
    }
  };

  const init = async () => {
    if (account) {
      const [_balance, _stakes, _earnings, _ts] = await Promise.all([
        balanceOf(account),
        stakes(account),
        calculateEarnings(account),
        gettotalStaked(),
      ]);

      setBalance(_balance);
      setUserStakes(_stakes);
      setEarnings(_earnings);
      setTotalStaked(_ts);

      console.log(_balance, _stakes, _earnings, _ts);
    }
  };

  useEffect(() => {
    init();
    handlerIsApproved();
  }, [account, chainId, random]);

  useEffect(() => {
    let path = window.location.pathname;
    let _ref = path.toLowerCase().slice(1);
    let isRef = /^0x[0-9a-f]{40}$/.test(_ref);
    if (isRef) {
      setRefAddr(_ref);
    } else {
      window.history.replaceState(undefined, undefined, "/");
    }
  }, []);

  const getTitleAndFunc = () => {
    if (!account) {
      return {
        title: "Connect Wallet",
        func: handlerOpenWallets,
      };
    } else if (!isApproved) {
      return {
        title: "Approve",
        func: handlerApprove,
      };
    } else {
      return {
        title: "STAKE",
        func: handlerStake,
      };
    }
  };

  const safe = getTitleAndFunc();

  return (
    <>
      <WalletModel open={open} setOpen={setOpen} />
      <Header account={account} onClickConnect={handlerOpenWallets} />
      <StakingBanner
        balance={balance}
        userStakes={userStakes}
        totalStaked={totalStaked}
        earnings={earnings}
        valueAmount={inputAmount}
        onChangeAmount={handlerInputAmount}
        onClickDeposit={safe.func}
        titleMain={safe.title}
        onClickWithdraw={handlerUnstake}
        onClickClaim={handlerWithdrawEarnings}
        setInputAmount={setInputAmount}
        setInputAmountStake={setInputAmountStake}
        inputAmountStake={inputAmountStake}
      />
      <Footer />
    </>
  );
}

export default Staking;
