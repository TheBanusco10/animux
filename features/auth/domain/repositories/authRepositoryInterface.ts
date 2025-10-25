export default interface IAuthRepository {
  getAuthorizeUri(): Promise<string>;
}
