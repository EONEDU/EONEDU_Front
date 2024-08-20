import RoutePaths from "./RoutePaths";

const getMenuItems = () => [
  {
    name: "학원 소개",
    subMenus: [
      { name: "학원 시스템", path: "/academy-system" },
      { name: "제공 컨텐츠", path: "/provided-content" },
      { name: "오시는 길", path: RoutePaths.LOCATION.path },
    ],
  },
  {
    name: "입학 안내",
    subMenus: [
      { name: "모집 요강", path: RoutePaths.APPLY_GUIDE.path },
      { name: "원서접수", path: RoutePaths.APPLY.path },
      { name: "대기 확인", path: "/waiting-list" },
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