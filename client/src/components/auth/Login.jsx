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
import { Link } from "react-router-dom";

const Login = () => {


  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          action=""
          className="border flex flex-col gap-3 w-1/3 border-gray-200 bg-slate-50 rounded-md p-4 my-5"
        >
          <h1 className="font-bold text-2xl mb-5 mt-3 text-center">Sign Up</h1>

          <div className="flex flex-col w-full gap-2">
            <div className="col-span-6 flex flex-col gap-2">
              <Label>
                Email <span className="text-red-600">*</span>
              </Label>
              <Input
                type="email"
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
                className="focus-visible:ring-3 bg-white"
                placeholder="Create a strong password"
                autoComplete="off"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label>
                Role <span className="text-red-600">*</span>
              </Label>
              <Select className="focus-visible:ring-0 bg-white">
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
            <Button className="w-1/2" type="Submit">
              Submit
            </Button>
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
