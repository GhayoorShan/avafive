import { SyncLoader } from "react-spinners";

export const Button: React.FC<{
  label: string;
  isLoading?: any;
  width?: string;
  height?: string;
  outline?: boolean;
  onClick: () => void;
}> = ({
  label,
  isLoading = false,
  width = "180px",
  height = "44px",
  outline = false,
  onClick = () => {},
}) => {
  return (
    <button
      className={`rounded-lg font-medium text-[16px] md:text-[16px] disabled  ${
        !outline ? "bg-primary text-white" : "text-primary"
      }`}
      onClick={onClick}
      disabled={isLoading}
      style={{
        width: width,
        height: height,
      }}
    >
      {isLoading ? <SyncLoader color="#ffff" /> : label}
    </button>
  );
};
