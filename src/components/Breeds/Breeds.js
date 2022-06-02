import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBreedsListAsync } from "../../redux/dogeSlice";

export const Breeds = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getBreedsListAsync()
    )
  }, [dispatch]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="breeds"></section>
  );
}