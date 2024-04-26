// pages/dashboard.tsx

import { Layout } from "../components/Layout";

const DashboardPage: React.FC = () => {
  return (
    <Layout>
      <div>
        {/* Your user dashboard content here */}
        <h1>Welcome to Your Dashboard</h1>
        <p>This is where you will see your fake data, graphs, metrics, etc.</p>
      </div>
    </Layout>
  );
};

export default DashboardPage;
