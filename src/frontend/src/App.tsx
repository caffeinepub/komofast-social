import { Toaster } from "@/components/ui/sonner";
import { Suspense, lazy } from "react";
import BottomNav from "./components/layout/BottomNav";
import FAB from "./components/layout/FAB";
import TopBar from "./components/layout/TopBar";
import CameraReelModal from "./components/modals/CameraReelModal";
import CreatePostModal from "./components/modals/CreatePostModal";
import CreateStoryModal from "./components/modals/CreateStoryModal";
import { AppProvider, useApp } from "./context/AppContext";
import Login from "./pages/Login";

const Home = lazy(() => import("./pages/Home"));
const Explore = lazy(() => import("./pages/Explore"));
const Notifications = lazy(() => import("./pages/Notifications"));
const Profile = lazy(() => import("./pages/Profile"));
const Marketplace = lazy(() => import("./pages/Marketplace"));
const Cart = lazy(() => import("./pages/Cart"));
const Admin = lazy(() => import("./pages/Admin"));
const Reels = lazy(() => import("./pages/Reels"));
const Academy = lazy(() => import("./pages/Academy"));
const WalletPage = lazy(() => import("./pages/Wallet"));
const CreatorDashboard = lazy(() => import("./pages/CreatorDashboard"));
const EarningAccount = lazy(() => import("./pages/EarningAccount"));

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-10 h-10 rounded-full border-2 border-transparent border-t-komo-blue animate-spin" />
    </div>
  );
}

function Router() {
  const { currentPath, isLoggedIn, cameraReelOpen, setCameraReelOpen } =
    useApp();

  if (!isLoggedIn) {
    return <Login />;
  }

  const renderPage = () => {
    if (currentPath === "/" || currentPath === "") return <Home />;
    if (currentPath === "/explore") return <Explore />;
    if (currentPath === "/notifications") return <Notifications />;
    if (currentPath.startsWith("/profile")) return <Profile />;
    if (currentPath === "/marketplace") return <Marketplace />;
    if (currentPath === "/cart") return <Cart />;
    if (currentPath === "/admin") return <Admin />;
    if (currentPath === "/reels") return <Reels />;
    if (currentPath === "/academy") return <Academy />;
    if (currentPath === "/wallet") return <WalletPage />;
    if (currentPath === "/creator") return <CreatorDashboard />;
    if (currentPath === "/earning-account") return <EarningAccount />;
    return <Home />;
  };

  return (
    <div
      className="min-h-screen bg-[#0B0F14]"
      style={{
        background: "linear-gradient(180deg, #0B0F14 0%, #11161D 100%)",
      }}
    >
      <TopBar />
      <main className="pt-16 pb-20">
        <Suspense fallback={<PageLoader />}>{renderPage()}</Suspense>
      </main>
      <BottomNav />
      <FAB />
      <CreatePostModal />
      <CreateStoryModal />
      <CameraReelModal
        open={cameraReelOpen}
        onClose={() => setCameraReelOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Router />
      <Toaster position="top-center" theme="dark" />
    </AppProvider>
  );
}
