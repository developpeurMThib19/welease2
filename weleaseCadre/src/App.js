import Articles from "./articles";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <>
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/articles" element={<Articles />}/>
        </Routes>
      </BrowserRouter>                  
      </div>
    </>
  );

}

export default App;
