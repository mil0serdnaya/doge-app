import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBreeds } from "../../redux/dogeSlice";

export const Breeds = () => {
  const dispatch = useDispatch();
  const breeds = useSelector((state) => state.dogeApp.breeds);

  useEffect(() => {
    dispatch(
      fetchBreeds()
    )
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="breeds">
    </section>
  );
}