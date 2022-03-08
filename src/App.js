import './App.css';

import PasswordOptions from "./components/PasswordOptions"
import GenerateButton from "./components/GenerateButton"
import Password from "./components/Password"

function App() {
  return (
    <div className="bg-purple-500 flex flex-col items-center justify-center h-screen">
      <div className="mb-10">
        <PasswordOptions />
      </div>

      <div className="mb-10">
        <GenerateButton />
      </div>

      <div>
        <Password />
      </div>
    </div>
  );
}

export default App;
