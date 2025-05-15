import { Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <Flex
      justify="center"
      align="center"
      bgImage="url('/bg.jpg')"
      bgSize="cover"
      bgRepeat="no-repeat"
      minH="100vh"
    >
      {children}
    </Flex>
  );
};

export default AuthLayout;
