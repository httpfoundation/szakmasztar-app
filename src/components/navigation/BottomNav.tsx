import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { menuItems } from "./NavigationConfig";

type BottomNavProps = {
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
};

export default function BottomNav({ value, onChange }: BottomNavProps) {
  return (
    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation value={value} onChange={onChange} showLabels>
        {menuItems.map((item, index) => (
          <BottomNavigationAction key={index} label={item.text} icon={item.icon} />
        ))}
      </BottomNavigation>
    </Paper>
  );
}
