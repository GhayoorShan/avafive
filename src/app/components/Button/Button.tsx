import Image from "next/image";
import { SyncLoader } from "react-spinners";

export const Button: React.FC<{
  label: string;
  isLoading?: any;
  width?: string;
  height?: string;
  outline?: boolean;
  onClick?: () => void | undefined;
  icon?: string | undefined;
}> = ({
  label,
  isLoading = false,
  width = "180px",
  height = "44px",
  outline = false,
  onClick = undefined,
  icon = undefined,
}) => {
  return (
    <button
      className={`rounded-lg font-medium text-[16px] md:text-[16px] disabled min-w-[160px]  ${
        !outline
          ? "bg-primary text-white"
          : "text-primary border border-primary"
      }`}
      onClick={onClick}
      disabled={isLoading}
      style={{
        width: width,
        height: height,
      }}
    >
      {isLoading ? (
        <SyncLoader color="#ffff" />
      ) : (
        <div className="flex items-center justify-center gap-2 w-full">
          {icon && <Image src={icon} alt="button-icon" className="" />}
          {label}
        </div>
      )}
    </button>
  );
};
