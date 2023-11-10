import Main from '@/components/cars/organisms/Main';
import Search from '@/components/cars/organisms/Search';
import Car from '@/components/cars/organisms/Car';
import Footer from '@/components/dashboard/organisms/Footer';
import { CarProvider } from '@/provider/CarProvider';
import { ChakraProvider } from '@chakra-ui/react';

function Cars() {
  return (
    <>
      <ChakraProvider>
        <CarProvider>
          <Main />
          <Search />
          <Car />
        </CarProvider>
      </ChakraProvider>
    </>
  );
}

export default Cars;
