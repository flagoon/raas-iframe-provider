export const Button = ({
  label,
  onClickHandler,
}: {
  label?: string;
  onClickHandler: () => void;
}) => {
  return (
    <button
      className="bg-red-600 rounded-lg p-2 text-xl w-full max-w-sm hover:bg-red-700 text-white"
      onClick={onClickHandler}
    >
      {label || "Jetzt participateddd"}
    </button>
  );
};
