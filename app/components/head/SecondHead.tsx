import ModelSelect from "./ModelSelect";
const SecondHead = () => {
  return (
    <div className="mx-auto max-w-5xl px-2 pt-2">
      <div className="flex justify-between">
        <div className="flex items-center">Options</div>
        <ModelSelect />
      </div>
    </div>
  );
};

export default SecondHead;
