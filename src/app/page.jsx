// import Image from 'next/image';
import FAQ from '@/components/dashboard/organisms/FAQ';
import Footer from '@/components/dashboard/organisms/Footer';
import Header from '@/components/dashboard/organisms/Header';
import Service from '@/components/dashboard/organisms/Service';
import Testimonial from '@/components/dashboard/organisms/Testimonial';
import WhyUs from '@/components/dashboard/organisms/WhyUs';

export default function Dashboard() {
  return (
    <>
      <Header />
      <Service />
      <WhyUs />
      <Testimonial />
      <FAQ />
      <Footer />
    </>
  );
}
