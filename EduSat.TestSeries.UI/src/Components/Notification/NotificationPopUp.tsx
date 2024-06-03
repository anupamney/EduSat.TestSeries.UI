import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  //   MenuItem,
  //   Select,
  //   InputLabel,
  //   FormControl,
  Typography,
  IconButton,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloseIcon from "@mui/icons-material/Close";
import { notify } from "../../service/notificationService";

interface EmailPopupProps {
  open: boolean;
  onClose: () => void;
  emails: string[];
  type: string;
}

const EmailPopup: React.FC<EmailPopupProps> = ({
  open,
  onClose,
  emails,
  type,
}) => {
  //   const [template, setTemplate] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [attachment, setAttachment] = useState<File | null>(null);

  const handleSend = () => {
    // Logic to send the email
    console.log({
      //   template,
      emails,
      subject,
      body,
      attachment,
    });
    notify(emails, type, subject, body, attachment);
    onClose();
  };

  const handleAttachmentChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      setAttachment(event.target.files[0]);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Send Email</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent>
        {/* <FormControl fullWidth margin="normal">
          <InputLabel>Choose Template</InputLabel>
          <Select
            value={template}
            onChange={(e) => setTemplate(e.target.value as string)}
          >
            <MenuItem value="invoice">Invoice Link + Text msg</MenuItem>
            <MenuItem value="receipt">Payment Receipt + Text msg</MenuItem>
          </Select>
        </FormControl> */}
        <TextField
          label="To"
          type="email"
          fullWidth
          margin="normal"
          value={emails.join(", ")}
          disabled
        />
        <TextField
          label="Subject"
          fullWidth
          margin="normal"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <TextField
          label="Your body text goes here"
          multiline
          rows={4}
          fullWidth
          margin="normal"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <Button
          variant="contained"
          component="label"
          startIcon={<AttachFileIcon />}
        >
          Attachment
          <input type="file" hidden onChange={handleAttachmentChange} />
        </Button>
        {attachment && (
          <Typography variant="body2">{attachment.name}</Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Save as draft</Button>
        <Button onClick={handleSend} color="primary" variant="contained">
          Send
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EmailPopup;
