import React, { useEffect, useState} from "react";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box } from "@mui/material";
import Button from '@mui/material/Button';
import './CompanyList.css'

function CompanyList() {
  const [data, setdata] = useState([]);
  const [show, setShow] = useState(false);
  const handlesClose = () => setShow(false);
  const handlesShow = () => setShow(true);
  /*---------------------props------------------------*/
  const [id,setId] = useState()
  /*---------------------props------------------------*/

  const columns = [
    { field: 'id', headerName: 'ID', width: 50, headerClassName: 'super-app-theme--header',
    headerAlign: 'center', },
    { field: 'contactname', headerName: 'Name', width: 120,  headerClassName: 'super-app-theme--header',
    headerAlign: 'center', },
    { field: 'email', headerName: 'Email', width: 150,  headerClassName: 'super-app-theme--header',
    headerAlign: 'center', },
    { field: 'company', headerName: 'Company Name', width: 150,  headerClassName: 'super-app-theme--header',
    headerAlign: 'center', },
    { field: 'address', headerName: 'Address', width: 150,  headerClassName: 'super-app-theme--header',
    headerAlign: 'center', },
    { field: 'open', headerName: 'Open Time', width: 90,  headerClassName: 'super-app-theme--header',
    headerAlign: 'center', },
    { field: 'close', headerName: 'Close Time', width: 90,  headerClassName: 'super-app-theme--header',
    headerAlign: 'center', },
    {
      field: 'Action',
      width: 180,
      sortable: false,
      headerAlign: 'center',
      renderCell: (params) => {
        const onClickDelete = async () =>  {
          fetch(`https://tomcat1.shiftescape.com/api/users/delete/${params.row.id}`, {
            method: "POST"
          }).then((response) => {
            setdata(data.filter((row) => row.id !== params.row.id));
            console.log(response);
          })
        };
  
        return (
          <>
            <Button
               onClick={onClickDelete}
                  variant="contained"
                  size="small"
                  style={{ marginLeft: 16 }}
                >
                  Delete
                </Button>
                <Button
                  variant="contained" 
                  color="error"
                  size="small"
                  style={{ marginLeft: 16 }}
                >
                  Edit
                </Button>
          </>
        );
      },
    },
  ]

  function getList() {
    fetch("https://tomcat1.shiftescape.com/api/users").then((response) => {
      response.json().then(((result) => {
        setdata(result);
      }))
    }).catch(e => {
      console.log(e);
    });
  }

  

  useEffect(() => {
    getList();
  }, [id])

  
  return (
    <div className="CompanyList">
    <h2>Sitter Details</h2>
    
      <DataGrid
        rows={data}
        // disableColumnFilter
        // disableColumnSelector
        // disableDensitySelector
        columns={columns}
        initialState={{
          pagination: {
            pageSize: 10,
          },
        }}
        rowsPerPageOptions={[10, 25, 100]}
        checkboxSelection
        // preProcessEditCellProps
        components={{ Toolbar: GridToolbar }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        loading={data.length === 0}
      />

  </div>
  )
}

export default CompanyList