import IUser from "./IUser";

export default interface IAuthContext {
    // dados do usuario logado
    user?: IUser;
    // loga o usuario
    logIn: (mail: string, password: string) => any;
    // desloga o usuario
    logOff: () => any;
}
