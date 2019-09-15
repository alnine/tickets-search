import tkLogo from "../../img/tk-logo.png";
import suLogo from "../../img/su-logo.png";
import s7Logo from "../../img/s7-logo.png";
import baLogo from "../../img/ba-logo.png";

const carriers = {
  TK: {
    name: "Turkish Airline",
    img: tkLogo
  },
  S7: {
    name: "S7 Airline",
    img: s7Logo
  },
  SU: {
    name: "Turkish Airline",
    img: suLogo
  },
  BA: {
    name: "Turkish Airline",
    img: baLogo
  }
};

export function getCarrierData(carrier) {
  return carriers[carrier];
}
