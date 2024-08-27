import './App.css';
import Name from './component/Name/Name';
import Section from './component/Section/Section';
import Description from './component/Description/Description';

function App() {
  const userinfo = {
    firstName: "Reinier",
    lastName: "De Guzman",
    Section: "Bsit-3A",
    Description: "Carpe Diem"
  }
  return (
    <div className="App">
     <Name firstName={userinfo.firstName} lastName={userinfo.lastName}/>
     <Section Section={userinfo.Section}/>
     <Description Description={userinfo.Description}/>
    </div>
  );
}

export default App;
