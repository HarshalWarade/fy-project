import React, { useState } from "react";
import Navbar from "../ui/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/constant";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

const Login = () => {
  const { loading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const eventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // file handling for future
  const fileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const formHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_ENDPOINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={formHandler}
          className="border flex flex-col gap-3 w-1/3 border-gray-200 bg-slate-50 rounded-md p-4 my-5"
        >
          <h1 className="font-bold text-2xl mb-5 mt-3 text-center">LogIn</h1>

          <div className="flex flex-col w-full gap-2">
            <div className="col-span-6 flex flex-col gap-2">
              <Label>
                Email <span className="text-red-600">*</span>
              </Label>
              <Input
                type="email"
                value={input.email}
                onChange={eventHandler}
                className="focus-visible:ring-3 bg-white"
                name="email"
                placeholder="Please provide a working email address"
                autoComplete="off"
              />
            </div>
            <div className="col-span-6">
              <Label>
                Password <span className="text-red-600">*</span>
              </Label>
              <Input
                type="password"
                name="password"
                value={input.password}
                onChange={eventHandler}
                className="focus-visible:ring-3 bg-white"
                placeholder="Create a strong password"
                autoComplete="off"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label>
                Role <span className="text-red-600">*</span>
              </Label>
              <Select
                onValueChange={(value) => setInput({ ...input, role: value })}
                value={input.role}
                className="focus-visible:ring-0 bg-white"
              >
                <SelectTrigger className="w-[180px] focus-visible:ring-0 bg-white">
                  <SelectValue placeholder="Choose" />
                </SelectTrigger>
                <SelectContent className="focus-visible:ring-0 bg-white">
                  <SelectItem
                    value="employee"
                    className="focus-visible:ring-0 bg-white"
                  >
                    Employee
                  </SelectItem>
                  <SelectItem
                    value="employer"
                    className="focus-visible:ring-0 bg-white"
                  >
                    Employer
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center flex-col gap-2 justify-center content-center my-5">
            {loading ? (
              <Button className="w-full cursor-not-allowed">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please Wait
              </Button>
            ) : (
              <Button className="w-full" type="Submit">
                Submit
              </Button>
            )}
            <span>
              Don't have an account?
              <Link className="text-blue-500 hover:underline" to="/signup">
                Sign up
              </Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
