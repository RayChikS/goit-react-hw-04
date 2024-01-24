export const ImageCard = ({ item }) => {
  console.log(item);
  return (
    <div className="photo-card">
      <img src={item.urls.small} alt="" />
    </div>
  );
};
