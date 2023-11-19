import { User } from "components/UserLists/types";

interface getUserListProps {
  currentPage: number;
  gender: string;
}

interface UserListResponse {
  results: User[];
  info: {
    seed: string;
    results: number;
    page: number;
  };
}

export const getUserList = async ({
  currentPage,
  gender,
}: getUserListProps): Promise<UserListResponse> => {
  const response = await fetch(
    `https://randomuser.me/api/?page=${currentPage}&results=4&gender=${gender}`
  );
  const data = await response.json();
  return data;
};
