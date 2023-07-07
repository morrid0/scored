import LoginForm from "../components/login/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export const Page = () => {
  return <LoginForm />;
};

export default Page;
