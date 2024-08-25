export interface IPaymentDetails {
  id: number;
  scholarshipId: number;
  totalAmount: number;
  amountPaid: number;
  paymentStatus: boolean;
  discountedPrice: number;
  discountPercent: number;
}
