"use client";

import { CartType } from "@/utils/type/typeCarts";
import { UserType } from "@/utils/type/typeUser";
import Image from "next/image";

const CartCard = ({ data, user }: { data: CartType; user: UserType }) => {
  return (
    <div className="flex flex-col mt-4 max-w-[500px] justify-between bg-white p-4 rounded-2xl shadow-xl ">
      <div className="flex flex-row justify-between mb-3 items-center">
        <h1 className="font-bold text-lg">Cart</h1>
        <div className="flex flex-row items-center gap-2">
          <h1 className="font-bold text-lg">{`${user?.firstName} ${user?.lastName}`}</h1>
          <Image
            className="bg-gray-300 rounded-full"
            src={user?.image}
            width={32}
            height={32}
            alt="user photo"
          />
        </div>
      </div>

      {data?.products?.map((product) => (
        <div
          key={product.id}
          className=" border-gray-400 border-b-[1px] leading-none py-2"
        >
          <h1 className=" text-md mb-1">{product.title}</h1>
          <div className="flex flex-row items-end gap-2">
            <p className="flex flex-row items-center gap-2">
              <span className="font-bold text-md">${product.price}</span>
              <span className="font-extralight text-gray-400 text-md">
                x {product.quantity}
              </span>
            </p>
          </div>
        </div>
      ))}
      <h1 className="font-bold text-xl mt-2">
        Total :
        <span className="line-through font-light !text-sm text-gray-500 mx-1">
          ${data?.total}
        </span>
        <span className="!text-xl ">${data?.discountedTotal}</span>
      </h1>
    </div>
  );
};

export default CartCard;
