import { useLocation } from 'react-router-dom'
import { Header } from './common/header';
import { MainContent } from './common/mainContent';
import { Footer } from './common/footer';
import { Slide } from "./common/slide";

export const LayoutWrap = ({ children }: any) => {
  const location = useLocation();


  return (
    <div className='flex flex-col h-screen'>
      <Header />
      {location.pathname === "/home" ? (
        <Slide />
      ) : null }
      <MainContent children={children} />
      <Footer />
    </div>
  );
};
