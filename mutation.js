import { produce } from "immer";

const employee = {
  name: "Redwan Hasan",
  address: { country: "Bangladesh", city: "Dhaka" },
};
// const employee2 = {
//   ...employee,
//   name: "Siam Hasan",
//   address: { ...employee.address, city: "Chittagong" },
// };

const employee2 = produce(employee, (draft) => {
  draft.name = "Siam";
  draft.address.city = 'Chittagong'
});
console.log(employee);
console.log(employee2);

console.log(employee === employee2);
