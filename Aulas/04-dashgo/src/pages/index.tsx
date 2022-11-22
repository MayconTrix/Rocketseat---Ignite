import { Button, Flex, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../components/Form";

type SignInFormData = {
  email: string;
  password: string;
};

export default function SignIn() {
  const { register, handleSubmit } = useForm();

  const handleSignIn: SubmitHandler<SignInFormData> = (values) => {
    console.log(values);
  };

  return (
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth="360px"
        background="gray.800"
        padding="8"
        borderRadius="8"
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack>
          <Input
            name="email"
            type="email"
            label="E-mail"
            {...register("email")}
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            {...register("password")}
          />
        </Stack>

        <Button type="submit" marginTop="6" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
