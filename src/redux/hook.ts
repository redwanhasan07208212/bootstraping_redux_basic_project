import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

// Typed version of useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Typed version of useDispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
