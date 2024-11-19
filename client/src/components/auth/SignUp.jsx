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
import { USER_API_ENDPOINT } from "@/utils/constant";
import { toast } from "sonner";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

const countries = [
  { name: "Afghanistan", code: "+93", flag: "https://flagcdn.com/w320/af.png" },
  { name: "Albania", code: "+355", flag: "https://flagcdn.com/w320/al.png" },
  { name: "Algeria", code: "+213", flag: "https://flagcdn.com/w320/dz.png" },
  { name: "Andorra", code: "+376", flag: "https://flagcdn.com/w320/ad.png" },
  { name: "Angola", code: "+244", flag: "https://flagcdn.com/w320/ao.png" },
  { name: "Argentina", code: "+54", flag: "https://flagcdn.com/w320/ar.png" },
  { name: "Armenia", code: "+374", flag: "https://flagcdn.com/w320/am.png" },
  { name: "Australia", code: "+61", flag: "https://flagcdn.com/w320/au.png" },
  { name: "Austria", code: "+43", flag: "https://flagcdn.com/w320/at.png" },
  { name: "Azerbaijan", code: "+994", flag: "https://flagcdn.com/w320/az.png" },
  { name: "Bahamas", code: "+1-242", flag: "https://flagcdn.com/w320/bs.png" },
  { name: "Bahrain", code: "+973", flag: "https://flagcdn.com/w320/bh.png" },
  { name: "Bangladesh", code: "+880", flag: "https://flagcdn.com/w320/bd.png" },
  { name: "Barbados", code: "+1-246", flag: "https://flagcdn.com/w320/bb.png" },
  { name: "Belarus", code: "+375", flag: "https://flagcdn.com/w320/by.png" },
  { name: "Belgium", code: "+32", flag: "https://flagcdn.com/w320/be.png" },
  { name: "Belize", code: "+501", flag: "https://flagcdn.com/w320/bz.png" },
  { name: "Benin", code: "+229", flag: "https://flagcdn.com/w320/bj.png" },
  { name: "Bhutan", code: "+975", flag: "https://flagcdn.com/w320/bt.png" },
  { name: "Bolivia", code: "+591", flag: "https://flagcdn.com/w320/bo.png" },
  {
    name: "Bosnia and Herzegovina",
    code: "+387",
    flag: "https://flagcdn.com/w320/ba.png",
  },
  { name: "Botswana", code: "+267", flag: "https://flagcdn.com/w320/bw.png" },
  { name: "Brazil", code: "+55", flag: "https://flagcdn.com/w320/br.png" },
  {
    name: "Brunei Darussalam",
    code: "+673",
    flag: "https://flagcdn.com/w320/bn.png",
  },
  { name: "Bulgaria", code: "+359", flag: "https://flagcdn.com/w320/bg.png" },
  {
    name: "Burkina Faso",
    code: "+226",
    flag: "https://flagcdn.com/w320/bf.png",
  },
  { name: "Burundi", code: "+257", flag: "https://flagcdn.com/w320/bi.png" },
  { name: "Cabo Verde", code: "+238", flag: "https://flagcdn.com/w320/cv.png" },
  { name: "Cambodia", code: "+855", flag: "https://flagcdn.com/w320/kh.png" },
  { name: "Cameroon", code: "+237", flag: "https://flagcdn.com/w320/cm.png" },
  { name: "Canada", code: "+1", flag: "https://flagcdn.com/w320/ca.png" },
  {
    name: "Central African Republic",
    code: "+236",
    flag: "https://flagcdn.com/w320/cf.png",
  },
  { name: "Chad", code: "+235", flag: "https://flagcdn.com/w320/td.png" },
  { name: "Chile", code: "+56", flag: "https://flagcdn.com/w320/cl.png" },
  { name: "China", code: "+86", flag: "https://flagcdn.com/w320/cn.png" },
  { name: "Colombia", code: "+57", flag: "https://flagcdn.com/w320/co.png" },
  { name: "Comoros", code: "+269", flag: "https://flagcdn.com/w320/km.png" },
  { name: "Congo", code: "+242", flag: "https://flagcdn.com/w320/cg.png" },
  {
    name: "Congo, Democratic Republic of the",
    code: "+243",
    flag: "https://flagcdn.com/w320/drc.png",
  },
  { name: "Costa Rica", code: "+506", flag: "https://flagcdn.com/w320/cr.png" },
  { name: "Croatia", code: "+385", flag: "https://flagcdn.com/w320/hr.png" },
  { name: "Cuba", code: "+53", flag: "https://flagcdn.com/w320/cu.png" },
  { name: "Cyprus", code: "+357", flag: "https://flagcdn.com/w320/cy.png" },
  {
    name: "Czech Republic",
    code: "+420",
    flag: "https://flagcdn.com/w320/cz.png",
  },
  { name: "Denmark", code: "+45", flag: "https://flagcdn.com/w320/dk.png" },
  { name: "Djibouti", code: "+253", flag: "https://flagcdn.com/w320/dj.png" },
  { name: "Dominica", code: "+1-767", flag: "https://flagcdn.com/w320/dm.png" },
  {
    name: "Dominican Republic",
    code: "+1-809",
    flag: "https://flagcdn.com/w320/do.png",
  },
  { name: "Ecuador", code: "+593", flag: "https://flagcdn.com/w320/ec.png" },
  { name: "Egypt", code: "+20", flag: "https://flagcdn.com/w320/eg.png" },
  {
    name: "El Salvador",
    code: "+503",
    flag: "https://flagcdn.com/w320/sv.png",
  },
  {
    name: "Equatorial Guinea",
    code: "+240",
    flag: "https://flagcdn.com/w320/gq.png",
  },
  { name: "Eritrea", code: "+291", flag: "https://flagcdn.com/w320/er.png" },
  { name: "Estonia", code: "+372", flag: "https://flagcdn.com/w320/ee.png" },
  { name: "Eswatini", code: "+268", flag: "https://flagcdn.com/w320/sz.png" },
  { name: "Ethiopia", code: "+251", flag: "https://flagcdn.com/w320/et.png" },
  { name: "Fiji", code: "+679", flag: "https://flagcdn.com/w320/fj.png" },
  { name: "Finland", code: "+358", flag: "https://flagcdn.com/w320/fi.png" },
  { name: "France", code: "+33", flag: "https://flagcdn.com/w320/fr.png" },
  { name: "Gabon", code: "+241", flag: "https://flagcdn.com/w320/ga.png" },
  { name: "Gambia", code: "+220", flag: "https://flagcdn.com/w320/gm.png" },
  { name: "Georgia", code: "+995", flag: "https://flagcdn.com/w320/ge.png" },
  { name: "Germany", code: "+49", flag: "https://flagcdn.com/w320/de.png" },
  { name: "Ghana", code: "+233", flag: "https://flagcdn.com/w320/gh.png" },
  { name: "Greece", code: "+30", flag: "https://flagcdn.com/w320/gr.png" },
  { name: "Grenada", code: "+1-473", flag: "https://flagcdn.com/w320/gd.png" },
  { name: "Guatemala", code: "+502", flag: "https://flagcdn.com/w320/gt.png" },
  { name: "Guinea", code: "+224", flag: "https://flagcdn.com/w320/gn.png" },
  {
    name: "Guinea-Bissau",
    code: "+245",
    flag: "https://flagcdn.com/w320/gw.png",
  },
  { name: "Guyana", code: "+592", flag: "https://flagcdn.com/w320/gy.png" },
  { name: "Haiti", code: "+509", flag: "https://flagcdn.com/w320/ht.png" },
  { name: "Honduras", code: "+504", flag: "https://flagcdn.com/w320/hn.png" },
  { name: "Hungary", code: "+36", flag: "https://flagcdn.com/w320/hu.png" },
  { name: "Iceland", code: "+354", flag: "https://flagcdn.com/w320/is.png" },
  { name: "India", code: "+91", flag: "https://flagcdn.com/w320/in.png" },
  { name: "Indonesia", code: "+62", flag: "https://flagcdn.com/w320/id.png" },
  { name: "Iran", code: "+98", flag: "https://flagcdn.com/w320/ir.png" },
  { name: "Iraq", code: "+964", flag: "https://flagcdn.com/w320/iq.png" },
  { name: "Ireland", code: "+353", flag: "https://flagcdn.com/w320/ie.png" },
  { name: "Israel", code: "+972", flag: "https://flagcdn.com/w320/il.png" },
  { name: "Italy", code: "+39", flag: "https://flagcdn.com/w320/it.png" },
  { name: "Jamaica", code: "+1-876", flag: "https://flagcdn.com/w320/jm.png" },
  { name: "Japan", code: "+81", flag: "https://flagcdn.com/w320/jp.png" },
  { name: "Jordan", code: "+962", flag: "https://flagcdn.com/w320/jo.png" },
  { name: "Kazakhstan", code: "+7", flag: "https://flagcdn.com/w320/kz.png" },
  { name: "Kenya", code: "+254", flag: "https://flagcdn.com/w320/ke.png" },
  { name: "Kiribati", code: "+686", flag: "https://flagcdn.com/w320/ki.png" },
  {
    name: "Korea, North",
    code: "+850",
    flag: "https://flagcdn.com/w320/kp.png",
  },
  {
    name: "Korea, South",
    code: "+82",
    flag: "https://flagcdn.com/w320/kr.png",
  },
  { name: "Kuwait", code: "+965", flag: "https://flagcdn.com/w320/kw.png" },
  { name: "Kyrgyzstan", code: "+996", flag: "https://flagcdn.com/w320/kg.png" },
  { name: "Laos", code: "+856", flag: "https://flagcdn.com/w320/la.png" },
  { name: "Latvia", code: "+371", flag: "https://flagcdn.com/w320/lv.png" },
  { name: "Lebanon", code: "+961", flag: "https://flagcdn.com/w320/lb.png" },
  { name: "Lesotho", code: "+266", flag: "https://flagcdn.com/w320/ls.png" },
  { name: "Liberia", code: "+231", flag: "https://flagcdn.com/w320/lr.png" },
  { name: "Libya", code: "+218", flag: "https://flagcdn.com/w320/ly.png" },
  {
    name: "Liechtenstein",
    code: "+423",
    flag: "https://flagcdn.com/w320/li.png",
  },
  { name: "Lithuania", code: "+370", flag: "https://flagcdn.com/w320/lt.png" },
  { name: "Luxembourg", code: "+352", flag: "https://flagcdn.com/w320/lu.png" },
  { name: "Madagascar", code: "+261", flag: "https://flagcdn.com/w320/mg.png" },
  { name: "Malawi", code: "+265", flag: "https://flagcdn.com/w320/mw.png" },
  { name: "Malaysia", code: "+60", flag: "https://flagcdn.com/w320/my.png" },
  { name: "Maldives", code: "+960", flag: "https://flagcdn.com/w320/mv.png" },
  { name: "Mali", code: "+223", flag: "https://flagcdn.com/w320/ml.png" },
  { name: "Malta", code: "+356", flag: "https://flagcdn.com/w320/mt.png" },
  {
    name: "Marshall Islands",
    code: "+692",
    flag: "https://flagcdn.com/w320/mh.png",
  },
  { name: "Mauritania", code: "+222", flag: "https://flagcdn.com/w320/mr.png" },
  { name: "Mauritius", code: "+230", flag: "https://flagcdn.com/w320/mu.png" },
  { name: "Mexico", code: "+52", flag: "https://flagcdn.com/w320/mx.png" },
  { name: "Micronesia", code: "+691", flag: "https://flagcdn.com/w320/fm.png" },
  { name: "Moldova", code: "+373", flag: "https://flagcdn.com/w320/md.png" },
  { name: "Monaco", code: "+377", flag: "https://flagcdn.com/w320/mc.png" },
  { name: "Mongolia", code: "+976", flag: "https://flagcdn.com/w320/mn.png" },
  { name: "Montenegro", code: "+382", flag: "https://flagcdn.com/w320/me.png" },
  { name: "Morocco", code: "+212", flag: "https://flagcdn.com/w320/ma.png" },
  { name: "Mozambique", code: "+258", flag: "https://flagcdn.com/w320/mz.png" },
  { name: "Myanmar", code: "+95", flag: "https://flagcdn.com/w320/mm.png" },
  { name: "Namibia", code: "+264", flag: "https://flagcdn.com/w320/na.png" },
  { name: "Nauru", code: "+674", flag: "https://flagcdn.com/w320/nr.png" },
  { name: "Nepal", code: "+977", flag: "https://flagcdn.com/w320/np.png" },
  { name: "Netherlands", code: "+31", flag: "https://flagcdn.com/w320/nl.png" },
  { name: "New Zealand", code: "+64", flag: "https://flagcdn.com/w320/nz.png" },
  { name: "Nicaragua", code: "+505", flag: "https://flagcdn.com/w320/ni.png" },
  { name: "Niger", code: "+227", flag: "https://flagcdn.com/w320/ne.png" },
  { name: "Nigeria", code: "+234", flag: "https://flagcdn.com/w320/ng.png" },
  {
    name: "North Macedonia",
    code: "+389",
    flag: "https://flagcdn.com/w320/mk.png",
  },
  { name: "Norway", code: "+47", flag: "https://flagcdn.com/w320/no.png" },
  { name: "Oman", code: "+968", flag: "https://flagcdn.com/w320/om.png" },
  { name: "Pakistan", code: "+92", flag: "https://flagcdn.com/w320/pk.png" },
  { name: "Palau", code: "+680", flag: "https://flagcdn.com/w320/pw.png" },
  { name: "Palestine", code: "+970", flag: "https://flagcdn.com/w320/ps.png" },
  { name: "Panama", code: "+507", flag: "https://flagcdn.com/w320/pa.png" },
  {
    name: "Papua New Guinea",
    code: "+675",
    flag: "https://flagcdn.com/w320/pg.png",
  },
  { name: "Paraguay", code: "+595", flag: "https://flagcdn.com/w320/py.png" },
  { name: "Peru", code: "+51", flag: "https://flagcdn.com/w320/pe.png" },
  { name: "Philippines", code: "+63", flag: "https://flagcdn.com/w320/ph.png" },
  { name: "Poland", code: "+48", flag: "https://flagcdn.com/w320/pl.png" },
  { name: "Portugal", code: "+351", flag: "https://flagcdn.com/w320/pt.png" },
  { name: "Qatar", code: "+974", flag: "https://flagcdn.com/w320/qa.png" },
  { name: "Romania", code: "+40", flag: "https://flagcdn.com/w320/ro.png" },
  { name: "Russia", code: "+7", flag: "https://flagcdn.com/w320/ru.png" },
  { name: "Rwanda", code: "+250", flag: "https://flagcdn.com/w320/rw.png" },
  {
    name: "Saint Kitts and Nevis",
    code: "+1-869",
    flag: "https://flagcdn.com/w320/kn.png",
  },
  {
    name: "Saint Lucia",
    code: "+1-758",
    flag: "https://flagcdn.com/w320/lc.png",
  },
  {
    name: "Saint Vincent and the Grenadines",
    code: "+1-784",
    flag: "https://flagcdn.com/w320/vc.png",
  },
  { name: "Samoa", code: "+685", flag: "https://flagcdn.com/w320/ws.png" },
  { name: "San Marino", code: "+378", flag: "https://flagcdn.com/w320/sm.png" },
  {
    name: "Sao Tome and Principe",
    code: "+239",
    flag: "https://flagcdn.com/w320/st.png",
  },
  {
    name: "Saudi Arabia",
    code: "+966",
    flag: "https://flagcdn.com/w320/sa.png",
  },
  { name: "Senegal", code: "+221", flag: "https://flagcdn.com/w320/sn.png" },
  { name: "Serbia", code: "+381", flag: "https://flagcdn.com/w320/rs.png" },
  { name: "Seychelles", code: "+248", flag: "https://flagcdn.com/w320/sc.png" },
  {
    name: "Sierra Leone",
    code: "+232",
    flag: "https://flagcdn.com/w320/sl.png",
  },
  { name: "Singapore", code: "+65", flag: "https://flagcdn.com/w320/sg.png" },
  { name: "Slovakia", code: "+421", flag: "https://flagcdn.com/w320/sk.png" },
  { name: "Slovenia", code: "+386", flag: "https://flagcdn.com/w320/si.png" },
  {
    name: "Solomon Islands",
    code: "+677",
    flag: "https://flagcdn.com/w320/sb.png",
  },
  { name: "Somalia", code: "+252", flag: "https://flagcdn.com/w320/so.png" },
  {
    name: "South Africa",
    code: "+27",
    flag: "https://flagcdn.com/w320/za.png",
  },
  {
    name: "South Sudan",
    code: "+211",
    flag: "https://flagcdn.com/w320/ss.png",
  },
  { name: "Spain", code: "+34", flag: "https://flagcdn.com/w320/es.png" },
  { name: "Sri Lanka", code: "+94", flag: "https://flagcdn.com/w320/lk.png" },
  { name: "Sudan", code: "+249", flag: "https://flagcdn.com/w320/sd.png" },
  { name: "Suriname", code: "+597", flag: "https://flagcdn.com/w320/sr.png" },
  { name: "Sweden", code: "+46", flag: "https://flagcdn.com/w320/se.png" },
  { name: "Switzerland", code: "+41", flag: "https://flagcdn.com/w320/ch.png" },
  { name: "Syria", code: "+963", flag: "https://flagcdn.com/w320/sy.png" },
  { name: "Taiwan", code: "+886", flag: "https://flagcdn.com/w320/tw.png" },
  { name: "Tajikistan", code: "+992", flag: "https://flagcdn.com/w320/tj.png" },
  { name: "Tanzania", code: "+255", flag: "https://flagcdn.com/w320/tz.png" },
  { name: "Thailand", code: "+66", flag: "https://flagcdn.com/w320/th.png" },
  {
    name: "Timor-Leste",
    code: "+670",
    flag: "https://flagcdn.com/w320/tl.png",
  },
  { name: "Togo", code: "+228", flag: "https://flagcdn.com/w320/tg.png" },
  { name: "Tonga", code: "+676", flag: "https://flagcdn.com/w320/to.png" },
  {
    name: "Trinidad and Tobago",
    code: "+1-868",
    flag: "https://flagcdn.com/w320/tt.png",
  },
  { name: "Tunisia", code: "+216", flag: "https://flagcdn.com/w320/tn.png" },
  { name: "Turkey", code: "+90", flag: "https://flagcdn.com/w320/tr.png" },
  {
    name: "Turkmenistan",
    code: "+993",
    flag: "https://flagcdn.com/w320/tm.png",
  },
  { name: "Tuvalu", code: "+688", flag: "https://flagcdn.com/w320/tv.png" },
  { name: "Uganda", code: "+256", flag: "https://flagcdn.com/w320/ug.png" },
  { name: "Ukraine", code: "+380", flag: "https://flagcdn.com/w320/ua.png" },
  {
    name: "United Arab Emirates",
    code: "+971",
    flag: "https://flagcdn.com/w320/ae.png",
  },
  {
    name: "United Kingdom",
    code: "+44",
    flag: "https://flagcdn.com/w320/gb.png",
  },
  {
    name: "United States",
    code: "+1",
    flag: "https://flagcdn.com/w320/us.png",
  },
  { name: "Uruguay", code: "+598", flag: "https://flagcdn.com/w320/uy.png" },
  { name: "Uzbekistan", code: "+998", flag: "https://flagcdn.com/w320/uz.png" },
  { name: "Vanuatu", code: "+678", flag: "https://flagcdn.com/w320/vu.png" },
  {
    name: "Vatican City",
    code: "+379",
    flag: "https://flagcdn.com/w320/vt.png",
  },
  { name: "Venezuela", code: "+58", flag: "https://flagcdn.com/w320/ve.png" },
  { name: "Vietnam", code: "+84", flag: "https://flagcdn.com/w320/vn.png" },
  { name: "Yemen", code: "+967", flag: "https://flagcdn.com/w320/ye.png" },
  { name: "Zambia", code: "+260", flag: "https://flagcdn.com/w320/zm.png" },
  { name: "Zimbabwe", code: "+263", flag: "https://flagcdn.com/w320/zw.png" },
];

const SignUp = () => {

  const { loading } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate()

  const [selectedCountry, setSelectedCountry] = useState("");
  const handleCountryChange = (value) => {
    const country = countries.find((country) => country.name === value);
    setSelectedCountry(country);
  };

  const [input, setInput] = useState({
    firstName: "",
    email: "",
    middleName: "",
    lastName: "",
    phoneNumber: "",
    password: "",
    role: "",
    gender: "",
    country: "",
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
    const formData = new FormData()
    formData.append("firstName", input.firstName)
    formData.append("middleName", input.middleName)
    formData.append("lastName", input.lastName)
    formData.append("email", input.email)
    formData.append("password", input.password)
    formData.append("country", input.country)
    formData.append("phoneNumber", input.phoneNumber)
    formData.append("gender", input.gender)
    formData.append("role", input.role)
    try {
      dispatch(setLoading(true))
      const res = await axios.post(`${USER_API_ENDPOINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        withCredentials: true
      })
      if(res.data.success) {
        navigate("/login")
        toast.success(res.data.message)
      }
    } catch (error) {
      toast.error(error.response.data.message)
    }
    finally {
      dispatch(setLoading(false))
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={formHandler}
          className="border flex flex-col gap-3 border-gray-200 bg-slate-50 rounded-md p-4 my-5"
        >
          <h1 className="font-bold text-2xl mb-5 mt-3 text-center">Sign Up</h1>
          <div className="grid grid-cols-12 gap-2">
            <div className="my-2 col-span-4 flex flex-col gap-2">
              <Label>
                First Name <span className="text-red-600">*</span>
              </Label>
              <Input
                type="text"
                name="firstName"
                value={input.firstName}
                onChange={eventHandler}
                className="focus-visible:ring-3 bg-white"
                placeholder="Enter your first name"
                autoComplete="off"
              />
            </div>
            <div className="my-2 col-span-4 flex flex-col gap-2">
              <Label>Middle Name</Label>
              <Input
                type="text"
                name="middleName"
                value={input.middleName}
                onChange={eventHandler}
                className="focus-visible:ring-3 bg-white"
                placeholder="Enter your middle name"
                autoComplete="off"
              />
            </div>
            <div className="my-2 col-span-4 flex flex-col gap-2">
              <Label>
                Last Name <span className="text-red-600">*</span>
              </Label>
              <Input
                type="text"
                name="lastName"
                value={input.lastName}
                onChange={eventHandler}
                className="focus-visible:ring-3 bg-white"
                placeholder="Enter your last name"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-8 flex flex-col gap-2">
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
            <div className="col-span-4 flex flex-col gap-2">
              <Label>
                Gender <span className="text-red-600">*</span>
              </Label>
              <Select
                onValueChange={(value) => setInput({ ...input, gender: value })}
                value={input.gender}
                className="focus-visible:ring-0 bg-white"
              >
                <SelectTrigger className="w-[180px] focus-visible:ring-0 bg-white">
                  <SelectValue placeholder="Choose" />
                </SelectTrigger>
                <SelectContent className="focus-visible:ring-0 bg-white">
                  <SelectItem
                    value="male"
                    className="focus-visible:ring-0 bg-white"
                  >
                    Male
                  </SelectItem>
                  <SelectItem
                    value="female"
                    className="focus-visible:ring-0 bg-white"
                  >
                    Female
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-2">
            <div className="my-2 col-span-6">
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
            <div className="my-2 col-span-6">
              <Label>Confirm Password</Label>
              <Input
                type="password"
                className="focus-visible:ring-3 bg-white"
                placeholder="Re-Type the password"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-5 flex flex-col gap-2">
              <Label>
                Country <span className="text-red-600">*</span>
              </Label>
              <Select
                onValueChange={(value) =>
                  setInput({ ...input, country: value })
                }
                value={input.country}
                className="focus-visible:ring-0 bg-white"
              >
                <SelectTrigger className="w-full focus-visible:ring-0 bg-white">
                  <SelectValue placeholder="Select your country" />
                </SelectTrigger>
                <SelectContent className="focus-visible:ring-0 bg-white">
                  {countries.map((country, index) => (
                    <SelectItem
                      key={index}
                      value={country.name}
                      className="flex items-center focus-visible:ring-0 bg-white"
                    >
                      <div className="flex items-center">
                        <img
                          src={country.flag}
                          alt={`Flag of ${country.name}`}
                          className="w-6 h-4 mr-2"
                        />
                        {country.name}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-4 flex flex-col gap-2">
              <Label>
                Phone Number <span className="text-red-600">*</span>
              </Label>
              <div className="flex items-center">
                <span className="mr-2">{selectedCountry.code || ""}</span>
                <Input
                  type="tel"
                  name="phoneNumber"
                  onChange={eventHandler}
                  className="focus-visible:ring-3 bg-white flex-1"
                  placeholder="Enter your phone number"
                  value={input.phoneNumber}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="col-span-3 flex flex-col gap-2">
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

export default SignUp;
