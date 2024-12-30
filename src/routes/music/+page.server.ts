import type { PageServerLoad } from "./$types";
import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from "$env/static/private";
import { Buffer } from "node:buffer";

export type SpotifyPlaylistResponse = {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: null;
  total: number;
  items: Array<{
    collaborative: boolean;
    description: string;
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    images: Array<{
      height?: number;
      url: string;
      width?: number;
    }>;
    name: string;
    owner: {
      display_name: string;
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      type: string;
      uri: string;
    };
    primary_color: null;
    public: boolean;
    snapshot_id: string;
    tracks: {
      href: string;
      total: number;
    };
    type: string;
    uri: string;
  }>;
};

export const load: PageServerLoad = async () => {
  const authUrl = "https://accounts.spotify.com/api/token";
  const apiUrl = "https://api.spotify.com/v1";
  const authHeader =
    "Basic " +
    new Buffer.from(SPOTIFY_CLIENT_ID + ":" + SPOTIFY_CLIENT_SECRET).toString(
      "base64",
    );

  const response = await fetch(authUrl, {
    method: "POST",
    headers: {
      Authorization: authHeader,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });
  const jsonData: {
    access_token: string;
    token_type: string;
    expires_in: number;
  } = await response.json();

  if (!response.ok) {
    return { error: response.statusText };
  }

  let loop = true;
  const playlistData: SpotifyPlaylistResponse = {
    href: "",
    limit: 0,
    next: "",
    offset: 0,
    previous: null,
    total: 0,
    items: [],
  };
  let playlistUrl = `${apiUrl}/users/mccune1224/playlists?limit=20&offset=0`;
  while (loop) {
    loop = false;
    const profileResponse = await fetch(playlistUrl, {
      headers: {
        Authorization: `${jsonData.token_type} ${jsonData.access_token}`,
      },
    });
    const foo = await profileResponse.json();
    if (foo.next != null) {
      playlistUrl = foo.next;
      loop = true;
    }
    playlistData.items = [...playlistData.items, ...foo.items];
  }

  return { playlistData };
};
