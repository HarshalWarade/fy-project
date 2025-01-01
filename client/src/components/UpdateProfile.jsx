import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const UpdateProfile = ({ open, setOpen }) => {
  return (
    <>
      <Dialog open={open}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form action="" className="mt-4">
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-2 items-start content-center justify-center">
                <Label htmlFor="firstName" className="text-left">
                  First Name
                </Label>
                <Input id="firstName" className="focus-visible:ring-3" autoComplete="off" name="firstName" />
              </div>
              <div className="flex flex-col gap-2 items-start content-center justify-center">
                <Label htmlFor="lastName" className="text-left">
                  Last Name
                </Label>
                <Input id="lastName" className="focus-visible:ring-3" autoComplete="off" name="lastName" />
              </div>
            </div>


            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-2 items-start content-center justify-center">
                <Label htmlFor="email" className="text-left">
                  Email
                </Label>
                <Input id="email" className="focus-visible:ring-3" autoComplete="off" name="email" />
              </div>
              <div className="flex flex-col gap-2 items-start content-center justify-center">
                <Label htmlFor="firstName" className="text-left">
                  Last Name
                </Label>
                <Input id="firstName" className="focus-visible:ring-3" autoComplete="off" name="firstName" />
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UpdateProfile;
