import type { User } from './user.type';

export type UserGroup = {
	id: string;
	friendlyName: string;
	name: string;
	createdAt: string;
};

export type UserGroupWithUsers = UserGroup & {
	users: User[];
};

export type UserGroupWithUserCount = UserGroup & {
	userCount: number;
};

export type UserGroupCreate = Pick<UserGroup, 'friendlyName' | 'name'>;
