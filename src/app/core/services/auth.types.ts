export enum AuthProvider {
    Email,
    CriarConta,
}


export interface User{
    cep?: string,
    contato?: number,
    estrelas: number,
    id: string,
    informacoes?: string,
    name?: string,
    numeroRua?: number,
    rua?: string,
    email: string,
    password: string;
}


export interface AuthOptions{
    isSignIn: boolean;
    provider: AuthProvider;
    user: User;
}