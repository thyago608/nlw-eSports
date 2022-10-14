import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

export const useModalDuo = () => useContext(ModalContext);
