import { FaComments, FaDownload, FaTrash } from "react-icons/fa";

const chatFiles = [
  { id: "1", name: "Customer Support.csv", size: "1.2 MB", status: "Processed" },
  { id: "2", name: "Meeting Transcripts.txt", size: "0.8 MB", status: "Processing..." },
  { id: "3", name: "User Feedback.json", size: "2.1 MB", status: "Processed" },
  { id: "4", name: "Q&A Session.log", size: "3.5 MB", status: "Processed" },
];

export default function ChatFilesCard() {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-semibold">Chat Files</h2>
        <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
          Upload File
        </button>
      </div>

      <p className="text-gray-500 text-sm mb-2">Recent Files (8 files)</p>

      {/* Files */}
      <div className="space-y-2">
        {chatFiles.map((file) => (
          <div
            key={file.id}
            className="flex items-center justify-between border rounded p-2 hover:bg-gray-50"
          >
            <div className="flex items-center space-x-2">
              <FaComments className="text-green-500" />
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
