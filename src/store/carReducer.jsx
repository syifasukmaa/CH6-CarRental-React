export const carReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        error: '',
        cars: action.payload,
      };
    case 'SEARCH_CAR':
      const { cars, driverType, date, pickUpTime, passenger } = action.payload;

      // console.log(carsData, driverType, date, pickUpTime, passenger);

      const filteredCars = cars.filter((car) => {
        const pickUpDate = new Date(car.availableAt).getTime();
        const rentalDate = new Date(`${date} ${pickUpTime}`).getTime();
        return (
          car.available == JSON.parse(driverType) &&
          rentalDate >= pickUpDate &&
          car.capacity >= passenger
        );
      });

      // console.log(filteredCars);
      return {
        loading: false,
        error: '',
        cars: filteredCars,
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        error: action.payload,
        cars: [],
      };
    default:
      return state;
  }
};
