import { useState, useContext, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { instance } from '@/services/axios';
import { LoginContext } from '@/contexts/loginContext';
import { useNavigate } from 'react-router-dom';

export function Login() {
    const { setIsLogged } = useContext(LoginContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('egomarket-token');
        if (token) {
            setIsLogged(true);
            navigate('/', { replace: true }); 
        }
    }, [setIsLogged, navigate]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await instance.post('/auth', { email, password });

            console.log('Login successful', response.data);

            // Salvar o token no localStorage
            localStorage.setItem('egomarket-token', response.data.token); // Supondo que o token esteja em response.data.token
            setIsLogged(true);

            // Navegar para a página desejada após login
            navigate('/', { replace: true });
        } catch (error: any) {
            console.error('Erro ao fazer login', error.response || error.message);
        }

        console.log('Login attempt with:', { email, password });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Card className="w-full max-w-md">
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
    );
}
