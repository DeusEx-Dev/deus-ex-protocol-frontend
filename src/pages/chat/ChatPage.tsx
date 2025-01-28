import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { SidebarProvider } from "@/context/SidebarContext";

export function ChatPage() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex">
          <Sidebar />
          <main className="flex-1 bg-neutral-950">
            {/* Chat content will go here */}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
