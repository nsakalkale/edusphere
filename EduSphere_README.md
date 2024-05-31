
# EduSphere

Edusphere is a virtual teaching platform that leverages VR and AR technologies to create an engaging and interactive learning environment. The project is designed to simulate a classroom experience where students can interact with virtual teachers and educational content in a highly immersive manner. The integration of Unreal Engine with ReactJS, Flask, and other web technologies allows for the creation of dynamic and responsive educational experiences.


## Features

- Immersive Learning Environment:

Utilizes VR and AR to create a realistic and engaging virtual classroom.
Supports interactive 3D models and simulations to enhance understanding of complex concepts.
- Virtual Teacher:

A virtual teacher avatar that can interact with students, provide instructions, and guide them through lessons.
Uses natural language processing to understand and respond to student queries.
- Multi-Platform Support:

Accessible via VR headsets for a fully immersive experience.
Supports desktop and mobile access for AR experiences.
- Interactive Content:

Includes interactive quizzes, exercises, and assignments.
Real-time feedback and performance tracking.
- User Management:

User authentication and profile management.
Separate interfaces for students and teachers.

## Tech Stack

**Client:** React, HTML, CSS3, JavaScript

**Server:** Python, Flask


## Usage

```javascript
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Err from "./components/Err";
import Main from "./components/Main";
import About from "./components/About";
import OurTeam from "./components/OurTeam";
import Services from "./components/Services";
import LangAI from "./components/LangAI";
import ScrollToTop from "./ScrollToTop";
import SignUp from "./components/SignUp";
function App() {
  document.addEventListener("keydown", function (event) {
    if (event.ctrlKey) {
      event.preventDefault();
    }
    if (event.keyCode === 123) {
      event.preventDefault();
    }
  });
  document.addEventListener("contextmenu", (event) => event.preventDefault());
  return (
    <div className="bg-light ">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="ourteam" element={<OurTeam />} />
          <Route path="services" element={<Services />} />
          <Route path="langai" element={<LangAI />} />

          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<Err />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
```
### Virtual Classroom
- Join a Class: Students can join virtual classes using VR headsets or through AR-enabled devices.
- Interactive Lessons: Engage with interactive 3D models and simulations.
- Virtual Teacher Interaction: Ask questions and receive real-time responses from the virtual teacher.
### Teacher Interface
- Manage Classes: Create and manage virtual classes and lesson plans.
- Track Student Performance: Monitor student progress and provide feedback.
- Interactive Content Creation: Develop interactive quizzes and assignments.

## License

[MIT](https://choosealicense.com/licenses/mit/)

