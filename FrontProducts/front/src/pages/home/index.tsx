import { Container } from "@/components/container";
import ProductCard from "@/components/productCard";
import { instance } from "@/services/axios";

import { useEffect, useState } from "react";

interface Product {
    id: string;
    name: string;
    price: number;
    Image: string;
    description: string;
    User?: {
        name: string;
        phone?: string;
    };
    onclick?: () => void;
}

export function Home() {
    const [products, setProducts] = useState<Product[]>([]);


    useEffect(() => {
        instance.get('/products')
            .then(response => {
                setProducts(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Erro ao carregar os produtos", error);
            });
    }, []);

    const sendMessage = (phone: string) => {
        console.log('Enviando mensagem para', phone);

        const message = 'Olá, gostaria de comprar o produto';
        const url = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;

        window.open(url, '_blank');


    };


    return (
        <Container>
            <h1 className="m-2 mt-4 font-bold text-2xl text-center">
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
                            name: product.User?.name || 'Desconhecido',
                            avatar: 'https://cdn.awsli.com.br/800x800/549/549871/produto/29108392/60cdfb3799.jpg',
                        }}

                        onclick={() => sendMessage(product.User?.phone || '')}

                    />
                ))}
            </main>
        </Container>
    );
}
