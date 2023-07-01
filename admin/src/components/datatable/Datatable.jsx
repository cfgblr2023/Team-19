import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { useLocation } from "react-router-dom";


// 1. Using use-Fetch for fetching data
// 2. For update , delete  I am using axios

const Datatable = ({columns}) => {
  // const [data, setData] = useState(userRows);
  const location=useLocation();

  // path of the url
  const path=location.pathname.split("/")[1];
  const [list,setList]=useState();
  const {data,loading,error}=useFetch(`/${path}`)
  // console.log(data)

  useEffect(()=>{
    setList(data)
  },[data])

  const handleDelete = async (id) => {
    try{
       await axios.delete(`/${path}/${id}`)
       setList(list.filter((item) => item._id !== id));
    }
    catch(err){

    }
     
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New {path}
        <Link to={`/${path}/new`} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default Datatable;
