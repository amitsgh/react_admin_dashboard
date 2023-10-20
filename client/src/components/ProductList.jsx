import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Collapse,
    Rating,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { useState } from 'react';

const Product = ({ product }) => {
    const theme = useTheme();
    const [isExpanded, setIsExpanded] = useState(false);

    const { _id, name, description, price, rating, category, supply, stat } =
        product;

    const handleToggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <Card
            sx={{
                backgroundImage: 'none',
                backgroundColor: theme.palette.background.alt,
                borderRadius: '0.55rem',
            }}
        >
            <CardContent>
                <Typography
                    sx={{ fontSize: 14 }}
                    color={theme.palette.secondary[700]}
                    gutterBottom
                >
                    {category}
                </Typography>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography
                    sx={{ mb: '1.5rem' }}
                    color={theme.palette.secondary[400]}
                >
                    $ {Number(price).toFixed(2)}
                </Typography>
                <Rating value={rating} readOnly />

                <Typography variant="body2">{description}</Typography>
            </CardContent>
            <CardActions>
                <Button
                    variant="primary"
                    size="small"
                    onClick={handleToggleExpansion}
                >
                    See More
                </Button>
            </CardActions>
            <Collapse
                in={isExpanded}
                timeout="auto"
                unmountOnExit
                sx={{
                    color: theme.palette.neutral[300],
                }}
            >
                <CardContent>
                    <Typography>id: {_id}</Typography>
                    <Typography>Supply Left: {supply}</Typography>
                    <Typography>
                        Yearly Sales This Year: {stat.yearlySalesTotal}
                    </Typography>
                    <Typography>
                        Yearly Units Sold This Year: {stat.yearlyTotalSoldUnits}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
};

const ProductList = ({ products }) => {
    const isNotMobileView = useMediaQuery('(min-width: 1000px)');

    return (
        <Box
            mt="20px"
            display="grid"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            justifyContent="space-between"
            rowGap="20px"
            columnGap="1.33%"
            sx={{
                '& > div': {
                    gridColumn: isNotMobileView ? undefined : 'span 4',
                },
            }}
        >
            {products.map((product) => (
                <Product key={product._id} product={product} />
            ))}
        </Box>
    );
};

export default ProductList;
