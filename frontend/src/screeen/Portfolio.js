import React, { useState } from "react";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useGetPortfolioQuery } from "../slices/portfolioApiSlice";

function Portfolio() {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  // get portfolio images  list data using redux toolkit
  const { data, isLoading, error } = useGetPortfolioQuery();

  //looping through our images array to create img elements
  const imageCards = data?.map((img) => (
    <img
      key={img._id}
      className="image-card mb-2 me-2"
      onClick={() => showImage(img.image)}
      src={`./${img.image}`}
      alt=""
    />
  ));

  //get only images array 
  const images = getFields(data, "image"); 
  function getFields(input, field) {
    console.log(input)
    var output = [];
    if(input?.length){
      for (var i = 0; i < input?.length; ++i) output.push(input[i][field]);  
    }
    return output;
  }

  //function to show a specific image in the lightbox, amd make lightbox visible
  const showImage = (img) => {
    setImageToShow(img);
    setLightBoxDisplay(true);
  };

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  //show next image in lightbox
  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  //show previous image in lightbox
  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  console.log(images);

  return (
    <div className="my-5 text-center">
      <h1>Portfolio</h1>
      <div>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          imageCards
        )}
      </div>

      {lightboxDisplay ? (
        <div id="lightbox" onClick={hideLightBox}>
          <button onClick={showPrev}>⭠</button>
          <img id="lightbox-img" src={`../${imageToShow}`} alt="" />
          <button onClick={showNext}>⭢</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Portfolio;
