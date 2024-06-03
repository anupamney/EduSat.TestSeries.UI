export interface ISchoolDetails {
  id: number;
  schoolName: string;
  srn: number;
  teacherName: string;
  teacherEmail: string;
  totalStudents: number;
  totalPayment: number;
  totalPaymentReceived: number;
  paymentStatus: boolean;
  academicYear: string;
  district: string;
  className: string;
}
