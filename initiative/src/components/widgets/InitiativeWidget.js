import { Box } from "@mui/system";

export const InitiativeWidget = ({ entity }) => {
  return (
    <Box>
      {entity.getName()} - {entity.getInitiative()}
    </Box>
  );
};

export default InitiativeWidget;
