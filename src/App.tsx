import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Splash from "./pages/Splash/Splash";
import Login from "./pages/Login/Login";
import HomePortal from "./pages/Home/Home";
import EventosDaniel from "./pages/EventosDaniel/EventosDaniel";

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen w-full bg-[#060b15] text-white overflow-hidden"> {/* 🔥 FORÇA FUNDO SEM FLASH */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={slide(<Splash />)} />
          <Route path="/login" element={slide(<Login />)} />
          <Route path="/portal" element={slide(<HomePortal />)} />
          <Route path="/eventosDaniel" element={slide(<EventosDaniel />)} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

/* 🔥 SLIDE SMOOTH - 0 branco, sem fade */
function slide(page: JSX.Element) {
  return (
    <motion.div
      initial={{ y: 50 }}   
      animate={{ y: 0 }}
      exit={{ y: -40 }}     
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-h-screen w-full"
    >
      {page}
    </motion.div>
  );
}
