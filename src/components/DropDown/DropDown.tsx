import React, { useState } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { Link } from 'react-router-dom';

import "./styles.scss";

export const MenuItems = [
  {
    title: 'Crime',
    path: '/category/Crime',
    cName: 'dropdown-link'
  },
  {
    title: 'Fantasy',
    path: '/category/Fantasy',
    cName: 'dropdown-link'
  },
  {
    title: 'Mystery',
    path: '/category/Mystery',
    cName: 'dropdown-link'
  },
  {
    title: 'Classics',
    path: '/category/Classics',
    cName: 'dropdown-link'

  }
];

interface Props {
  title?: string;
}

const DropDown: React.FC<Props> = ({ title }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DropDown;
