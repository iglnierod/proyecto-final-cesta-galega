import { UserPublic } from '@/app/lib/user/user.repo';
import { UserDTO } from '@/app/lib/user/user.schema';

export function toUserDTO(u: UserPublic) {
  return UserDTO.parse({
    id: u.id,
    name: u.name,
    email: u.email,
    sex: u.sex,
    birthDate: u.birthDate.toISOString(),
    province: u.province,
    createdAt: u.createdAt.toISOString(),
  });
}