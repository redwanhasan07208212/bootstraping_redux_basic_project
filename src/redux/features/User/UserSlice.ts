import { RootState } from "@/redux/store";
import { User } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  users: User[];
}
const initialState: InitialState = {
  users: [
    {
      id: "1",
      name: "Redwan",
    },
    {
      id: "2",
      name: "Hasan",
    },
  ],
};
type DraftUser = Pick<User, "name">;
const createUser = (userData: DraftUser): User => {
  return { id: nanoid(), ...userData };
};
const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<DraftUser>) => {
      const userData = createUser(action.payload);
      state.users.push(userData);
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});
export const selectUser = (state:RootState)=>{
    return state.user.users
}
export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
