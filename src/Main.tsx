import Layout from "./components/layout/Layout";
import routes from "./routes";
const Main = (): JSX.Element => {
  return (
    <Layout>{routes}</Layout>
  );
};

export default Main;
