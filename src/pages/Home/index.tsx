import { useState } from "react";
import {
  Box,
  CircularProgress,
  Container,
  MenuItem,
  Select,
  Typography,
  SelectChangeEvent,
} from "@mui/material";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getUserList } from "services/api";
import { Flex } from "components/layout";
import UserLists from "components/UserLists";
import PaginationButton from "components/PaginationButton";
import ErrorSnackbar from "components/ErrorSnackbar";

const Home = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limit, setLimit] = useState("4");
  const [gender, setGender] = useState<string>("male");
  const { data, error, isFetching, isPlaceholderData } = useQuery({
    queryKey: ["projects", currentPage, gender, limit],
    queryFn: () => getUserList({ currentPage, gender, limit }),
    placeholderData: keepPreviousData,
  });
  const handleChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleGenderChange = (e: SelectChangeEvent) => {
    setGender(e.target.value as string);
  };

  const handleLimitChange = (e: SelectChangeEvent) => {
    setLimit(e.target.value as string);
  };

  return (
    <Container>
      <Box py={4}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={2}>
          Random User List
        </Typography>
        <Flex justifyContent="space-between">
          <Box>
            <Typography variant="subtitle1" color="primary">
              Select Gender
            </Typography>
            <Select value={gender} label="Gender" onChange={handleGenderChange}>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="both">Both</MenuItem>
            </Select>
          </Box>
          <Box>
            <Typography variant="subtitle1" color="primary">
              Select Limit
            </Typography>
            <Select value={limit} label="Limit" onChange={handleLimitChange}>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="8">8</MenuItem>
              <MenuItem value="12">12</MenuItem>
            </Select>
          </Box>
        </Flex>

        <UserLists data={data?.results} />

        <Flex justifyContent="space-between" my={4}>
          <PaginationButton
            currentPage={currentPage}
            onChange={handleChange}
            isPlaceholderData={isPlaceholderData}
          />
          {isFetching && <CircularProgress />}
        </Flex>
        {error && <ErrorSnackbar message={error.message} />}
      </Box>
    </Container>
  );
};

export default Home;
