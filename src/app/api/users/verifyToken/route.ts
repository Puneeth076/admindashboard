import { connect } from "@/config/dbCofig";
import userModel from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { token } = reqBody;
    const user = await userModel.findOne({ jwtToken: token });
    if (!user) {
      const response = NextResponse.json({
        status: false,
        message: "Invalid token",
      });
      response.cookies.delete;
      return response;
    }
    return NextResponse.json({
      status: true,
      message: "valid token",
    });
  } catch (error: any) {
    return NextResponse.json({
      status: false,
      message: "Error in verifing",
    });
  }
}
