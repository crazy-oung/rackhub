import React from "react";
import { motion } from "framer-motion";

import { MemoBoard, MemoSection } from "./styles/MemoPage.style";

import MemoList from "../../components/MemoPage/MemoList";
import MemoDetail from "../../components/MemoPage/MemoDetail";

const MemoPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MemoBoard>
        <MemoSection>
          <MemoList />
          <MemoDetail />
        </MemoSection>
      </MemoBoard>
    </motion.div>
  );
};

export default MemoPage;
