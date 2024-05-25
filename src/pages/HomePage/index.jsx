import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { RoomDetail } from '../components/OrderDetail';
import { RoomList } from '../components/RoomsList';
import './style.css';

export const HomePage = () => {
  return (
    <>
      <Header />
      <RoomList />
      <RoomDetail />
      <Footer />
    </>
  );
};
