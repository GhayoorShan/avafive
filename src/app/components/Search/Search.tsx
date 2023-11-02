import { search } from "@/app/assets/icons";
import Image from "next/image";

interface Props {
  placeholder: string;
  onChange: (key: string) => void;
  defaultValue?: string | null;
}

export default function Search({
  placeholder,
  onChange,
  defaultValue = "",
  ...otherProps
}: Props) {
  return (
    <div className="relative w-[200px]  md:w-[360px] h-11">
      <div className="absolute top-2 left-0 flex items-center pl-3 pointer-events-none ">
        {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"> */}
        <Image src={search} alt="search" />
      </div>
      <input
        type="text"
        id="simple-search"
        className="text-black bg-secondary  text-start  focus:outline-none text-sm rounded-[4px] block w-full pl-14 p-3 "
        placeholder={placeholder || ""}
        required
        // onChange={(e) => onChange(e.target.value)}
        defaultValue={defaultValue || ""}
        {...otherProps}
      />
    </div>
  );
}
