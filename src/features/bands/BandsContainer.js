import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import BandInput from './BandInput';
import { bandAdded } from './bandsSlice';

function BandsContainer() {
  const bands = useSelector((state) => state.bands.entities);
  const dispatch = useDispatch();
  function handleBandSubmit(name) {
    dispatch(bandAdded(name));
  }
  console.log(bands);
  const bandsList = bands.map((band, index) => <li key={index}>{band}</li>)
  return (
    <div>
      <BandInput onBandSubmit={handleBandSubmit} />
      <ul>{bandsList}</ul>
  </div>
);
}

export default BandsContainer;
