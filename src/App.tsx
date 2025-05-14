import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserForm } from '@/components/UserForm';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';
import { ArrowRight, Sparkles } from 'lucide-react';

const queryClient = new QueryClient();

function App() {
  // Set the document title
  useEffect(() => {
    document.title = 'React Form • Shadcn UI';
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="form-theme">
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 flex flex-col items-center justify-center p-4 sm:p-6">
          <header className="w-full max-w-lg mb-4 sm:mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles size={24} className="text-primary" />
              <h1 className="text-2xl font-semibold">Form Demo</h1>
            </div>
            <a 
              href="https://ui.shadcn.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 text-sm"
            >
              Shadcn/UI <ArrowRight size={14} />
            </a>
          </header>
          
          <main className="w-full max-w-lg">
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

export default App;