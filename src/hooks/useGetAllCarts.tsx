"use client";
import { CartType } from "@/utils/type/typeCarts";
import { ProductType } from "@/utils/type/typeProduct";
import axios from "axios";
import { useEffect, useState } from "react";

const useGetAllCarts = () => {
  const [data, setData] = useState<CartType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/carts")
      .then((res) => {
        setData(res.data.carts);
        setIsLoading(true);
      })
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, isLoading };
};

export default useGetAllCarts;
