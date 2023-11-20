import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const ToDoList = () => {
  const [todo, setTodo] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [todoArray, setTodoArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = () => {
    setLoading(true);
    axios
      .get('http://localhost:3001/posts')
      .then((response) => {
        setTodoArray(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Unable to fetch todos.');
        setLoading(false);
      });
  };

  const addTodo = () => {
    const newTodoObj = {
      title: todo,
      imageUrl: imageUrl,
      completed: false,
    };
    axios
      .post('http://localhost:3001/posts', newTodoObj)
      .then(() => {
        getTodo();
        setTodo('');
        setImageUrl('');
      })
      .catch(() => {
        setError('Todo not posted.');
      });
  };

  const updateTodo = (id, passingData) => {
    axios
      .put(`http://localhost:3001/posts/${id}, passingData`)
      .then(() => {
        getTodo();
      })
      .catch(() => {
        setError('Todo not updated.');
      });
  };

  const deleteTodo = (id) => {
    axios
      .delete(`http://localhost:3001/posts/${id}`)
      .then(() => {
        getTodo();
      })
      .catch(() => {
        setError('Todo not deleted.');
      });
  };

  const handleUpdateClick = (todoItem) => {
    const newTitle = prompt('Enter new title:', todoItem.title);
    const newImageUrl = prompt('Enter new image URL:', todoItem.imageUrl);
    if (newTitle !== null) {
      const passingData = {
        title: newTitle,
        imageUrl: newImageUrl,
      };
      updateTodo(todoItem.id, passingData);
    }
  };

  const handleDeleteClick = (id) => {
    deleteTodo(id);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <div>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Todo" variant="outlined" value={todo} onChange={(e) => setTodo(e.target.value)} />
          <TextField id="outlined-basic" label="Image URL" variant="outlined" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        </Box>
        <Button variant="outlined" onClick={addTodo}>
          Add Todo
        </Button>
      </div>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <ol>
          {todoArray.map((todoItem) => (
            <li key={todoItem.id} style={{ padding: '20px' }}>
              {todoItem.title}
              {todoItem.imageUrl && <img src={todoItem.imageUrl} alt="Todo" style={{ maxWidth: '150px', maxHeight: '150px', marginLeft: '10px' }} />}
              <span style={{ padding: '20px' }} onClick={() => handleUpdateClick(todoItem)}>
                <EditIcon />
              </span>
              <span style={{ padding: '10px' }} onClick={() => handleDeleteClick(todoItem.id)}>
                <DeleteIcon />
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ToDoList