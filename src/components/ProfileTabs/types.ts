import { User } from "components/UserLists/types";

export enum UserTabs {
  BasicInfo = "Basic Info",
  Email = "Email",
  Dob = "Date of Birth",
  Location = "Location",
  Phone = "Phone",
  Lock = "Lock",
}

export interface BasicInfoTabProps {
  heading: string;
  info: string;
}

export interface ShowFormProps {
  activeTab: UserTabs;
  userInfo: User;
}
