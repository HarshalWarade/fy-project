import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { toast, Toaster } from "sonner";
import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "@/redux/store";

const Navbar = () => {
  const {user} = useSelector(store => store.auth)
  return (
    <>
      <div className="bg-white">
        <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
          <div>
            <h1 className="text-2xl font-bold">
              Cold<span className="text-lime-600">Cup</span>
            </h1>
          </div>
          <div className="flex items-center gap-12">
            <ul className="flex font-medium items-center gap-5">
              <Link to="/">Home</Link>
              <Link to="/jobs">Jobs</Link>
              <Link to="/browse">Browser</Link>
            </ul>
          </div>
          {user ? (
            <div>
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="flex gap-4 space-y-2">
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">User Name</h4>
                      <p className="text-sm text-muted-foreground">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col my-2">
                    <div className="flex w-fit items-center gap-3 text-gray-600">
                      <User2 />
                      <Button
                        variant="link"
                        className="outline-none border-none"
                      >
                        View Profile
                      </Button>
                    </div>
                    <div className="flex w-fit items-center gap-3 text-gray-600">
                      <LogOut />
                      <Button
                        variant="link"
                        className="outline-none border-none"
                      >
                        LogOut
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          ) : (
            <div className="flex gap-3">
              <Link to="/login">
                <Button variant="outline" className="border-slate-300">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  variant="outline"
                  className="border-none bg-[#f83002] text-white hover:bg-[#e52b01] hover:text-white"
                >
                  Register
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
