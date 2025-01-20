import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/constant";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog";

const UpdateProfile = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((store) => store.auth);

  const [input, setInput] = useState({
    firstName: user?.firstName,
    middleName: user?.middleName,
    lastName: user?.lastName,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    bio: user?.profile?.bio,
    skills: user?.profile?.skills.map((skill) => skill),
    resume: user?.profile?.resume,
  });

  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("firstName", input.firstName);
    formData.append("middleName", input.middleName);
    formData.append("lastName", input.lastName);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("resume", input.resume);
    formData.append("skills", input.skills);

    try {
      const res = await axios.post(
        `${USER_API_ENDPOINT}/profile/update`,
        formData,
        {
          Headers: {
            "Content-Type": "application/json", //potential error is possible
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
      }
    } catch (err) {
      console.log(err);
    }
    setOpen(false);
    // console.log(input)
  };

  // const fileHandler = (e) => {
  //   const file = e.target.files?.[0]
  //   setInput({...input, file})
  // }

  return (
    <>
      <Dialog open={open}>
        <DialogContent
          className="w-[80%]"
          onInteractOutside={() => setOpen(false)}
        >
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form onSubmit={submitHandler} action="" className="mt-4">
            <div className="grid grid-cols-12 gap-2">
              <div className="flex flex-col col-span-4 gap-2 items-start content-center justify-center">
                <Label htmlFor="firstName" className="text-left">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  className="focus-visible:ring-3"
                  autoComplete="off"
                  name="firstName"
                  value={input.firstName}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="flex flex-col col-span-4 gap-2 items-start content-center justify-center">
                <Label htmlFor="middleName" className="text-left">
                  Middle Name
                </Label>
                <Input
                  id="middleName"
                  className="focus-visible:ring-3"
                  autoComplete="off"
                  name="middleName"
                  value={input.middleName}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="flex flex-col col-span-4 gap-2 items-start content-center justify-center">
                <Label htmlFor="lastName" className="text-left">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  className="focus-visible:ring-3"
                  autoComplete="off"
                  name="lastName"
                  value={input.lastName}
                  onChange={changeEventHandler}
                />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-12 gap-2">
              <div className="flex flex-col gap-2 col-span-6 items-start content-center justify-center">
                <Label htmlFor="email" className="text-left">
                  Email*
                </Label>
                <Input
                  id="email"
                  className="focus-visible:ring-3"
                  autoComplete="off"
                  name="email"
                  value={input.email}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="flex flex-col col-span-6 gap-2 items-start content-center justify-center">
                <Label htmlFor="phoneNumber" className="text-left">
                  Contact Number*
                </Label>
                <Input
                  id="phoneNumber"
                  className="focus-visible:ring-3"
                  autoComplete="off"
                  name="phoneNumber"
                  value={input.phoneNumber}
                  onChange={changeEventHandler}
                />
              </div>
            </div>

            <div className="mt-5 font-semibold">
              <p>Other Updates</p>
            </div>
            <div className="mt-4 grid grid-cols-12 gap-2">
              <div className="flex flex-col gap-2 col-span-6 items-start content-center justify-center">
                <Label htmlFor="bio" className="text-left">
                  Bio
                </Label>
                {/* <Input id="bio" className="focus-visible:ring-3" autoComplete="off" name="bio" /> */}
                <textarea
                  name="bio"
                  id="bio"
                  className="border w-full rounded-md outline-none p-2 text-sm"
                  value={input.bio}
                  onChange={changeEventHandler}
                ></textarea>
              </div>
              <div className="flex flex-col gap-2 col-span-6 items-start content-center justify-center">
                <Label htmlFor="skills" className="text-left">
                  Skills
                  <AlertDialog>
                    <AlertDialogTrigger className="bg-red-400 ml-1 rounded-full h-5 w-5">?</AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          How do I add skills?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          Just keep on typing your skills, but a comma separetion is needed between two distinct skills. For example, if someone wants to add Nodejs developer and problem-solver then the individual should type it as, "Nodejs, Problem-Solver".
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </Label>
                <input
                  type="text"
                  name="skills"
                  id="skills"
                  className="border w-full rounded-md outline-none p-2 text-sm"
                  value={input.skills}
                  onChange={changeEventHandler}
                ></input>
              </div>
              <div className="flex flex-col col-span-6 gap-2 items-start content-center justify-center">
                <Label htmlFor="resume" className="text-left">
                  Link to your resume
                </Label>
                <Input
                  // accept="application/pdf"
                  id="resume"
                  className="focus-visible:ring-3"
                  autoComplete="off"
                  name="resume"
                  value={input.resume}
                  onChange={changeEventHandler}
                />
              </div>
            </div>

            <div>
              <p className="text-sm text-red-500">
                Fields having * needs to be verified again if altered!
              </p>
            </div>

            <div className="flex items-center flex-col gap-2 justify-center content-center my-5 w-max">
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
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UpdateProfile;
