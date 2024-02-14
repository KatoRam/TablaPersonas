import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Fab, TableFooter } from "@mui/material";
import { useEffect, useState } from "react";
import personaService from "../services/PersonaService";
import { Edit } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";



export default function BasicTable() {
  const navigate = useNavigate();
  const [data, setData] = useState<any[]>();
  useEffect(() => {
    personaService.getAll().then((response) => setData(response.data ?? []));
  }, []);

  const handleOnclickEditar = (personaId: number) => {
    navigate(`/persona/${personaId}/editar`)
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Apellido</TableCell>
            <TableCell align="right">Correo</TableCell>
            <TableCell align="right">Edad</TableCell>
            <TableCell align="right">Genero</TableCell>
            <TableCell align="right">Fecha</TableCell>
            <TableCell align="right">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data !== undefined ? data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nombre}
              </TableCell>
              <TableCell align="right">{row.apellido}</TableCell>
              <TableCell align="right">{row.correo}</TableCell>
              <TableCell align="right">{row.edad}</TableCell>
              <TableCell align="right">{row.genero}</TableCell>
              <TableCell align="right">{row.fecha}</TableCell>
              <TableCell>
                <Fab onClick={() => handleOnclickEditar(row.id)}><Edit /></Fab>
              </TableCell>
            </TableRow>
          ))
            :
            <TableRow>
              <TableCell align="right">No Datos..</TableCell>
            </TableRow>
          }
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>El numero de filas es: {data?.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}