'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { instance } from '@/services/axios'


export default function RegisterProduct() {


    const [image, setImage] = useState<File | null>(null);
    const [name, setName] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [price, setPrice] = useState<number>(0)
    const [amount, setAmount] = useState<number>(1)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!image) {
            alert('Por favor, selecione uma imagem!');
            return;
        }

        const formData = new FormData();
        formData.append('Image', image);
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', parseFloat(price.toString()).toFixed(2));
        formData.append('stock', parseInt(amount.toString()).toFixed(0));

        try {
            const token = localStorage.getItem('egomarket-token');
            if (!token) {
                throw new Error('Token de autorização ausente');
            }

            const response = await instance.post('/products', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Produto registrado com sucesso:', response.data);
        } catch (error: any) {
            console.error('Erro ao registrar produto:', error.response?.data || error.message);
        }
    };


    return (
        <section className='flex w-screen h-[calc(100vh-120px)] items-center justify-center'>
            <Card className="w-full max-w-md mx-auto">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Registre seu Produto</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="image">Imagem do Produto</Label>
                            <Input id="image" type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] || null)} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="name">Nome / Titulo</Label>
                            <Input
                                id="name"
                                name="name"
                                onChange={(e) => setName(e.target.value)}

                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="description">Descrição</Label>
                            <Textarea
                                id="description"
                                name="description"
                                //   value={formData.description} 
                                //   onChange={handleInputChange} 
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="price">Preço</Label>
                            <Input
                                id="price"
                                name="price"
                                type="number"
                                min="0"
                                step="0.01"
                                //   value={formData.price} 
                                //   onChange={handleInputChange} 
                                onChange={(e) => setPrice(parseFloat(e.target.value))}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="amount">Quantidade</Label>
                            <Input
                                id="amount"
                                name="amount"
                                type="number"
                                min="1"
                                //   value={formData.amount} 
                                //   onChange={handleInputChange}
                                onChange={(e) => setAmount(parseInt(e.target.value))}
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full">Register Product</Button>
                    </form>
                </CardContent>
            </Card>
        </section>
    )
}