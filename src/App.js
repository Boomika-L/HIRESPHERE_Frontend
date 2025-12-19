import { Outlet } from "react-router-dom";
import "./App.css";
function App() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchApi = async () => {
  //     try {
  //       const response = await fetch("http://localhost:3000/dashboard.json");
  //       const result = await response.json();
  //       setData(result);
  //     } catch (error) {
  //       console.error("Error fetching dashboard data:", error);
  //     }
  //   };

  //   fetchApi();
  // }, []);

  return (
    <div className="App">
     
      <Outlet/>
    </div>
  );
}

export default App;
