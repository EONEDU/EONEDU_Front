import RoutePaths from "./RoutePaths";

const getMenuItems = () => [
  {
    name: "학원 소개",
    subMenus: [
      { name: "학원 시설 안내", path: RoutePaths.FACILITY.path },
      { name: "대치점 안내", path: RoutePaths.INFO.path },
    ],
  },
  {
    name: "입학 안내",
    subMenus: [
      { name: "모집 요강", path: RoutePaths.APPLY_GUIDE.path },
      { name: "원서접수", path: RoutePaths.APPLY.path },
    ],
  },
  {
    name: "공지",
    subMenus: [
      { name: "공지사항", path: RoutePaths.NOTICE.path },
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