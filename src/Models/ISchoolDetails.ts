export interface ISchoolDetails {
  id: number;
  schoolName: string;
  srn: number;
  teacherFirstName: string;
  teacherLastName: string;
  teacherEmail: string;
  teacherContact: string;
  totalStudents: number;
  totalPayment: number;
  totalPaymentReceived: number;
  paymentStatus: boolean;
  academicYear: string;
  district: string;
  className: string;
  isPrincipal: boolean;
  discount_Percent: number;
  discounted_Price: number;
}
