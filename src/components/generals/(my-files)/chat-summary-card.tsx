import { FaFileAlt, FaDownload, FaTrash } from "react-icons/fa";

const summaryFiles = [
  { id: "1", name: "Annual Report.pdf", size: "2.4 MB", status: "Processed" },
  { id: "2", name: "Market Analysis.docx", size: "1.8 MB", status: "Processing..." },
  { id: "3", name: "Product Specs.xlsx", size: "3.1 MB", status: "Processed" },
  { id: "4", name: "Research Paper.pdf", size: "4.7 MB", status: "Processed" },
];

export default function SummaryFilesCard() {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-semibold">Summary Files</h2>
        <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
          Upload File
        </button>
      </div>

      <p className="text-gray-500 text-sm mb-2">Recent Files (12 files)</p>

      {/* Files */}
      <div className="space-y-2">
        {summaryFiles.map((file) => (
          <div
            key={file.id}
            className="flex items-center justify-between border rounded p-2 hover:bg-gray-50"
          >
            <div className="flex items-center space-x-2">
              <FaFileAlt className="text-blue-500" />
              <div>
                <p className="font-medium text-sm">{file.name}</p>
                <p className="text-xs text-gray-500">
                  {file.status} • {file.size}
                </p>
              </div>
            </div>
            <div className="flex space-x-3 text-gray-500">
              <FaDownload className="cursor-pointer hover:text-blue-600" />
              <FaTrash className="cursor-pointer hover:text-red-600" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
