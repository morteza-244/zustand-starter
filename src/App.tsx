import Navbar from "@/components/Navbar";
import ProductLists from "@/components/products/ProductLists";

const App = () => {
  return (
    <main className="h-screen container bg-slate-100">
      <Navbar />
      <ProductLists />
    </main>
  );
};

export default App;
