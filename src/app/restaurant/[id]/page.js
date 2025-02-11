"use client"
import BusinessRegistration from "@/components/business-registration";
import HomePage from "@/components/landing-page-auth";
import RestoDashboard from "@/components/resto-dashboard";
import AppointmentsPage from "@/components/table-management";
import UserDashboard from "@/components/user-dashboard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">

<RestoDashboard/>
    </div>
  );
}
