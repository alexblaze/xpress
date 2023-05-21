import { useEffect, useState } from "react";

const App = () => {
  const [data, setdata] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((response) => response.json())
      .then((data) => setdata(data));
  }, []);
  console.log(data);
  return <div>test {data?.user}</div>;
};

export default App;
