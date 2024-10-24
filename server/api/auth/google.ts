import { OAuth2Client } from 'google-auth-library';
import { APIResponse } from '~/utils/api.types';
import { User } from '~/utils/user.types';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export interface ApiAuthGoogleDTO extends APIResponse {
    user?:User
};

export default defineEventHandler(async (event):Promise<ApiAuthGoogleDTO> => {
  try {
    const { token } = await readBody(event);
    console.log('Checking token',token);

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    if(!payload) throw new Error('Blank payload!');

    const user:User = {
        name: payload.name??'',
        email: payload.email??'',
        picture: payload.picture??'',
    }

    return {
      success: true,
      user
    };
  } catch (error) {
    return {
      success: false,
      error: 'Invalid token',
    };
  }
});