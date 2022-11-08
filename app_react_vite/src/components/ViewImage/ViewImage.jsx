import "./ViewImage.css";

export const ViewImage = ({ src, alt }) => {
  return (
    <>
      <div className="view_img ">
        <img src={src} alt={alt} />
      </div>
    </>
  );
};
