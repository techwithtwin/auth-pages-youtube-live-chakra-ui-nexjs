import {
  Button,
  Field,
  Flex,
  Heading,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const ResetPage = () => {
  return (
    <Stack
      w={{ base: "100vw", md: "lg" }}
      h={{ base: "100vh", md: "fit-content" }}
      bg="white"
      boxShadow="md"
      borderRadius="xl"
      p="8"
    >
      <Flex justify="center">
        <Image
          transform="scale(0.7)"
          src="/logo.png"
          height="150px"
          alt="logo"
        />
      </Flex>
      <Heading textAlign="center">
        Enter your Email to reset your password.
      </Heading>
      <Flex align="center" justify="center" gap={2}>
        <Text>Remembered password?</Text>
        <Link href="/auth/login">
          <Button
            variant="plain"
            color="#9E8625"
            size="lg"
            textDecor="underline"
          >
            Login
          </Button>
        </Link>
      </Flex>
      <Stack gap={4}>
        <Field.Root required>
          <Field.Label>Email</Field.Label>
          <Input placeholder="Enter your email" />
        </Field.Root>

        <Button bg="#9E8625" color="white">
          Reset
        </Button>
      </Stack>
    </Stack>
  );
};

export default ResetPage;
