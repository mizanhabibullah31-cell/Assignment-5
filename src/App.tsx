import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechCard from './components/TechCard';
import StackSidebar from './components/StackSidebar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import type { Technology } from './type';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (tech: Technology) => {
    const exists = stack.some((item) => item.id === tech.id);
    if (exists) {
      toast.warning(`${tech.name} is already in your stack!`, { position: 'top-right' });
      return;
    }
    setStack([...stack, tech]);
    toast.success(`Added ${tech.name} to your stack!`, { position: 'top-right' });
  };

  const handleRemoveFromStack = (id: string) => {
    const itemToRemove = stack.find((item) => item.id === id);
    setStack(stack.filter((item) => item.id !== id));
    if (itemToRemove) {
      toast.info(`Removed ${itemToRemove.name} from stack`, { position: 'top-right' });
    }
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.error('Cleared all items from your stack', { position: 'top-right' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA]">
      <ToastContainer />
      <Navbar />
      <main className="grow">
        <Hero />
        <section id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Explore the <span className="brand-gradient-text">Technologies</span>
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Pick your favorite tech per category to build your ideal stack.
            </p>
          </div>

          {loading ? (
            <Loader />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {technologies.map((tech) => (
                  <TechCard
                    key={tech.id}
                    tech={tech}
                    isSelected={stack.some((item) => item.id === tech.id)}
                    onAdd={handleAddToStack}
                  />
                ))}
              </div>
              <div className="lg:col-span-1">
                <StackSidebar
                  stack={stack}
                  onRemove={handleRemoveFromStack}
                  onRemoveAll={handleRemoveAll}
                />
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;