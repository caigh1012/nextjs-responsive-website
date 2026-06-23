import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/lib/database/prisma';

const TOKEN_COOKIE_KEY = 'token';
const TOKEN_EXPIRES_IN = '12h';
const TOKEN_MAX_AGE = 60 * 60 * 12;
const TOKEN_EXPIRES_MS = TOKEN_MAX_AGE * 1000;

type LoginBody = {
  username?: string;
  password?: string;
};

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as LoginBody;
    const username = body.username?.trim();
    const password = body.password;

    console.log(body);

    if (!username || !password) {
      return NextResponse.json({ message: '请输入用户名和密码' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { username },
      select: {
        id: true,
        username: true,
        nickname: true,
        password: true,
      },
    });

    if (!user || user.password !== password) {
      return NextResponse.json({ message: '用户名和密码不正确，请重新输入' }, { status: 401 });
    }

    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
      return NextResponse.json({ message: '服务端未配置 JWT_SECRET' }, { status: 500 });
    }

    const token = jwt.sign(
      {
        sub: user.id.toString(),
        username: user.username,
        nickname: user.nickname,
      },
      jwtSecret,
      { expiresIn: TOKEN_EXPIRES_IN },
    );

    const response = NextResponse.json(
      {
        message: '登录成功',
        data: {
          id: user.id.toString(),
          username: user.username,
          nickname: user.nickname,
        },
      },
      { status: 200 },
    );

    response.cookies.set({
      name: TOKEN_COOKIE_KEY,
      value: token,
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: TOKEN_MAX_AGE,
      expires: new Date(Date.now() + TOKEN_EXPIRES_MS),
      path: '/',
    });

    return response;
  } catch {
    return NextResponse.json({ message: '请求数据格式不正确' }, { status: 400 });
  }
}
