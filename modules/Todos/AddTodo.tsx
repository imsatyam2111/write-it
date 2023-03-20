import { useState } from "react";
import {
  Backdrop,
  Box,
  Modal,
  Fade,
  Button,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { setDoc, doc, Timestamp, addDoc, collection,  } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import useAuth from "../../hooks/useAuth";
import { v4 as uuidv4 } from 'uuid';

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

interface IAddTodoProps {
  open: boolean;
  handleClose: () => void;
}

export const AddTodo = (props: IAddTodoProps) => {
  const { open, handleClose } = props;
  const [priority, setPriority] = useState(false);
  const { user } = useAuth();

  const handleAddTodo = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const newTodoData = {
      title: formData.get('title'),
      priority: priority,
      completed: false,
      id: uuidv4()
    }

    const docRef = doc(db, "users" as string, user?.uid as string);
    const colRef = collection(docRef, "todos")
    await addDoc(colRef, {...newTodoData, createdAt: Timestamp.fromDate(new Date())});

    handleClose();
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ mb: 3 }}
            >
              <Typography variant="h5">Add Todo</Typography>
              <CloseIcon sx={{ cursor: "pointer" }} onClick={handleClose} />
            </Stack>
            <Box component="form" onSubmit={handleAddTodo}>
              <TextField
                required
                fullWidth
                id="title"
                label="Todo"
                name="title"
                autoFocus
              />
              <FormControlLabel
                control={<Checkbox value={priority} onClick={() => setPriority(!priority)} name="priority" />}
                label="Set Priority"
                sx={{ my: 1 }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, display: "block", ml: "auto" }}
              >
                + Add Todo
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
