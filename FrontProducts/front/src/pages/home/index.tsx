import { Container } from "@/components/container";
import ProductCard from "@/components/productCard";

import { useEffect, useState } from "react";

interface Product {
    id: string;
    name: string;
    price: number;
    Image: string;
    description: string;
}

export function Home() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                console.log(data);
            })
            .catch((error) => {
                console.error("Erro ao carregar os produtos", error);
            });
    }, []);

    return (
        <Container>
            <h1 className="m-2 font-bold text-2xl text-center">
                Compre seu produto com a gente!
            </h1>

            <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        image={`http://localhost:3000/images/${product.Image}`} 
                        name={product.name}
                        price={product.price}
                        title={product.name}
                        description={product.description}
                        user={{
                            name: 'Admin',
                            avatar: 'https://avatars.githubusercontent.com/u/1024025?v=4',
                        }}
                    />
                ))}
            </main>
        </Container>
    );
}
