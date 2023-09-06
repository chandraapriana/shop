"use client";
import { ProductType } from "@/utils/type/typeProduct";
import axios from "axios";
import { useEffect, useState } from "react";

const useGetAllProducts = (page?: number) => {
  const [data, setData] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products${page ? `?limit=${page * 10}` : ""}`)
      .then((res) => {
        setData(res.data.products);
        setIsLoading(true);
      })
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  }, [page]);

  return { data, isLoading };
};

export default useGetAllProducts;
