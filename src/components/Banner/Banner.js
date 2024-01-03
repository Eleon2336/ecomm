import { 
    Typography,
    useMediaQuery, 
    useTheme 
} from "@mui/material";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from "../../styles/bannerStyles/bannerStyles";

export default function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <BannerContainer>
            <BannerImage src="/images/banner/banner.png" />
            <BannerContent>
                <Typography variant="h6">Huge Collection</Typography>
                <BannerTitle variant="h2">
                    New Bags
                </BannerTitle>
                <BannerDescription variant="subtitle">
                    The day I went to the store to buy new things was wild.
                    I always spend more than I'd like to. You know how crazy
                    the cost of living is right now. 
                </BannerDescription>
            </BannerContent>
        </BannerContainer>
    );
}