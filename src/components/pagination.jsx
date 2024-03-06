"use client";

import { useState } from "react";
import { Pagination, PaginationItem } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ArrowUpward } from "@mui/icons-material";
import Link from "next/link";

const PaginationPage = ({ data, itemsPage, onPageChange }) => {
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
    onPageChange(value);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex justify-around items-center">
      <Pagination
        className="my-10"
        count={Math.ceil(data.length / itemsPage)}
        page={page}
        onChange={handleChange}
        renderItem={(item) => (
          <PaginationItem
            component="div"
            className="text-xl"
            {...item}
            icon={
              (item.type === "previous" && <ArrowBackIcon />) ||
              (item.type === "next" && <ArrowForwardIcon />)
            }
          />
        )}
      />
      <Link className="text-6xl scale-150" href="#header">
        <ArrowUpward />
      </Link>
    </div>
  );
};

export default PaginationPage;
