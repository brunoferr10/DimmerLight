import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Splash from "./pages/Splash/Splash";
import Login from "./pages/Login/Login";
import HomePortal from "./pages/Home/Home";
import EventosDaniel from "./pages/EventosDaniel/EventosDaniel";

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen w-full bg-[#060b15] text-white overflow-hidden">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>

          <Route path="/" element={route(<Splash />)} />
          <Route path="/login" element={route(<Login />)} />
          <Route path="/portal" element={route(<HomePortal />)} />
          <Route path="/eventosDaniel" element={route(<EventosDaniel />)} />

        </Routes>
      </AnimatePresence>
    </div>
  );
}

/* 🟦 NOVA TRANSIÇÃO — slide suave sem fade branco */
function route(page: JSX.Element) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -25 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-h-screen w-full"
    >
      {page}
    </motion.div>
  );
}
