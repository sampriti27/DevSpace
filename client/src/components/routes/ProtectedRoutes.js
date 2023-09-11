import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { isAuthenticated } from "../utils/auth";
import { ApplicationContext } from "@/context/ApplicationContext";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const { fetchLoggedUser, getAllPosts } = useContext(ApplicationContext);

  useEffect(() => {
    const checkAuthentication = async () => {
      if (!isAuthenticated()) {
        router.push("/"); // Redirect to the login page
      } else {
        fetchLoggedUser();
        getAllPosts();
      }
    };

    checkAuthentication(); // Call the async function immediately
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return <>{children}</>;
};

export default ProtectedRoute;
