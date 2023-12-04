import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import Input from "./Input"

const schema = yup.object({
  fullName: yup.string().required("Please input your full name"),
  email: yup.string().required("Please input an email").email("Please input a valid email"),
  message: yup.string().required("Please input a message."),
})



export default function ContactForm() {

  const {
    register,
    handleSubmit,
    formState: { errors }, 
  } = useForm ({
    resolver: yupResolver(schema),
  })


  return (
    <div>
      <div></div>
      <div>
        <h1>Send us a message</h1>

        <div>
          <Input 
           id="fullName"
           label="Full Name"
           type="text"
           register={{..."fullName"}}
           errorMessage={errors.fullName?.message}
          />
        </div>
      </div>
    </div>
  );
}
