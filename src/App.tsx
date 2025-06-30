import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import CoursesList from './pages/CoursesList'
import CourseDetail from './pages/CourseDetail'
import LessonDetail from './pages/LessonDetail'
import Playground from './pages/Playground'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="courses" element={<CoursesList />} />
        <Route path="courses/:courseId" element={<CourseDetail />} />
        <Route path="courses/:courseId/lessons/:lessonId" element={<LessonDetail />} />
        <Route path="playground" element={<Playground />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App 