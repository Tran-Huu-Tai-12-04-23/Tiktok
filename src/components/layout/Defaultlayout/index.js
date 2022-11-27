import { Header, Sidebar } from "~/components";

function Defaultlayout({ children }) {
  return (
    <div>
      <Header />
      <div className='container'>
        <Sidebar />
        {children}
      </div>
    </div>
  );
}

export default Defaultlayout;
