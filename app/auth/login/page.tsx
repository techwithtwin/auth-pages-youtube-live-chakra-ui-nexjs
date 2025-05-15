"use client";
import ShowPasswordIcon from "@/components/show-password";
import {
  Button,
  Checkbox,
  Field,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

const LoginPage = () => {
  const [open, setOpen] = useState(false);
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
        <Link href="/">
          <Image
            transform="scale(0.7)"
            src="/logo.png"
            height="150px"
            alt="logo"
          />
        </Link>
      </Flex>
      <Heading textAlign="center">Log in to your account</Heading>
      <Flex align="center" justify="center" gap={2}>
        <Text>Don&apos;t have an account?</Text>
        <Link href="/auth/register">
          <Button
            variant="plain"
            color="#9E8625"
            size="lg"
            textDecor="underline"
          >
            Sign up
          </Button>
        </Link>
      </Flex>
      <Stack gap={4}>
        <Field.Root required>
          <Field.Label>Username</Field.Label>
          <Input placeholder="Enter your username" />
        </Field.Root>

        <Field.Root required>
          <Field.Label>Password</Field.Label>
          <InputGroup
            endElement={<ShowPasswordIcon open={open} onToggle={setOpen} />}
          >
            <Input placeholder="********" type={open ? "text" : "password"} />
          </InputGroup>
        </Field.Root>
        <HStack justify="space-between" align="center">
          <Checkbox.Root>
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label>Remember me</Checkbox.Label>
          </Checkbox.Root>
          <Link href="/auth/reset">
            <Button color="#9E8625" variant="plain" textDecor="underline">
              Forgot password
            </Button>
          </Link>
        </HStack>
        <Button bg="#9E8625" color="white">
          Sign in
        </Button>
      </Stack>
    </Stack>
  );
};

export default LoginPage;
