import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDogsAsync } from "../../redux/dogeSlice";

export const Breeds = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getDogsAsync()
    )
  }, [dispatch]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="breeds"></section>
  );
}