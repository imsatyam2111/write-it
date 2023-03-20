import { useState, useEffect, Fragment } from 'react';
import { Search, WritingCard } from "../../components";
import { Box, Button, Grid, Fab, Typography, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import styles from "../../styles/modules/Todos.module.css";
import { Todo } from "./Todo";
import { TodoHeader } from "./TodoHeader";
import { AddTodo } from './AddTodo';
import { collection, doc, DocumentData, getDocs, query } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import useAuth from '../../hooks/useAuth';

export const TodosModule = () => {
  const { user } = useAuth()
  const [addTodoModalOpen, setAddTodoModelOpen] = useState(false);
  const [todos, setTodos] = useState<Array<DocumentData>>([]);

  const handleOpen = () => setAddTodoModelOpen(true);
  const handleClose = () => setAddTodoModelOpen(false);

  const getTodos = async () => {
    const todos: Array<DocumentData> = [];
    const docRef = doc(db, "users" as string, user?.uid as string);
    const colRef = collection(docRef, "todos")
    const q = query(colRef);

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      todos.push(doc.data())
    });
    setTodos(todos);
  };

  useEffect(() => {
    getTodos();
  }, [])

  return (
    <>
      <AddTodo open={addTodoModalOpen} handleClose={handleClose} />
      <Box className={styles.todosContainer}>
        <div className={styles.todosHeading}>
          <Typography variant="h4">
            Todos
          </Typography>
        </div>
        <div className={styles.searchContainer}>
          <div className={styles.searchInput}>
            <Search placeholder="Search Todos" />
          </div>
        </div>
        <div className={styles.addTodo}>
          <Button variant="contained" className={styles.addTodoButton} onClick={handleOpen}>
            + Add Todo
          </Button>
        </div>
        <div className={styles.addTodoButtonMobile}>
          <Fab color="primary" aria-label="Add Todo">
            <AddIcon />
          </Fab>
        </div>
        <Divider />
        <div className={styles.todos}>
          <TodoHeader />
          {todos?.map((todo, index) => (
            <Fragment key={index}>
              <Todo todo={todo} />
            </Fragment>
          ))}
        </div>
      </Box>
    </>
  );
};
