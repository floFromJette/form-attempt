import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserForm } from '@/components/UserForm';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';
import { Sparkles } from 'lucide-react';

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    document.title = 'React Form • Shadcn UI';
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="form-theme">
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex flex-col items-center justify-center p-4 sm:p-6">
          <header className="w-full max-w-4xl mb-4 sm:mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-primary/10">
                <Sparkles size={24} className="text-primary" />
              </div>
              <h1 className="text-2xl font-semibold bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
                Form Demo
              </h1>
            </div>
          </header>
          
          <main className="w-full max-w-4xl">
            <UserForm />
          </main>
          
          <footer className="mt-8 text-sm text-muted-foreground text-center">
            <p>Built with React, TypeScript & Shadcn/UI</p>
          </footer>
        </div>
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}