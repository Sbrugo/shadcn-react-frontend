import { AppSidebar } from "@/components/AppSideBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import UsersTable from "@/components/UsersTable";
import { UsersProvider } from "@/context/user-context";

const Home = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center p-2 gap-2 overflow-y-scroll">
            <UsersProvider>
              <UsersTable />
            </UsersProvider>
          </div>
        </div>
      </main>
    </SidebarProvider>
  );
};

export default Home;
