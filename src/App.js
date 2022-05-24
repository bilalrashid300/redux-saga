import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./components/Card";
import "./App.css";
import { getUser } from "./redux/actions/users";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state?.usersReducer?.users);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const UserList = users.map((user, index) => {
    return <Card user={user} key={index} />;
  });

  return <div className="App">{UserList}</div>;
}

export default App;
