import DashboardLayout from "../components/dashboard-layout";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-gray-500 text-sm">Users</div>
          <div className="text-2xl font-bold">1,234</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-gray-500 text-sm">Revenue</div>
          <div className="text-2xl font-bold">$12,345</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-gray-500 text-sm">Active Sessions</div>
          <div className="text-2xl font-bold">87</div>
        </div>
      </div>
    </DashboardLayout>
  );
}
