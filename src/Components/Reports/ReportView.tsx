import { useEffect, useState } from "react";
import { getSchoolList } from "../../service/dataService";
import { ISchoolDetails } from "../../Models/ISchoolDetails";
import SchoolList from "../SchoolsList";
import { Button } from "@mui/material";

export const ReportView: React.FC = () => {
  const [reportData, setReportData] = useState<ISchoolDetails[]>([]);
  const fetchData = async () => {
    const data = await getSchoolList();
    setReportData(data?.data || []);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {reportData.length > 0 && <SchoolList schoolList={reportData} />}
      {reportData.length === 0 && (
        <Button onClick={fetchData}>Fetch Schools list</Button>
      )}
    </div>
  );
};

export default ReportView;
