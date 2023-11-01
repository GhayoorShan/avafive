import { favorite, wishlist } from "@/app/assets/icons";
import { hero, product1 } from "@/app/assets/images";
import Image from "next/image";

export const ProductCard: React.FC<{
  thumbnail: string;
  title: string;
  brand: string;
  price: string;
}> = ({ thumbnail = "", title = "", brand = "", price = "" }) => {
  console.log("thumbnail", thumbnail);

  return (
    <div className=" ">
      <div style={{ position: "relative", width: "285px", height: "240px" }}>
        <Image
          src={thumbnail}
          alt="thumbnail"
          sizes="286px"
          fill
          className="rounded-lg"
          style={
            {
              // objectFit: "contain",
              // objectPosition: "center",
            }
          }
        />
      </div>
      <div className="flex justify-between items-start py-3">
        <div className="flex flex-col gap-2">
          <p className="font-medium">{title}</p>
          <p className="text-sm text-[#626262]">{brand}</p>
          <p className="font-medium">{price}</p>
        </div>
        <Image src={favorite} alt="fav" />
      </div>
    </div>
  );
};
