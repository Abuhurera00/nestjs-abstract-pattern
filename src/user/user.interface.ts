import { BaseInterfaceRepository } from "src/common/abstract/base.interface.repository";
import { UserDocument } from "./user.schema";


export interface UserRepositoryInterface extends BaseInterfaceRepository<UserDocument> { }