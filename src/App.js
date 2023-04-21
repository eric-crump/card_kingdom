import Home from './components/Home';
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const Fetchdata = () => {
      fetch(
        `https://cdn.contentstack.io/v3/content_types/home_page/entries?environment=preview`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            api_key: "blt70963ea7f00a9052",
            access_token: "cs501752ca109dd02a062fa0c5"
          },
        }
      )
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setData(data);
        setLoading(false);
      });
    };
    Fetchdata();
  }, []);

  if(isLoading){
    return <div>Loading...</div>
  }

  if(!data){
    return <div>Loading...</div>
  }
  
  console.log(data);

  return (
    <Home props={data}/>
  );
}

export default App;
