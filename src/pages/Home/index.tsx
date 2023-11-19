import { useState } from 'react';
import {
  Box,
  CircularProgress,
  Container,
  MenuItem,
  Select,
  Typography,
  SelectChangeEvent,
} from '@mui/material';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { getUserList } from 'services/api';
import { Flex } from 'components/layout';
import UserLists from 'components/UserLists';
import PaginationButton from 'components/PaginationButton';
import ErrorSnackbar from 'components/ErrorSnackbar';

const Home = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [gender, setGender] = useState<string>("male");
  const { data, error, isFetching, isPlaceholderData } = useQuery({
    queryKey: ["projects", currentPage, gender],
    queryFn: () => getUserList({currentPage, gender}),
    placeholderData: keepPreviousData,
    staleTime: 5000,
  });
  const handleChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleGenderChange = (e: SelectChangeEvent) => {
    setGender(e.target.value as string);
  };

  return (
    <Container>
      <Box py={4}>
        <Typography variant="h3" fontWeight="bold" textAlign="center">
          Random User List
        </Typography>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gender}
          label="Age"
          onChange={handleGenderChange}
          
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="both">Both</MenuItem>
        </Select>
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
