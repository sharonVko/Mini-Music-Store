import { useEffect, useState } from "react";
import axios from "axios";

const Test = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.get("http://localhost:8000/records");
        setRecords(response.data);
      } catch (error) {
        console.error("Error by fetch", error);
      }
    };
    fetchRecords();
  }, []);
  console.log(records);
  return (
    <div>
      {records.length === 0 ? (
        <p>No Records available</p>
      ) : (
        // card container
        <div className="flex flex-wrap m-4">
          {records.map((record) => (
            <div
              key={record._id}
              className="max-w-sm rounded overflow-hidden shadow-lg"
            >
              <img
                className="w-48"
                src={
                  record.image_url ||
                  "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg"
                }
                alt=""
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">{record.artist}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {record.genre}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Test;
