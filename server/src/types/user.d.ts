export interface Guild {
  id: string;
  name: string;
  icon: string;
  owner: boolean;
  permissions: number;
  features: string[];
  permissions_new: string;
}

export interface User {
  id: string;
  username: string;
  avatar: string;
  avatar_decoration: string | null;
  discriminator: string;
  public_flags: number;
  flags: number;
  banner: string | null;
  banner_color: string;
  accent_color: string;
  locale: string;
  mfa_enable: boolean;
  premium_type: number;
  provider: "discord";
  accessToken: string;
  guilds: Guild[];
  refreshToken: string;
  fetchedAt: Date;
}
