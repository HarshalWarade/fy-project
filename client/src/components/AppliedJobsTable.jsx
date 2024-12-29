import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const AppliedJobsTable = () => {
  return (
    <>
      <Table>
        <TableCaption>Applied Jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 2, 3, 4].map((item, index) => (
            <TableRow key={index}>
              <TableCell>12/12/12</TableCell>
              <TableCell>Senior Software Engineer</TableCell>
              <TableCell>Google</TableCell>
              <TableCell className="text-right">Selected</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default AppliedJobsTable;
