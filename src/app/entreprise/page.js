"use client"

import { Navbar } from "@/components/base-components";
import RestaurantDashboard from "@/components/restaurant-dashboard";
import AppointmentsPage from "@/components/table-management";


export default function Dashboard() {
  return (
    <div className="flex flex-col justify-center">
      <RestaurantDashboard/>
    </div>
  );
}
