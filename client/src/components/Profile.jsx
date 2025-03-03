import React, { useState } from "react";
import Navbar from "./ui/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import AppliedJobsTable from "./AppliedJobsTable";
import UpdateProfile from "./UpdateProfile";
import { useSelector } from "react-redux";

const Profile = () => {
  
  let activeResume = false;
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const {user} = useSelector(store => store.auth)

  // const skills = [
  //   "JavaScript",
  //   "C++",
  //   "Python",
  //   "Blender",
  //   "Data Structures",
  //   "SQL",
  //   "Git",
  // ];

  const handleResumeInvalid = () => {
    if (!user?.profile?.resume) {
      toast.error("No resume attached");
      return;
    }
  
    const resumeLink = user.profile.resume.trim();
  
    if (!resumeLink.startsWith("http://") && !resumeLink.startsWith("https://")) {
      toast.error("Invalid resume link");
      return;
    }
  
    window.location.href = resumeLink;
  };
  
  

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <div className="flex flex-col gap-4">
              <div className="flex items-center font-semibold text-lg gap-[4px]">
                <h1>{user?.firstName}</h1>
                <h1>{user?.lastName}</h1>
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  {user?.profile.bio}
                </p>
                <div className="flex items-center gap-4 mt-5">
                  <div className="flex items-center gap-1">
                    <Mail />
                    <span>{user?.email}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Contact />
                    <span>{user?.phoneNumber}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button onClick={() => setOpen(true)}>
            <Pen className="text-right" variant="outline" />
          </Button>
        </div>

        <div className="flex mt-5 gap-2">
          {user?.profile.skills.length != 0 ? (
            user?.profile.skills.map((item, index) => (
              <div
                key={index}
                className="flex items-center content-center justify-center bg-slate-200 text-gray-700 px-3 py-1 rounded-full"
              >
                {item}
              </div>
            ))
          ) : (
            <span>Not added any skills!</span>
          )}
        </div>

        <div className="grid w-full max-w-sm mt-5 items-center gap-1.5">
          <label className="text-md font-bold">
            {activeResume ? (
              <Link target="blank" to="link to resume file">
                Resume
              </Link>
            ) : (
              <button className="w-min" onClick={() => handleResumeInvalid()}>
                Resume
              </button>
            )}
          </label>
        </div>
      </div>
      <div className="max-w-7xl mt-10 mx-auto bg-white rounded-2xl">
        <h1 className="text-xl font-semibold">All applied Jobs</h1>
        <AppliedJobsTable />
      </div>


      <div>
        <UpdateProfile open={open} setOpen={setOpen} />
      </div>
    </>
  );
};

export default Profile;
