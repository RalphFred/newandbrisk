import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Input from "./Input";

const schema = yup.object({
  fullName: yup.string().required("Please input your full name"),
  email: yup
    .string()
    .required("Please input an email")
    .email("Please input a valid email"),
  message: yup.string().required("Please input a message."),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="h-[calc(100vh-100px)] bg-cream flex px-32 pt-12">
      <div className="w-2/5">
        <h1 className="text-5xl font-labrada font-semibold mb-8">Contact Us</h1>
        <p className="text-xl font-handlee mb-6">
        If you have any questions or comments, please contact us via email, social media or send us a message using the contact form. 
        </p>
        <div className="font-handlee text-xl mb-4">
          <h2 className="font-semibold">Email</h2>
          <p>newandbrisk@info.com</p>
        </div>

        <div className="font-handlee text-xl">
          <h2 className="font-semibold">Phone N<span className="underline">o</span></h2>
          <p>+234-701-2345-678</p>
        </div>
      </div>
      <div className="w-3/5 pl-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            id="fullName"
            label="Full Name"
            type="text"
            register={{ ...register("fullName") }}
            errorMessage={errors.fullName?.message}
          />
          <Input
            id="email"
            label="Email"
            type="text"
            register={{ ...register("email") }}
            errorMessage={errors.fullName?.message}
          />
          <div className="flex flex-col font-handlee mb-8">
            <label className="font-bold text-xl mb-1">Message</label>
            <textarea
              id="message"
              className="p-2 rounded-lg bg-cream border-2 focus:border-green outline-none h-[200px]"
              {...register("message")}
            ></textarea>
            <span>{errors.message?.message}</span>
          </div>

          <input type="submit" value="SUBMIT" className="w-full bg-green py-4 text-white font-handlee font-bold text-xl rounded-lg"/>
        </form>
      </div>
    </div>
  );
}
