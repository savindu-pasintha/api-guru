import { Drawer, Button, Grid, styled, GridBaseProps , GridProps } from "@mui/material";

export const StyledDrawer = styled(Drawer)(({}) => ({
  "& .MuiDrawer-paper": {
    backgroundColor: "#1e1e1e",
    width: 400,
  },
}));

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  textTransform: "none",
  fontWeight: 500,
  padding: theme.spacing(1.2, 3),
  borderRadius: 8,
  boxShadow: "none",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    boxShadow: "none",
  },
}));

export const StyledButton = (props: any) => {
  return (
    <CustomButton variant="contained" {...props}>
      {props?.title}
    </CustomButton>
  );
};

export const StyledGrid = styled((props: GridBaseProps & GridProps) => <Grid {...props} />)(
  ({}) => ({})
);
