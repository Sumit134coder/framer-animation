import './App.css';
import {motion} from "framer-motion"

function App() {
  return (
    <div className="back">
     <motion.div className="animeDiv"
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    transition ={{duration:"4"}}
      />
    </div>
  );
}

export default App;
