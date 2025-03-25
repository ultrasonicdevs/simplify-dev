import React from 'react';

interface TableProps {
  headers: string[];
  data: Array<{
    content: React.ReactNode;
    color?: string;
  }>[];
}

export const Table = ({ headers, data }: TableProps) => (
  <table className="w-full border-collapse border-gray-300 text-left">
    <thead>
      <tr className="bg-gray-100">
        {headers.map((header, index) => (
          <th key={index} className="p-2 border border-gray-300 font-bold">
            {header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <td
              key={cellIndex}
              className="p-2 border border-gray-300"
              style={{ color: cell.color || 'inherit' }}>
              {cell.content}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
