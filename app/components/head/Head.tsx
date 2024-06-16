import SecondHead from "./SecondHead";
import FirstRightButtons from "./FirstRightButtons";
const Head = () => {
  return (
    <div className="border-b">
      {/* First head */}
      <div className="px-2 pt-2">
        <div className="flex items-center justify-between">
          <div>Logo</div>
          <FirstRightButtons />
        </div>
      </div>
      {/* head tabs */}
      <SecondHead />
    </div>
  );
};

export default Head;
