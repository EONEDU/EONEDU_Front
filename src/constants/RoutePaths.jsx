import MainPage from "../components/pages/MainPage";
import ConsultationRequestPage from "../components/pages/ConsulationRequestPage";
import AkademiaInfoPage from "../components/pages/AkademiaInfoPage";
import NoticeTablePage from "../components/pages/NoticeTablePage";
import ApplyPage from "../components/pages/ApplyPage";
import ApplyGuidePage from "../components/pages/ApplyGuidePage";
import FacilityPage from "../components/pages/FacilityPage";

const RoutePaths = {
  HOME: { path: "/", element: <MainPage />, title: "홈", isNavItem: false },
  CONSULTATION_REQUEST: { path: "/consultation-request", element: <ConsultationRequestPage />, title: "예약", isNavItem: false },
  INFO: { path: "/akademia_info", element: <AkademiaInfoPage />, title: "대치점 안내", isNavItem: false },
  NOTICE: { path: "/notice", element: <NoticeTablePage />, title: "공지사항", isNavItem: false },
  APPLY: { path: "/apply", element: <ApplyPage />, title: "원서 접수", isNavItem: false },
  APPLY_GUIDE: { path: "/apply_guide", element: <ApplyGuidePage />, title: "모집요강", isNavItem: false },
  FACILITY: { path: "/facility", element: <FacilityPage />, title: "학원 시설 안내", isNavItem: false },
};

export default RoutePaths;