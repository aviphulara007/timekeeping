import React from "react";
import {
  DataGridPremium,
  gridClasses,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
} from "@mui/x-data-grid-premium";
import { darken, lighten, styled } from "@mui/material/styles";
import { Box, Stack, Typography } from "@mui/material";
import { LicenseInfo } from "@mui/x-license";

const StyledBox = styled(Box)({
  overflowX: 'auto', 
  width: '100%', 
});

const StyledDataGridPremium = styled(DataGridPremium)({
  "& .MuiDataGrid-cell": {
    paddingTop: "5px !important",
    backgroundColor: "#FFFF"
  },
  "& .MuiDataGrid-columnHeader": {
    backgroundColor: "#EEEEEE",
    color: "#121212DE",
    fontWeight: "700",
    fontSize: "16px"
  }
});

const MuiDataGrid = ({ columns, rows, pagination, density, datagridName, disableColumnMenu }) => {
  LicenseInfo.setLicenseKey(
    "25f2175523aa72e9d954ec0ef5a74461Tz05NjQ3MCxFPTE3NTU3MDU1NjQwMDAsUz1wcmVtaXVtLExNPXN1YnNjcmlwdGlvbixQVj1pbml0aWFsLEtWPTI="
  );

  const apiRef = useGridApiRef();

  const initialState = useKeepGroupedColumnsHidden({
    apiRef,
    initialState: {
      rowGrouping: {
        model: ["id"],
      },
    },
  });

  const getBackgroundColor = (color, mode) =>
    mode === "dark" ? darken(color, 0.6) : lighten(color, 0.6);

  const getHoverBackgroundColor = (color, mode) =>
    mode === "dark" ? darken(color, 0.5) : lighten(color, 0.5);

  return (
    <StyledBox>
      <StyledDataGridPremium
        pagination={pagination}
        hideFooter={!pagination}
        rows={rows}
        columns={columns}
        autoHeight
        density={density || "compact"}
        getRowId={(row) => datagridName == 'DaysColumns' ? row.id : Math.random()}
        apiRef={apiRef}
        initialState={initialState}
        disableColumnMenu={disableColumnMenu}
      />
    </StyledBox>
  );
};

export default MuiDataGrid;
