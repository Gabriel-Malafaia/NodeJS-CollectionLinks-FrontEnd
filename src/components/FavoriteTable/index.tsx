import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import StyledBox from "./style";
import { useDashContext } from "../../contexts/DashContext";
import { Skeleton } from "@mui/lab";
import { IFavorite } from "../../interface/Links";

export interface IRow {
  row: ReturnType<typeof createData>;
}

const createData = (name: string, history: IFavorite[]) => {
  return {
    name,
    history,
  };
};

const Row = ({ row }: IRow) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <StyledBox>
              {row.history.length == 0 ? (
                <p>Nenhum artigo encontrado!</p>
              ) : (
                <>
                  <Typography variant="h6" gutterBottom component="div">
                    Artigos Encontrados
                  </Typography>
                  <Table size="small" aria-label="purchases">
                    <TableHead>
                      <TableRow>
                        <TableCell>Nome</TableCell>
                        <TableCell>Link</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {row.history.map((historyRow) => (
                        <TableRow key={historyRow.name}>
                          <TableCell component="th" scope="row">
                            {historyRow.name}
                          </TableCell>
                          <TableCell>
                            <a href={historyRow.url} target="_blank">
                              {" "}
                              * Acessar *{" "}
                            </a>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </>
              )}
            </StyledBox>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const CollapsibleTable = () => {
  const { user, loading } = useDashContext();
  const filterRows = user.links?.filter((elem) => elem.favorite);

  const rows = filterRows?.map((elem) => {
    const data = createData(elem.title, elem.mainTopics);
    return data;
  });

  return (
    <>
      {loading ? (
        Array.from(new Array(4)).map((elem, index) => (
          <StyledBox key={`${index} StyledBoxSkeleton`}>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
          </StyledBox>
        ))
      ) : filterRows.length == 0 ? (
        <p>
          Para ver essa seção, você precisa adicionar algum link nos favoritos!
        </p>
      ) : (
        <TableContainer sx={{ marginTop: "3rem" }} component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Nome</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.name} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default CollapsibleTable;
