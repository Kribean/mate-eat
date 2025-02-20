"use client"

import { Navbar } from "@/components/base-components";
import RestaurantDashboardEntre from "@/components/components-entreprise/RestaurantDashboard";
import AppointmentsPage from "@/components/table-management";


export default function Dashboard() {
  return (
    <div className="flex flex-col justify-center">
      <RestaurantDashboardEntre/>
    </div>
  );
}
