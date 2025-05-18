import NavBar from "@/components/NavBar";
import { Text, Heading, Box } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "Invalid Response"
            : "An unexpected error occur"}
          .
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
