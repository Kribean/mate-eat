"use client"
import BusinessRegistration from "@/components/business-registration";
import HomePage from "@/components/landing-page-auth";
import AppointmentsPage from "@/components/table-management";
import UserDashboard from "@/components/user/UserDashboard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
<UserDashboard/>
    </div>
  );
}
