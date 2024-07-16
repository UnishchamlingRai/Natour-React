import TourCard from "./TourCard";
import { useGetAllTours } from "./useGetAllTours";

const ToursContainer = () => {
  const { isLoading, tours, error } = useGetAllTours();

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;

  return (
    <div className="card-container">
      <TourCard />
      {tours.map((tour) => (
        <TourCard tour={tour} key={tour._id} />
      ))}
    </div>
  );
};

export default ToursContainer;
