import React, { useState } from "react";
import "./header.scss";
import { MdSearchOff, MdSearch } from "react-icons/md";
import { HiMenuAlt1 } from "react-icons/hi";
import { FcSearch } from "react-icons/fc";
export const Header = () => {
  const [search, setSearch] = useState(false);
  return (
    <div className="container">
      <HiMenuAlt1 onClick={() => setSearch(!search)} color='#fff'/>
      {search ? (
        <span className="span-input">
          <input autoFocus type="text" placeholder="Digita para pesquisar" />
          <MdSearchOff onClick={() => setSearch(!search)} />
        </span>
      ) : (
        <span>
          {/* <h3>Lista de Animes</h3> */}
          <FcSearch onClick={() => setSearch(!search)} color="#fff" />
        </span>
      )}
    </div>
  );
};
