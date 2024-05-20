import { ITeacher } from "../Models/ITeacher";
import { getTeachers } from "../service/dataService";
// import { AxiosResponse } from "axios";

const AddTeachers: React.FC = () => {
  const fetchteachers = async () => {
    const response = await getTeachers();
    if (response) {
      const teachers: ITeacher[] = response.data;
      console.log(teachers);
    }
  };
  return (
    <div>
      <button onClick={fetchteachers}>Click me</button>
      <h1>Add Teachers</h1>
    </div>
  );
};

export default AddTeachers;
