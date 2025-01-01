"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { signUp,signIn } from "@/lib/actions/user.action";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Divide, Loader2 } from "lucide-react";
import CustomInput from "./CustomInput";
import { log } from "console";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  address1: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  postalCode: z.string().optional(),
  dateOfBirth: z.string().optional(),
  ssn: z.string().optional(),
});

const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();
  const [user, setuser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address1: "",
      city: "",
      state: "",
      postalCode: "",
      dateOfBirth: "",
      ssn: "",
    },
  });
  const onSubmit=async (data: z.infer<typeof formSchema>) =>{
    setIsLoading(true);
    try {
      if (type === "sign-up") {
        const userData= await signUp(data);
        setuser(newUser);
      }
      if (type === "sign-in") {
        await signIn({
          email: data.email,
          password: data.password
        });
        router.push('/');
          router.push('/');
        }

      }
    catch (error) {
      console.log(error);
    }finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer flex items-center gap-1">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Horizon
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 fonr-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
            <p className="text-16 font-normal text-gray-600">
              {user
                ? "Link your account to Horizon"
                : "Please enter your credentials"}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/* {PlaidLink} */}</div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {type === 'sign-up' && (
                <>
                  <div className="flex gap-4">
                    <CustomInput form={form} name='firstName' label="First Name" placeholder='Enter your first name' />
                    <CustomInput form={form} name='lastName' label="Last Name" placeholder='Enter your first name' />
                  </div>
                  <CustomInput form={form} name='address1' label="Address" placeholder='Enter your specific address' />
                  <CustomInput form={form} name='city' label="City" placeholder='Enter your city' />
                  <div className="flex gap-4">
                    <CustomInput form={form} name='state' label="State" placeholder='Example: Delhi' />
                    <CustomInput form={form} name='postalCode' label="Postal Code" placeholder='Example: 11101' />
                  </div>
                  <div className="flex gap-4">
                    <CustomInput form={form} name='dateOfBirth' label="Date of Birth" placeholder='YYYY-MM-DD' />
                    {/* <CustomInput form={form} name='ssn' label="SSN" placeholder='Example: 1234' /> */}
                  </div>
                </>
              )}
              <CustomInput
                form={form}
                name="email"
                label="Email"
                placeholder="Enter your email address"
              />
              <CustomInput
                form={form}
                name="password"
                label="Password"
                placeholder="Enter your password"
              />
              <div className="flex flex-col gap-4">
                <Button type="submit" disabled={isLoading} className="form-btn">
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Loading...
                    </>
                  ) : type === "sign-in" ? (
                    "Sign In"
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>
            </form>
          </Form>
          <footer className="flex flex-col gap-1 justify-center">
            <p className="text-14 font-normal text-gray-600">
              {type === "sign-in"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>

            <Link
              href={type === "sign-in" ? "/sign-up" : "/sign-in"}
              className="form-link"
            >
              {type === "sign-in" ? "Sign-up" : "Sign-in"}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;
function newUser(prevState: null): null {
  throw new Error("Function not implemented.");
}

