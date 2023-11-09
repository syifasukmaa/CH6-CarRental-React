import React from 'react';
import { Skeleton } from '@chakra-ui/react';

const LoadingSkeleton = () => {
  return (
    <div className="col-lg-4 my-2 col-md-6 col-12">
      <Skeleton
        height="150px"
        width="100%"
        startColor="#004225"
        endColor="#edf2f7"
        borderRadius="10px"
      />
      <Skeleton
        height="20px"
        width="20%"
        my="4"
        startColor="#004225"
        endColor="#edf2f7"
      />
      <Skeleton
        height="20px"
        width="40%"
        my="2"
        startColor="#004225"
        endColor="#edf2f7"
      />

      {/* deskripsi */}
      <Skeleton
        height="5px"
        width="80%"
        my="1"
        startColor="#004225"
        endColor="#edf2f7"
      />
      <Skeleton
        height="5px"
        width="90%"
        mt="1"
        startColor="#004225"
        endColor="#edf2f7"
      />
      <Skeleton
        height="5px"
        width="75%"
        mt="1"
        startColor="#004225"
        endColor="#edf2f7"
      />

      {/* icon */}
      <Skeleton
        height="20px"
        width="35%"
        mt="10"
        startColor="#004225"
        endColor="#edf2f7"
      />
      <Skeleton
        height="20px"
        width="35%"
        my="2"
        startColor="#004225"
        endColor="#edf2f7"
      />
      <Skeleton
        height="20px"
        width="35%"
        my="2"
        startColor="#004225"
        endColor="#edf2f7"
      />
      <Skeleton
        height="35px"
        width="90%"
        mt="8"
        startColor="#004225"
        endColor="#edf2f7"
      />
    </div>
  );
};

export default LoadingSkeleton;
