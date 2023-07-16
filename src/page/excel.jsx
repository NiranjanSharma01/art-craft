import React, { useState } from 'react';
import { OutTable, ExcelRenderer } from 'react-excel-renderer';

function ExcelReader() {
  const [cols, setCols] = useState([]);
  const [rows, setRows] = useState([]);

  function fileHandler(event) {
    let fileObj = event.target.files[0];
    // Just pass the fileObj as a parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        setCols(resp.cols);
        setRows(resp.rows);
      }
    });
  }

  return (
    <div>
      <input type="file" onChange={fileHandler} style={{ padding: '10px' }} />
      <OutTable data={rows} columns={cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" />
    </div>
  );
}

export default ExcelReader;
