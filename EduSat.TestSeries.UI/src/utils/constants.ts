import { TemplateTextType } from "./types";

export const baseURL = "https://localhost:32770/api/";

export const templateText: TemplateTextType = {
  text: {
    subject: "Greetings",
    body: "नमस्ते @FirstName@ @LastName@  !\n\n2024-25 यावर्षीची स्कॉलरशिप व एन. एम. एम. एस. परीक्षांच्या सराव प्रश्नपत्रिकांची नोंदणी प्रक्रिया सुरु झाली आहे. अधिक माहितीसाठी आमचे माहितीपत्रक डाउनलोड करू घ्याः https://drive.google.com/file/d/1_uminfQVi2y43UCGuYsmiuNVKPBZ6RJ7/view?usp=drivesdk . नोंदणीसाठी 8275362774 या क्रमांकावर संपर्क साधावा.\n\nएज्युसॅट टेस्ट सिरीज, सातारा",
  },
  invoice: {
    subject: "Invoice",
    body: "धन्यवाद @FirstName@ @LastName@ !\n\nआपली नोंदणी यशस्वीरित्या पूर्ण झाली आहे. कृपया रु. @RemainingAmount@ पाठवून सहकार्य करावे. कोटेशन  डाऊनलोड करण्यासाठी या लिंकवर क्लिक करा: @InvoiceLink@ अधिक माहितीसाठी किंवा तक्रारीसाठी 8275362774 या क्रमांकावर संपर्क साधावा.\n\nएज्युसॅट टेस्ट सिरीज, सातारा",
  },
  receipt: {
    subject: "Payment Receipt",
    body: "धन्यवाद @FirstName@ @LastName@ !\n\nआपल्यामार्फत आम्हाला रु @TotalAmount@ रक्कम प्राप्त झाली. पावती मिळविण्यासाठी @ReceiptLink@ या लिंकवर क्लिक करा. अधिक माहितीसाठी किंवा तक्रारीसाठी 8275362774 या क्रमांकावर संपर्क साधावा.\n\n\tएज्युसॅट टेस्ट सिरीज, सातारा",
  },
};
