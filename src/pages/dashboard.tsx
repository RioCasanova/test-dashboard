// pages/dashboard.tsx

import Header from "@/components/Header";
import { Layout } from "../components/Layout";

const DashboardPage: React.FC = () => {
  return (
    <div>
      <Header imgLink="/dashboard" showLogout={true} />
      <Layout>
        <div>
          {/* Your user dashboard content here */}
          <h1>Welcome to Your Dashboard</h1>
          <p>
            This is where you will see your fake data, graphs, metrics, etc.
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default DashboardPage;
