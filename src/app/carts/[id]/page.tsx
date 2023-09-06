import DetailCartPage from "@/modules/DetailCartPage";
import { NextPageContext } from "next";

export default function DetailCart({ params }: { params: { id: string } }) {
  return <DetailCartPage id={params.id} />;
}

export async function getServerSideProps(context: NextPageContext) {
  const { id } = context.query;

  return { props: { id } };
}
