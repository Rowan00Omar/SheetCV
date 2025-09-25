// import { useState, useEffect } from "react";
// import Papa from "papaparse";

// interface SheetRow {
//     [key: string]: string;
// }

// const SHEET_ID = "1_GTs4j9v20tYkg3qeErs2FBE9zEc-LmqCeOMW2eIKeM";

// const BASE_URL =
//   "https://docs.google.com/spreadsheets/d/e/2PACX-1vTU4xxs8GJswt3KIpsBSSz8Y2tq12HN3nOPmrZkbr8cwZ3GL-cNFyNTAMry61mIhfRxFQM5jOODM3tL/pub";
  
// export function useSheetData(gid: string) {
//     const [data, setData] = useState<SheetRow[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 // const url = `https://docs.google.com/spreadsheets/d/e/2PACX-1vTU4xxs8GJswt3KIpsBSSz8Y2tq12HN3nOPmrZkbr8cwZ3GL-cNFyNTAMry61mIhfRxFQM5jOODM3tL/pub?output=csv&gid=${gid}`;
//                 const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&gid=${gid}`;

//                 const res = await fetch(url);
//                 if (!res.ok) throw new Error("Failed to fetch sheet");

//                 const text = await res.text();
//                 // 🔥 Strip wrapper: remove leading "google.visualization.Query.setResponse(" and trailing ");"
//                 const jsonStr = text.substring(47, text.length - 2);
//                 const json = JSON.parse(jsonStr);

//                 // Extract columns
//                 const cols = json.table.cols.map((c: any) => c.label);

//                 // Extract rows
//                 const rows = json.table.rows.map((r: any) =>
//                     r.c.reduce((acc: any, cell: any, i: number) => {
//                         acc[cols[i]] = cell ? cell.v : "";
//                         return acc;
//                     }, {})
//                 );

//                 setData(rows);
//                 setError(null);
//             } catch (err: any) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, [gid]);

//     return { data, loading, error };
// }

// // const SHEET_ID = "1_GTs4j9v20tYkg3qeErs2FBE9zEc-LmqCeOMW2eIKeM";

// export async function fetchSheetData(gid: string) {
// //   const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&gid=${gid}`;
//   const url = `${BASE_URL}?gid=${gid}&single=true&output=csv`;

//   const response = await fetch(url);
//   const text = await response.text();

//   const parsed = Papa.parse<string[]>(text, { header: false });

// //   // strip wrapper
// //   const json = JSON.parse(text.substr(47).slice(0, -2));
//   return parsed.data;

//   // parse rows
// //   return json.table.rows.map((row: any) =>
// //     row.c.map((cell: any) => (cell ? cell.v : null))
// //   );
// }

import { useEffect, useState } from "react";
import Papa from "papaparse";

const BASE_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTU4xxs8GJswt3KIpsBSSz8Y2tq12HN3nOPmrZkbr8cwZ3GL-cNFyNTAMry61mIhfRxFQM5jOODM3tL/pub";

export interface SheetRow {
  [key: string]: string;
}

export function useSheetData(gid: string) {
  const [data, setData] = useState<SheetRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const url = `${BASE_URL}?gid=${gid}&single=true&output=csv`;
        const res = await fetch(url);
        const text = await res.text();

        const parsed = Papa.parse<SheetRow>(text, { header: true });
        setData(parsed.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [gid]);

  return { data, loading, error };
}
