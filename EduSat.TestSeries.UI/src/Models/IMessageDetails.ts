export interface IMessageDetails {
  mode: string;
  recipients: string[];
  subject: string;
  body: string;
  attachment: File | null;
}
