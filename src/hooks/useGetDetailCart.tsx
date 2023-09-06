"use client";
import { ProductType } from "@/utils/type/typeProduct";
import { UserType } from "@/utils/type/typeUser";
import axios from "axios";
import { useEffect, useState } from "react";

const useGetDetailCart = (id: string) => {
  const [data, setData] = useState<ProductType>({} as ProductType);
  const [user, setUser] = useState<UserType>({} as UserType);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://dummyjson.com/carts/${id}`)
      .then((res) => {
        setData(res.data);
        axios
          .get(`https://dummyjson.com/users/${res.data.userId}`)
          .then((res) => setUser(res.data))
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  }, [id]);

  return { data, user, isLoading };
};

export default useGetDetailCart;
