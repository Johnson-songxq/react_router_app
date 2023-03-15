import MainHeader from "../components/MainHeader";
import classes from "./MainLayout.module.css";

const NotFoundError = () => {
  return (
    <div>
      <MainHeader />
      <main className={classes.content}>
        <h1>Page Not Found</h1>
        <p>Sorry we cannot find the page your requested</p>
      </main>
    </div>
  );
};

export default NotFoundError;
