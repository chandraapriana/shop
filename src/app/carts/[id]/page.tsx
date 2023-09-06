import DetailCartPage from "@/modules/DetailCartPage";
import { NextPageContext } from "next";

export default function DetailCart({ params }: { params: { id: string } }) {
  return <DetailCartPage id={params.id} />;
}
