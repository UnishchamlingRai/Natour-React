import BookTourNow from "./BookTourNow";
import TourReviews from "./TourReviews/TourReviews";
import TourSectionDescription from "./TourSectionDescription";
import TourSectionHeader from "./TourSectionHeader";

import TourSectionPictures from "./TourSectionPictures";

function Tour() {
  return (
    <>
      <TourSectionHeader />
      <TourSectionDescription />

      <TourSectionPictures />
      <TourReviews />
      <BookTourNow />
    </>
  );
}

export default Tour;
