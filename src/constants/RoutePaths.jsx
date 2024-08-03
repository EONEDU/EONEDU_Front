import MainPage from "../components/pages/MainPage";
import ConsultationRequestPage from "../components/pages/ConsulationRequestPage";

const RoutePaths = {
  HOME: { path: "/", element: <MainPage />, title: "홈", isNavItem: false },
  CONSULTATION_REQUEST: { path: "/consultation-request", element: <ConsultationRequestPage />, title: "예약", isNavItem: false }
};

export default RoutePaths;