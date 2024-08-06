import MainPage from "../components/pages/MainPage";
import ConsultationRequestPage from "../components/pages/ConsulationRequestPage";
import LocationPage from "../components/pages/LocationPage";

const RoutePaths = {
  HOME: { path: "/", element: <MainPage />, title: "홈", isNavItem: false },
  CONSULTATION_REQUEST: { path: "/consultation-request", element: <ConsultationRequestPage />, title: "예약", isNavItem: false },
  LOCATION: { path: "/location", element: <LocationPage />, title: "오시는길", isNavItem: false },
};

export default RoutePaths;