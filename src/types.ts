import { ReactNode } from "react";

export type ServiceProps = {
    id: number;
    icon: ReactNode;
    title: string;
    subtitle: string;
  };
  
export type ProductProps = {
    id: number;
    title:string;
    category:string;
    price:number;
    rating:number;
    views:number;
    image:string;
    quantity:number
  };