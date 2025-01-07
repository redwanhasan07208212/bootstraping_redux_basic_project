import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

export const useAppSeletor = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
