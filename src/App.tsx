import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMemesAsync } from "./redux/reducer";
import Router from "./Router";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMemesAsync());
  }, [dispatch]);

  return <Router />;
}
