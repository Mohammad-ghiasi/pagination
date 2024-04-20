"use client";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";



export const useGet = (url: string, pageNumber: number) => {
  let  next: null | string = null; 
  let  previous: null | string = null ;
  const { data, isPending } = useQuery({
    queryKey: ["Posts", pageNumber],
    // initialData: , // important,
    // placeholderData: , // important
    queryFn: async (): Promise<any> => {
      let address: string = url + `?page=${pageNumber}`;
      const datas = await axios
        .get(address)
        .then((res: AxiosResponse) => {
          return res.data;
        });
      return datas;
    },
    // impoertant part... (chnaging data type)
    select: (datas) => {
      next = datas.next;
      previous = datas.previous;
      // console.log(datas.next);
      

      return datas.results;
    },
  });
  return { data, isPending, next, previous };
};
