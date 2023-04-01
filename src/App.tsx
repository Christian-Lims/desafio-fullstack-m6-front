import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import RoutesMain from "./routes";
import GlobalStyle from "./styles/global";
import UserProvider from "./contexts/userContext";
import ContactProvider from "./contexts/contactContext";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <UserProvider>
        <ContactProvider>
          <RoutesMain />
        </ContactProvider>
      </UserProvider>
    </>
  );
}

export default App;
