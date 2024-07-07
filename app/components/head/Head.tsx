import SecondHead from "./SecondHead";
import FirstRightButtons from "./FirstRightButtons";
import Tabs from "./Tabs";
const Head = () => {
  return (
    <div className="border-b">
      {/* First head */}
      <div className="px-2 pt-2">
        <div className="flex items-center justify-between gap-2 sm:relative">
          <div className="hidden sm:block">
            <p className="flex items-center text-xl font-semibold uppercase">Ourea</p>
          </div>
          <Tabs />
          <FirstRightButtons />
        </div>
      </div>
      {/* head tabs */}
      <SecondHead />
    </div>
  );
};

export default Head;
