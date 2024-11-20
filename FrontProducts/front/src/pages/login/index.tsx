import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
       //REQUISIÇÃO POST 
        console.log('Login attempt with:', { email, password })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Card className="w-full max-w-md ">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Bem Vindo de Volta!</CardTitle>
                    <CardDescription>Por favor, entre com sua conta para cadastrar produtos</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Andressa@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Senha</Label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                placeholder="********"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full">Entrar</Button>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="link">Esqueceu a senha?</Button>
                    <Button variant="link">Criar uma conta</Button>
                </CardFooter>
            </Card>
        </div>
    )
}