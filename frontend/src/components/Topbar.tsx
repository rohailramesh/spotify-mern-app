import SignInOAuthButtons from "./SignInOAuthButtons";
import { Link } from "react-router-dom";
import { SignedOut, UserButton } from "@clerk/clerk-react";
import { LayoutDashboardIcon } from "lucide-react";
const Topbar = () => {
  const isAdmin = false; //change later when using store
  return (
    <div
      className="flex items-center justify-between p-4 sticky top-0 bg-zinc-900/75 
      backdrop-blur-md z-10
    "
    >
      <div className="flex gap-2 items-center">Spotify</div>
      <div className="flex items-center gap-4">
        {isAdmin && (
          <Link to={"/admin"}>
            <LayoutDashboardIcon className="size-4  mr-2" />
            Admin Dashboard
          </Link>
        )}

        <SignedOut>
          <SignInOAuthButtons />
        </SignedOut>

        <UserButton />
      </div>
    </div>
  );
};
export default Topbar;