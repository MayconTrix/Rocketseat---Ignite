import React from "react";
import { Input } from "../../../../components/Input";
import { AddressFormContainer } from "./styles";
import { useForm, useFormContext } from "react-hook-form";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export function AddressForm() {
  const { register, formState, setValue, setFocus } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;

  // const cepCorreios = async (cep: string) => {
  //   try {
  //     const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  //     const data = await response.json();
  //     return data;
  //     console.log(data);
  //     console.log(cepCorreios);
  //   } catch (error: any) {
  //     const messageError = error?.response?.data?.errors?.[0]?.message;
  //     console.log(messageError);
  //     return false;
  //   }
  // };

  const checkCEP = (e: any) => {
    const cep = e.target.value.replace(/\D/g, "");
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setValue("street", data.logradouro);
        setValue("district", data.bairro);
        setValue("city", data.localidade);
        setValue("uf", data.uf);
        setFocus("number");
      });
  };

  return (
    <AddressFormContainer>
      <Input
        placeholder="CEP"
        type="text"
        className="cep"
        {...register("cep")}
        error={errors.cep?.message}
        onBlur={checkCEP}
      />
      <Input
        placeholder="Rua"
        type="text"
        className="street"
        {...register("street")}
        error={errors.street?.message}
      />
      <Input
        placeholder="Número"
        type="number"
        {...register("number")}
        error={errors.number?.message}
      />
      <Input
        placeholder="Complemento"
        className="complement"
        {...register("complement")}
        error={errors.complement?.message}
        rightText="< Opcional"
      />
      <Input
        placeholder="Bairro"
        {...register("district")}
        error={errors.district?.message}
      />
      <Input
        placeholder="Cidade"
        {...register("city")}
        error={errors.city?.message}
      />
      <Input placeholder="UF" {...register("uf")} error={errors.uf?.message} />
    </AddressFormContainer>
  );
}
