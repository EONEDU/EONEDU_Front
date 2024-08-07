import RoutePaths from "./RoutePaths";

const getMenuItems = () => [
  {
    name: "학원 소개",
    subMenus: [
      { name: "학원 시스템", path: "/academy-system" },
      { name: "시설 안내", path: "/facility-guide" },
      { name: "제공 컨텐츠", path: "/provided-content" },
      { name: "입시 실적", path: "/entrance-results" },
      { name: "오시는 길", path: RoutePaths.LOCATION.path },
    ],
  },
  {
    name: "입학 안내",
    subMenus: [
      { name: "모집 요강", path: "/admission-requirements" },
      { name: "장학 안내", path: "/scholarship-info" },
      { name: "원서접수", path: "/application" },
      { name: "대기 확인", path: "/waiting-list" },
    ],
  },
  {
    name: "재원생 서비스",
    subMenus: [{ name: "재원생 서비스", path: "/current-student-services" }],
  },
  {
    name: "공지",
    subMenus: [
      { name: "공지사항", path: "/notices" },
    ],
  },
  {
    name: "상담",
    subMenus: [
      { name: "상담신청", path: RoutePaths.CONSULTATION_REQUEST.path },
    ],
  },
];

export default getMenuItems;