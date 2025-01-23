import { useEffect, useState } from "react";
import axios from "axios";

const Records = () => {
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

  return (
    <div>
      {records.length === 0 ? (
        <p>No Records available</p>
      ) : (
        <ul className="record-list">
          {records.map((record) => (
            <li key={record._id} className="'record-item">
              <h2>{record.artist}</h2>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Records;
