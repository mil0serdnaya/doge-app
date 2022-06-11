import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBreedsList } from "../../redux/dogeSlice";

export const Breeds = () => {
  const dispatch = useDispatch();
  const breeds = useSelector((state) => state.dogeApp.breedsList);

  useEffect(() => {
    dispatch(
      fetchBreedsList()
    )
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="breeds">
      { breeds.map((breed) => (
        <div> { breed } </div>
      )) }
    </section>
  );
}