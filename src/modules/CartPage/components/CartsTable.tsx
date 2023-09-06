"use client";
import useGetAllCarts from "@/hooks/useGetAllCarts";

import { CartType } from "@/utils/type/typeCarts";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { InputHTMLAttributes, useEffect, useMemo, useState } from "react";

const CartsTable = () => {
  const { data: dataCarts } = useGetAllCarts();
  const [data, setData] = useState(() => [...dataCarts]);
  const [globalFilter, setGlobalFilter] = useState("");

  useEffect(() => {
    setData(dataCarts);
  }, [dataCarts]);

  const columnHelper = createColumnHelper<CartType>();

  const columns = useMemo(
    () => [
      columnHelper.accessor("id", {
        cell: (info) => info.getValue(),
        header: () => <span>No</span>,
      }),
      columnHelper.accessor((row) => row.totalProducts, {
        id: "totalProduct",
        cell: (info) => <i>{info.getValue()}</i>,
        header: () => <span>Product</span>,
      }),
      columnHelper.accessor("total", {
        header: () => "totalPrice",
        cell: (info) => "$" + info.renderValue(),
      }),
      columnHelper.accessor("totalQuantity", {
        header: () => <span>totalQuanity</span>,
      }),
    ],
    [columnHelper]
  );
  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter: globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className=" flex flex-col mt-4 justify-between bg-white p-2 rounded-2xl shadow-xl w-[1000px] min-h-[556px] h-[556px]">
      <div className="flex flex-row justify-between">
        <h1 className="font-bold">Table Carts</h1>
      </div>

      <div className="p-2  h-[90%]">
        <table className="w-full !h-[80px]">
          {/* Table Header */}
          <thead className=" bg-[#F9FAFC] h-10 rounded-2xl">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr className="pl-5" key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th className={`text-center`} key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          {/* Table Body */}
          <tbody className="h-auto  mt-10">
            {table.getRowModel().rows.map((row) => (
              <tr className="" key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td className={"text-center  py-2"} key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex  justify-end">
        <div className="bg-white p-2 rounded-2xl shadow-xl gap-3">
          <button
            onClick={() => table.setPageIndex(0)}
            className="w-6 h-6  mx-2 shadow text-gray leading-none text-[10px]  bg-gray-300 rounded-full"
          >
            {"<<"}
          </button>
          <button
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
            className="w-6 h-6 disabled:opacity-50  mx-2 shadow text-gray leading-none text-[10px] bg-gray-300 rounded-full"
          >
            {"<"}
          </button>
          <button
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
            className="w-6 h-6 disabled:opacity-50 mx-2 shadow text-gray leading-none text-[10px] bg-gray-300 rounded-full"
          >
            {">"}
          </button>
          <button
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            className="w-6 h-6  mx-2 shadow text-gray leading-none text-[10px] bg-gray-300 rounded-full"
          >
            {">>"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartsTable;

function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 200,
  ...props
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value, debounce, onChange]);

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
