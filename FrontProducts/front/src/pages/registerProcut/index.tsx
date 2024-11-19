'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function RegisterProduct() {


    const [image, setImage] = useState<File | null>(null); 
    const [name, setName] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [price, setPrice] = useState<number>(0)
    const [amount, setAmount] = useState<number>(1)



    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(registerProduct)
    }

    const registerProduct = {
        image,
        name,
        description,
        price,
        amount
    }



    return (
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
    )
}