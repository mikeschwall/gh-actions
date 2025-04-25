import { useQuery } from '@tanstack/react-query'
import './App.css'
import TodoList from './components/TodoList'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


function App() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));
  
  const fetchTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    
    
    if (!response.ok) {
      const error = new Error("something went wrong");
      throw error;
    }

    

    return await response.json();
  }

  const {data,isError,isLoading,error} = useQuery({
    queryKey:['todos'],
    queryFn: fetchTodos
    //staleTime:5000,
    //gcTime:10000
  })

  let content;
  if (isLoading) {
    content = 'Loading...';
  }

  if (isError) {
    content = error;
  }

  if (data) {
    content = data && data.map(item => <Item key={item.id}>{item.title}</Item>)
  }
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2',  // Custom primary color
      },
      secondary: {
        main: '#dc004e',  // Custom secondary color
      },
    },
  });

  

  return (
   
    <ThemeProvider theme={theme}>
      <TodoList/>
    <Stack spacing={2}>
  {content}
</Stack>
  </ThemeProvider>
  )
}

export default App
