import { Routes, Route } from 'react-router-dom';

import QuizPage from './pages/QuizPage/QuizPage';
import Wraper from './components/wraper/Wraper';
import QuizesPage from './pages/Quizes/QuizesPage';
import CreateQuizPage from './pages/CreateQuizPage/CreateQuizPage';

const App = () => {
  return (
    <Wraper>
      <Routes >
        <Route path='/' element={<QuizesPage />} />
        <Route path='/quiz/:id' element={<QuizPage />} />
        <Route path='/create-quiz' element={<CreateQuizPage />} />
      </Routes>
    </Wraper>
  );
}

export default App;
