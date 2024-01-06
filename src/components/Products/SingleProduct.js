import { Stack } from "@mui/material";
import { ProductImage, Product, ProductActionsWrapper, ProductFavButton, ProductActionButton, ProductAddToCart } from "../../styles/productsStyles/productStyles";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";

export default function SingleProduct({ product, matches }) {
    return (
        <>
            <Product>
                <ProductImage src={product.image} />
                <ProductMeta 
                    product={product}
                    matches={matches}
                />
                <ProductActionsWrapper>
                    <Stack direction={"row"}>
                        <ProductFavButton isFav={0}>
                            <FavoriteIcon />
                        </ProductFavButton>
                        <ProductActionButton>
                            <ShareIcon color="primary" />
                        </ProductActionButton>
                        <ProductActionButton>
                            <FitScreenIcon color="primary" />
                        </ProductActionButton>
                    </Stack>
                </ProductActionsWrapper>
            </Product>
            <ProductAddToCart variant="contained">
                Add to cart
            </ProductAddToCart>
        </>
        
    )
}