import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./Actions";
import { 
    AppbarContainer, 
    AppbarHeader 
} from "../../styles/appbarStyles/appbarStyles";


export default function AppbarMobile({ matches }) {
    return (
        <AppbarContainer>
            <IconButton>
                <MenuIcon />
            </IconButton>
            <AppbarHeader textAlign={"center"} variant="h4">
                My Bags
            </AppbarHeader>
            <IconButton>
                <SearchIcon />
            </IconButton>
            <Actions matches={matches} />
        </AppbarContainer>
    );
}