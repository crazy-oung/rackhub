export const timetableLectureList = [
  {
    name: "컴퓨터네트워크",
    classification: "학부필",
    grades: "3",
    classNumber: "03",
    regular_number: "50",
    department: "컴퓨터공학부",
    target: "컴부3",
    professor: "무하마드",
    is_english: null,
    design_score: null,
    is_elearning: null,
    class_time: "[10, 11, 12, 13, 200, 201]",
    created_at: "2021-07-22T06:53:56.000+00:00",
    updated_at: "2021-07-22T06:53:56.000+00:00",
    rating: "A+",
    memo: null,
    is_reviewed: false,
  },
  {
    name: "데이터베이스시스템",
    classification: "학부선",
    grades: "3",
    classNumber: "02",
    regular_number: "50",
    department: "컴퓨터공학부",
    target: "컴부3",
    professor: "무하마드",
    is_english: null,
    design_score: null,
    is_elearning: null,
    class_time: "[100, 101, 102, 103, 404, 405, 406, 407]",
    created_at: "2021-07-22T06:53:56.000+00:00",
    updated_at: "2021-07-22T06:53:56.000+00:00",
    rating: "A+",
    memo: null,
    is_reviewed: false,
  },
  {
    name: "영어읽기와쓰기",
    classification: "교필",
    grades: "3",
    classNumber: "14",
    regular_number: "50",
    department: "교양학부",
    target: "전체",
    professor: "유소연",
    is_english: null,
    design_score: null,
    is_elearning: null,
    class_time: "[4, 5, 6, 7, 202, 203]",
    created_at: "2021-07-22T06:53:56.000+00:00",
    updated_at: "2021-07-22T06:53:56.000+00:00",
    rating: "A+",
    memo: null,
    is_reviewed: false,
  },
  {
    name: "교수설계및교육방법",
    classification: "HRD선택",
    grades: "2",
    classNumber: "07",
    regular_number: "50",
    department: "HRD학과",
    target: "컴부3",
    professor: "신임교원 배정예정",
    is_english: null,
    design_score: null,
    is_elearning: null,
    class_time: "[104, 105, 106, 107]",
    created_at: "2021-07-22T06:53:56.000+00:00",
    updated_at: "2021-07-31T04:33:33.000+00:00",
    rating: "B+",
    memo: null,
    is_reviewed: false,
  },
  {
    name: "수학적사고",
    classification: "MSC필수",
    grades: "4",
    classNumber: "01",
    regular_number: "50",
    department: "교양학부",
    target: "전체",
    professor: "한성휴",
    is_english: null,
    design_score: null,
    is_elearning: null,
    class_time: "[110, 111, 112, 113, 310, 311, 312, 313]",
    created_at: "2021-07-22T06:53:56.000+00:00",
    updated_at: "2021-07-22T06:53:56.000+00:00",
    rating: "C",
    memo: null,
    is_reviewed: false,
  },
  {
    name: "일본어1",
    classification: "교선",
    grades: "3",
    classNumber: "04",
    regular_number: "50",
    department: "교양학부",
    target: "전체",
    professor: "김미옥",
    is_english: null,
    design_score: null,
    is_elearning: null,
    class_time: "[210, 211, 212, 213, 214, 215]",
    created_at: "2021-07-22T06:53:56.000+00:00",
    updated_at: "2021-07-22T06:53:56.000+00:00",
    rating: "",
    memo: null,
    is_reviewed: false,
  },
  {
    name: "기업내교육론",
    classification: "HRD선택",
    grades: "2",
    classNumber: "01",
    regular_number: "50",
    department: "HRD학과",
    target: "전체",
    professor: "정일찬",
    is_english: null,
    design_score: null,
    is_elearning: null,
    class_time: "[0, 1, 2, 3]",
    created_at: "2021-07-22T06:53:56.000+00:00",
    updated_at: "2021-07-22T06:53:56.000+00:00",
    rating: "",
    memo: null,
    is_reviewed: false,
  },
  {
    name: "직업능력개발훈련평가",
    classification: "HRD필수",
    grades: "2",
    classNumber: "07",
    regular_number: "50",
    department: "HRD학과",
    target: "메카3,메카4",
    professor: "최현숙",
    is_english: null,
    design_score: null,
    is_elearning: null,
    class_time: "[410, 411, 412, 413]",
    created_at: "2021-07-22T06:53:56.000+00:00",
    updated_at: "2021-07-22T06:53:56.000+00:00",
    rating: "",
    memo: null,
    is_reviewed: true,
  },
];

// 월	화	수	목	금
// 오전 0시
// 오전 1시
// 오전 2시
// 오전 3시
// 오전 4시
// 오전 5시
// 오전 6시
// 오전 7시
// 오전 8시
// 오전 9시
// 오전 10시
// 오전 11시
// 오후 12시
// 오후 1시
// 오후 2시
// 오후 3시
// 오후 4시
// 오후 5시
// 오후 6시
// 오후 7시
// 오후 8시
// 오후 9시
// 오후 10시
// 오후 11시

export const currentLectureList = [
  {
    lecture: "객체지향개발론및실습",
    professer: "김상진",
    grade: 3,
    date: "2022/05/05",
  },
  {
    lecture: "마이크로프로세서및실습",
    professer: "장경식",
    grade: 3,
    date: "2022/02/04",
  },
  {
    lecture: "이산수학",
    professer: "이용훈",
    grade: 3,
    date: "2022/03/19",
  },
  {
    lecture: "기초전기전자및실습",
    professer: "김윤상",
    grade: 3,
    date: "2022/09/27",
  },
  {
    lecture: "모바일프로그래밍(캡스톤디자인)",
    professer: "문일영",
    grade: 3,
    date: "2022/07/01",
  },
  {
    lecture: "공학설계(캡스톤디자인)",
    professer: "이강환",
    grade: 1,
    date: "2022/07/01",
  },
  {
    lecture: "학습자이해와상담",
    professer: "",
    grade: 2,
    date: "2022/07/01",
  },
];

export const lectureList = [
  {
    lecture: "Marketing",
    professer: "Giacinta Burrett",
    grade: 0.95,
    date: "2022/05/05",
  },
  {
    lecture: "Marketing",
    professer: "Griselda Blackler",
    grade: 4.4,
    date: "2022/02/04",
  },
  {
    lecture: "Legal",
    professer: "Joete Ewin",
    grade: 3.57,
    date: "2022/03/19",
  },
  {
    lecture: "Sales",
    professer: "Eran Oxford",
    grade: 1.46,
    date: "2022/09/27",
  },
  {
    lecture: "Research and Development",
    professer: "Regina Yule",
    grade: 2.3,
    date: "2022/07/01",
  },
  {
    lecture: "Business Development",
    professer: "Biddie Grigson",
    grade: 3.81,
    date: "2022/09/05",
  },
  {
    lecture: "Legal",
    professer: "Cointon Glanz",
    grade: 2.52,
    date: "2022/04/05",
  },
  {
    lecture: "Engineering",
    professer: "Osmond Ducker",
    grade: 0.93,
    date: "2022/09/30",
  },
  {
    lecture: "Product Management",
    professer: "Arri Vanyashin",
    grade: 2.79,
    date: "2022/09/08",
  },
  {
    lecture: "Product Management",
    professer: "Perkin Deare",
    grade: 3.35,
    date: "2022/01/14",
  },
];

export const todoList = [
  {
    todo: "UrnaUtTellus.xls",
    lecture: "Support",
    due: "2023/10/08",
  },
  {
    todo: "Semper.jpeg",
    lecture: "Marketing",
    due: "2023/01/10",
  },
  {
    todo: "Donec.avi",
    lecture: "Human Resources",
    due: "2023/03/24",
  },
  {
    todo: "VelEst.ppt",
    lecture: "Training",
    due: "2023/11/26",
  },
  {
    todo: "Magnis.tiff",
    lecture: "Marketing",
    due: "2023/06/07",
  },
  {
    todo: "Volutpat.avi",
    lecture: "Sales",
    due: "2023/03/16",
  },
  {
    todo: "Vitae.avi",
    lecture: "Sales",
    due: "2023/10/27",
  },
  {
    todo: "SedTristique.mov",
    lecture: "Business Development",
    due: "2023/10/20",
  },
  {
    todo: "InSagittis.xls",
    lecture: "Human Resources",
    due: "2023/11/21",
  },
  {
    todo: "MetusVitaeIpsum.xls",
    lecture: "Engineering",
    due: "2023/03/13",
  },
];