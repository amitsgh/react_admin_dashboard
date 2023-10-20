import { Box, CircularProgress } from '@mui/material';
import Header from 'components/Header';
import { useGetProducts } from 'hooks';
import ProductList from '../../components/ProductList';

const Products = () => {
    const { data: products, isLoading } = useGetProducts();

    return (
        <Box m="1.5rem 2.5rem">
            <Header title="PRODUCTS" subtitle="See your list of products." />
            {isLoading ? (
                <CircularProgress
                    size={40}
                    thickness={6}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                />
            ) : (
                <ProductList products={products} />
            )}
        </Box>
    );
};

export default Products;
