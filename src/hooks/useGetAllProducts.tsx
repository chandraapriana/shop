"use client";
import { ProductType } from "@/utils/type/typeProduct";
import axios from "axios";
import { useEffect, useState } from "react";

const useGetAllProducts = () => {
  const [data, setData] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setData(res.data.products);
        setIsLoading(true);
      })
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, isLoading };
};

export default useGetAllProducts;
