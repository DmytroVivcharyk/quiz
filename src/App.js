import { Routes, Route } from 'react-router-dom';
import RequireAuth from '@auth-kit/react-router/RequireAuth'

import QuizPage from './pages/QuizPage/QuizPage';
import Wraper from './components/wraper/Wraper';
import QuizesPage from './pages/Quizes/QuizesPage';
import CreateQuizPage from './pages/CreateQuizPage/CreateQuizPage';
import AuthPage from './pages/AuthPage/AuthPage';


const App = () => {

  return (
    <Wraper>
      <Routes>
        <Route path='/' element={<QuizesPage/>} />
        <Route path='/auth' element={<AuthPage/>} />
        <Route path='/quiz/:id' element={<QuizPage/>} />
        <Route path='/create-quiz' element={
          <RequireAuth fallbackPath='/auth'>
            <CreateQuizPage/>
          </RequireAuth>
        } />
        <Route path='*' element={<h1>Page not found</h1>} />
      </Routes>
    </Wraper>
  );
}

export default App;
