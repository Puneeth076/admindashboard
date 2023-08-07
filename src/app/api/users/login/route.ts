import { connect } from "@/config/dbCofig";
import userModel from "@/models/userModel";
import bcryptjs from "bcryptjs";
import JWT from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody: any = await request.json();
    const { email, password } = reqBody;

    const user = await userModel.findOne({ email });
    if (!user) {
      return NextResponse.json({
        status: false,
        message: "User not found",
      });
    }

    //compare password
    const comparePwd = await bcryptjs.compare(password, user.password);

    if (!comparePwd) {
      return NextResponse.json({
        status: false,
        message: "Password mismatch",
      });
    }

    const tokenData = {
      userId: user._id,
      email: user.email,
      username: user.username,
    };
    //create jwt token
    const token = await JWT.sign(tokenData, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      status: true,
      message: "Login successfully",
      token,
    });
    response.cookies.set("token", token, { httpOnly: true });
    user.jwtToken = token.toString();
    user.jwtTokenExpiry = Date.now() + 3600000;
    await user.save();

    return response;
  } catch (error: any) {
    return NextResponse.json({
      status: false,
      message: "Error in login route",
    });
  }
}
