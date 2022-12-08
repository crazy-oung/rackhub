const MAJOR_ARRAY = [
  { id: 10, src: "culture", label: "교양", value: "교양학부" },
  { id: 9, src: "hrd", label: "HRD", value: "HRD학과" },
  { id: 1, src: "machine", label: "기계", value: "기계공학부" },
  { id: 5, src: "design", label: "디자인·건축", value: "디자인 건축 공학부" },
  { id: 3, src: "mecha", label: "메카", value: "메카트로닉스 공학부" },
  { id: 7, src: "industrial", label: "산경", value: "산업경영학부" },
  { id: 6, src: "energy", label: "에신화", value: "에너지신소재 화학 공학부" },
  { id: 4, src: "electrocity", label: "전전통", value: "전기전자통신 공학부" },
  { id: 2, src: "computer", label: "컴공", value: "컴퓨터공학부" },
  { id: 8, src: "fusion", label: "융합", value: "융합학과" },
];

const convertSrc2String = (src) => {
  return `/assets/image/departments/${src}.jpg`;
};

export default MAJOR_ARRAY.map(({ id, src, label, value }) => ({
  id,
  src: convertSrc2String(src),
  label,
  value,
}));
