import { Box, Button, Flex, Heading, Image, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { MdLogin } from "react-icons/md";

export default function Home() {
  return (
    <Stack h="100vh" bgImage="url(/bg.jpg)" gap={4}>
      <Box bg="rgba(245,226,197, 0.8)" w="100%" h="fit-content">
        <Flex justify="space-between" mx={6} py={2}>
          <Image src="/logo.png" boxSize={10} alt="logo" />
          <Link href="/auth/login">
            <Button variant="plain" size="lg" fontWeight="bold">
              <MdLogin /> Login
            </Button>
          </Link>
        </Flex>
      </Box>
      <Heading fontSize="3xl" ml={4} color="rgb(245,226,197)">
        Welcome home, TechWithTWin
      </Heading>
    </Stack>
  );
}
