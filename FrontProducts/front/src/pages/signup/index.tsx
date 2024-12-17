import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import { Link, useNavigate } from 'react-router-dom'
import { instance } from '@/services/axios'
export default function RegisterUser() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const navigate = useNavigate();


  //VERIFICAR DEPOIS SE O USO DO TRY CATCH ESTÁ CORRETO
  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault()
    try {
     await instance.post('/users', { email, password, name, phone })
       toast.success('Usuário cadastrado com sucesso!')

      await new Promise(resolve => setTimeout(resolve, 3000));

      navigate('/login')
    } catch (error) {
      toast.error('Erro ao cadastrar usuário')

    }

  }
  return (
    <div className="min-h-[calc(100vh-100px)] flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Crie sua conta</CardTitle>
          <CardDescription>Cadastre-se para começar as compras</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="text">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Cleiton Da silva"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="text">Phone</Label>
              <Input
                id="phone"
                type="text"
                placeholder="(XX) XXXXX-XXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
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
                placeholder="Crie uma senha forte"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">Criar</Button>
            <ToastContainer theme='colored' position='bottom-right' />
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link to="/login"> <Button variant="link">Ja tem uma conta? entre aqui</Button></Link>
        </CardFooter>
      </Card>
    </div>
  )
}