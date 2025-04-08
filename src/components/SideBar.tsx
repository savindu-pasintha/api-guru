import { StyledDrawer } from "./StyledComponents";

const SideBar = ({ children = <></>, open = false, onClose = () => {} }) => {
  return (
    <StyledDrawer open={open} onClose={onClose} anchor="right">
      {children}
    </StyledDrawer>
  );
};

export default SideBar;
