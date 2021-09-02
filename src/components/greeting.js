import * as React from 'react';
import { greeting } from './greeting.module.css'


const Greeting = ({name}) => {
  return <h1 className={greeting}>{name}</h1>;
};
export default Greeting