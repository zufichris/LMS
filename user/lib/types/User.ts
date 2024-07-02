import RoleEnums from "../enums/roles";

type User = {
  id?: string;
  firstName?: string;
  lastName?: string;
  userName: string;
  email: string;
  role: RoleEnums.Admin | RoleEnums.Tutor | RoleEnums.Student;
};
export default User;
