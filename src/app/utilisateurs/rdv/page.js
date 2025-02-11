"use client"

import { Navbar } from "@/components/base-components";
import AppointmentsPage from "@/components/table-management";


export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <Navbar userName={"John Doe"} />
<AppointmentsPage/>
    </div>
  );
}
