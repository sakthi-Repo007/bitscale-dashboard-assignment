export default function GridRow() {
  return (
    <>
      <tr className="border-b border-gray-200 bg-gray-50">
        <th className="px-4 md:px-6 py-4 text-left text-sm font-medium text-gray-500">
          Name
        </th>

        <th className="px-4 md:px-6 py-4 text-left text-sm font-medium text-gray-500">
          Owner
        </th>

        <th className="px-4 md:px-6 py-4 text-left text-sm font-medium text-gray-500">
          Records
        </th>

        <th className="px-4 md:px-6 py-4 text-left text-sm font-medium text-gray-500">
          Updated
        </th>

        <th className="px-4 md:px-6 py-4" />
      </tr>
    </>
  );
}
