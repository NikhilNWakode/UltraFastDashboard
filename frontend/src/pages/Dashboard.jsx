import useDashboard from "../hooks/useDashboard";

// Cards
import UsersCard from "../components/widgets/UsersCard";
import RevenueCard from "../components/widgets/RevenueCard";
import OrdersCard from "../components/widgets/OrdersCard";
import NotificationsCard from "../components/widgets/NotificationsCard";
import SessionsCard from "../components/widgets/SessionsCard";
import ConversionRateCard from "../components/widgets/ConversionRateCard";

// Charts
import SalesChart from "../components/widgets/SalesChart";
import TopProductsChart from "../components/widgets/TopProductsChart";
import ActiveUsersChart from "../components/widgets/ActiveUsersChart";

// Other Widgets
import SystemHealthWidget from "../components/widgets/SystemHealthWidget";
import WeatherWidget from "../components/widgets/WeatherWidget";
import CurrencyWidget from "../components/widgets/CurrencyWidget";

// Table
import TransactionsTable from "../components/widgets/TransactionsTable";

export default function Dashboard() {
  const { data, isLoading } = useDashboard();

  return (
    <div className=" bg-gray-50 py-8 px-4">
      <div className="w-full ">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-500 mt-1">Your business overview at a glance</p>
        </header>

        {/* Cards Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <UsersCard value={data?.users} loading={isLoading} />
            <RevenueCard value={data?.revenue} loading={isLoading} />
            <OrdersCard value={data?.orders} loading={isLoading} />
            <NotificationsCard value={data?.notifications} loading={isLoading} />
            <SessionsCard value={data?.realtime} loading={isLoading} />
            <ConversionRateCard value={data?.conversion_rate} loading={isLoading} />
          </div>
        </section>

        {/* Sales Chart Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Sales Analytics</h2>
          <div className="bg-white rounded-xl shadow p-6">
            <SalesChart data={data?.sales_chart} loading={isLoading} />
          </div>
        </section>

        {/* Insights Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Insights</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow p-6">
              <TopProductsChart data={data?.top_products} loading={isLoading} />
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <ActiveUsersChart data={data?.active_users} loading={isLoading} />
            </div>
          </div>
        </section>

        {/* System & Environment Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">System & Environment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow p-6">
              <SystemHealthWidget value={data?.system_health} loading={isLoading} />
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <WeatherWidget value={data?.weather} loading={isLoading} />
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <CurrencyWidget value={data?.currency} loading={isLoading} />
            </div>
          </div>
        </section>

        {/* Transactions Table Section */}
        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Latest Transactions</h2>
          <div className="bg-white rounded-xl shadow p-6">
            <TransactionsTable data={data?.transactions} loading={isLoading} />
          </div>
        </section>
      </div>
    </div>
  );
}
