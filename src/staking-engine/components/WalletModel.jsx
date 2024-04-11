import {
  Avatar,
  Box,
  CircularProgress,
  Dialog,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";

import mm from "../assets/mm.png";
import wc from "../assets/wc.png";
import cb from "../assets/cb.png";
import tw from "../assets/TWT.png";

import logout from "../assets/logout.png";

import { useCustomWeb3React } from "../hooks/useCustomWeb3React";
import { walletList } from "../utils/connectors";
import { Row } from "./styled-components";
import CloseIcon from "@mui/icons-material/Close";

const wallets = [
  {
    name: "Metamask",
    icon: mm,
    connector: walletList[0].connector,
  },
  {
    name: "Trust Wallet",
    icon: tw,
    connector: walletList[0].connector,
  },
  {
    name: "Coinbase Wallet",
    icon: cb,
    connector: walletList[0].connector,
  },
  {
    name: "Walletconnect",
    icon: wc,
    connector: walletList[1].connector,
  },
];

export function WalletModel({ setOpen, open }) {
  const [selectedValue, setSelectedValue] = React.useState("");
  const { activate, account, chainId, deactivate } = useCustomWeb3React();
  const theme = useTheme();

  const onClose = (value) => {
    setOpen(false);
    setSelectedValue("");
  };

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = async (wallet) => {
    setSelectedValue(wallet.name);
    try {
      await activate(wallet.connector);
      onClose(undefined);
    } catch (e) { }
    setSelectedValue("");
  };

  const handlerDeactivate = () => {
    deactivate();
    onClose(undefined);
  };

  return (
    <>
      <Dialog
        PaperProps={{
          style: {
            borderRadius: 20,
            minWidth: 320,
            backgroundColor: "#0B0E11",
            color: "white",
            border: "1px solid yellow",
          },
        }}
        onClose={handleClose}
        open={open}
      >
        <DialogTitle>
          <Row justifyContent={"space-between"}>
            <IconButton style={{ visibility: "hidden" }}>
              <CloseIcon style={{ color: "white" }} />
            </IconButton>
            <Typography
              style={{
                color: theme.palette.common.orange,
                fontWeight: "bold",
                letterSpacing: 1,
              }}
            >
              Wallets
            </Typography>
            <IconButton onClick={onClose}>
              <CloseIcon style={{ color: "white" }} />
            </IconButton>
          </Row>
        </DialogTitle>
        <List sx={{ pt: 0 }}>
          {wallets.map((wallet) => (
            <ListItem
              button
              style={{
                // background: `linear-gradient(to right, ${theme.palette.primary.main} , ${theme.palette.secondary.main})`,
                backgroundColor: "#25272F",
                padding: "5px 10px",
                marginTop: 5,
              }}
              onClick={() => handleListItemClick(wallet)}
              key={wallet.name}
            >
              <ListItemAvatar>
                <Avatar src={wallet.icon} sx={{ width: 30, height: 30 }} />
              </ListItemAvatar>
              <ListItemText
                style={{
                  color: theme.palette.common.yellow,
                }}
                primary={wallet.name}
              />
              {selectedValue === wallet.name && (
                <CircularProgress
                  size={20}
                  style={{
                    color: "yellow",
                  }}
                />
              )}
            </ListItem>
          ))}

          {account && (
            <ListItem
              button
              style={{
                // background: `linear-gradient(to right, ${theme.palette.primary.main} , ${theme.palette.secondary.main})`,
                backgroundColor: "#25272F",

                padding: "5px 10px",
                marginTop: 5,
              }}
              onClick={handlerDeactivate}
            >
              <ListItemAvatar>
                <Avatar src={logout} sx={{ width: 30, height: 30 }} />
              </ListItemAvatar>
              <ListItemText
                style={{
                  color: "white",
                }}
                primary={"Disconnect"}
              />
            </ListItem>
          )}
        </List>
        <Box mt={2} />
      </Dialog>
    </>
  );
}
