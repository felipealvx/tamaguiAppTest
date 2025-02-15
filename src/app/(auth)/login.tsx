import { View, Text, styled, Label, Input } from "tamagui";
import { Controller, useForm } from "react-hook-form";
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from "src/components/Button";

const FormComponent = styled(View, {
  tag: 'form',
  flexDirection: 'row',
  maxW: '100%',
})

const loginFormSchema = z.object({
  email: z.string().email({
  message: "Email Incorreto"
  }),
  password: z.string().min(6, {
    message: "Senha Minima de 6 caracteres"
  }), 
})

const InputComponent = ({
  name,
  label,
  id,
  control,
}) => {
  return (
    <Controller 
    name=""
    control={control}
    render={({field}) => (
      <View>
        <Label>
          {label}
        </Label>
        <Input 
          onChange={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          id={id}
          secureTextEntry={id === 'password'}
        />
      </View>
      )}
    >
    </Controller>
  )
}

type loginFormData = z.infer<typeof loginFormSchema>;

export default function Login(){
  const {control, handleSubmit} = useForm<loginFormData>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const handleLogin = (data) => {
    alert('User Login' + data.email)
  }
  return (
    <FormComponent>
      <InputComponent name="email" control={control} id="user" label="Email"/>
      <InputComponent name="email" control={control} id="password" label="Senha" />

      <Button onPress={handleSubmit(handleLogin)}>Login</Button>
    </FormComponent>
  )
}